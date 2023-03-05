import { format } from "date-fns"
import { pubsub } from "./pubsub"

//DOM cache
const content = document.querySelector('.task-list')
const projects = document.querySelector('.projects')
const newTaskBtn = document.querySelector('.new-button')
const newTaskMenu = document.querySelector('.new-task-menu')
const taskTemplate = document.querySelector('.task-template')
const newProjectForm = document.querySelector('.new-project-form')
const newProjectButton = document.querySelector('.new-project-button')

//pubsub init
pubsub.subscribe('projectsChanged', renderProjects)
pubsub.subscribe('taskUpdated', renderProject)

//Always present event listeners
newTaskBtn.addEventListener('click', toggleNewTaskMenu)
newProjectButton.addEventListener('click', toggleNewProjectMenu)
newTaskMenu.addEventListener('submit', addNewTask)
newProjectForm.addEventListener('submit', addNewProject)

function toggleNewTaskMenu() {
    if (newTaskMenu.style.display) {
        newTaskMenu.style.display = ''   
    } else {
        newTaskMenu.style.display = 'block'
    }
    document.querySelector('.new-task-menu #datetime-local').value = format(new Date(), 'yyyy-MM-dd')
}

function toggleNewProjectMenu() {
    if (newProjectForm.style.display) {
        newProjectForm.style.display = ''
    } else {
        newProjectForm.style.display = 'block'
    }
}

function addNewProject(e) {
    e.preventDefault()
    pubsub.publish('addNewProject', document.querySelector('.new-project-input').value)
}

function addNewTask(e) {
    e.preventDefault()
    // [name, description, date, priority]
    const targetProject = document.querySelector('#project').value
    const taskArgumentArray = [
        document.querySelector('#taskName').value,
        document.querySelector('#taskDescription').value,
        new Date(document.querySelector('#datetime-local').value),
        document.querySelector('input[name="new-priority"]:checked').value
    ]
    pubsub.publish(`taskAddedto${targetProject}`, taskArgumentArray)
}

export function renderProjects(newProjectsArray) {
    clearSidebar()
    newProjectsArray = newProjectsArray || []
    newProjectsArray.forEach(element => {
        const newElement = document.createElement('div')
        newElement.textContent = element.projectName
        projects.appendChild(newElement)
        newElement.addEventListener('click', function () {
            renderProject(element)            
        })
    }); 
}

export function renderProject(Project) {
    clearTasks()
    newTaskMenu.querySelector('#project').value = Project.projectName
    const newTaskArray = Project.taskArray
    for (let i = 0; i < newTaskArray.length; i++) {
        const element = newTaskArray[i]
        renderTask(element, Project.projectName, i)
    }
}

function renderTask(element, projectName, i) {
    const newElement = taskTemplate.cloneNode(true)
    const dateString = format(element.dueDate, 'yyyy-MM-dd')
    newElement.className = 'task'
    newElement.querySelector('.task-date').textContent = dateString
    newElement.querySelector('#datetime-local').value = dateString
    newElement.querySelector('span').textContent = element.taskName
    newElement.querySelector('#taskDescription').value = element.descritpion
    newElement.setAttribute('id', i)
    newElement.setAttribute('project', projectName)
    newElement.querySelector(`input[value="${element.priority}"]`).setAttribute('checked', true)
    newElement.querySelector('span').addEventListener('click', toggleTaskEditMenu)
    newElement.querySelector('.task-remove-button').addEventListener('click', removeTask)
    newElement.querySelector('.task-details').addEventListener('submit', saveTaskChanges)
    content.appendChild(newElement)
}

function saveTaskChanges(e) {
    e.preventDefault()
    const taskDOM = e.target.parentElement
    const targetProject = taskDOM.getAttribute('project')
    const id = taskDOM.getAttribute('id')
    //[id, name, desc, date, prio]
    const editedTaskArguments = [
        id,
        taskDOM.querySelector('.task-name').textContent,
        taskDOM.querySelector('#taskDescription').value,
        new Date(taskDOM.querySelector('#datetime-local').value),
        taskDOM.querySelector('input[name="edit-priority"]:checked').value
    ]
    pubsub.publish(`taskUpdated${targetProject}`, editedTaskArguments)
    //use old id to reopen last edited task after rerender
    const newTaskDOM = document.querySelector(`div[id='${id}']`)
    newTaskDOM.querySelector('.task-details').style.display = 'block'
}

function toggleTaskEditMenu() {
    const parent = this.parentElement.parentElement
    if (parent.querySelector('.task-details').style.display == '') {
        parent.querySelector('.task-details').style.display = 'block'
    } else {
        parent.querySelector('.task-details').style.display = ''
    }
}

function removeTask() {
    const taskDOM = this.parentElement.parentElement
    pubsub.publish(`taskRemoved${taskDOM.getAttribute('project')}`, taskDOM.getAttribute('id'))
}

function clearSidebar() {
    Array.from(projects.children).forEach(element => {
        element.remove()
    })
}

function clearTasks() {
    Array.from(content.children).forEach(element => {
        element.remove()
    })
}