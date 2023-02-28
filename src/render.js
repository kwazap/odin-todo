import { pubsub } from "./pubsub"

//DOM cache
const content = document.querySelector('.task-list')
const projects = document.querySelector('.projects')
const newTaskBtn = document.querySelector('.new-button')
const newTaskMenu = document.querySelector('.new-task-menu')
const newTaskMenuAddBtn = document.querySelector('.new-task-menu-add')
const newTaskMenuCancelBtn = document.querySelector('.new-task-menu-cancel')
const taskTemplate = document.querySelector('.task-template')

//pubsub init
pubsub.subscribe('projectsChanged', renderProjects)
pubsub.subscribe('taskUpdated', renderProject)
pubsub.subscribe('taskUpdated', renderTask)


//Always present event listeners
newTaskBtn.addEventListener('click', openNewTaskMenu)
newTaskMenuCancelBtn.addEventListener('click', closeNewTaskMenu)
newTaskMenuAddBtn.addEventListener('click', addNewTask)

function openNewTaskMenu() {
    console.log('addnewtask')
    newTaskMenu.style.display = 'block'   
}

function addNewTask() {
    // [name, description, date, priority]
    const targetProject = document.querySelector('#project').value
    const taskArgumentArray = [
        document.querySelector('#taskName').value,
        document.querySelector('#taskDescription').value,
        new Date(document.querySelector('#datetime-local').value)
    ]
    console.log('sending to project', taskArgumentArray, targetProject);
    pubsub.publish(`taskAddedto${targetProject}`, taskArgumentArray)
}

function closeNewTaskMenu() {
    console.log('cancel');
    newTaskMenu.style.display = 'none'
}

export function renderProjects(newProjectsArray) {
    clearSidebar()
    newProjectsArray = newProjectsArray || []
    newProjectsArray.forEach(element => {
        const newElement = document.createElement('div')
        newElement.textContent = element.name
        projects.appendChild(newElement)
        newElement.addEventListener('click', function () {
            renderProject(element.taskArray)            
        })
    }); 
}

export function renderProject(newTaskArray) {
    clearTasks()
    newTaskArray = newTaskArray || []
    newTaskArray.forEach(element => {
        renderTask(element)
    })
}

function renderTask(element) {
    const newElement = taskTemplate.cloneNode(true)
    newElement.className = 'task'
    newElement.querySelector('span').textContent = element.taskName
    newElement.setAttribute('id', element.id)
    newElement.querySelector('span').addEventListener('click', toggleTaskEditMenu)
    newElement.querySelector('.task-remove-button').addEventListener('click', removeTask)
    content.appendChild(newElement)
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
    console.log(this.parentElement.parentElement.getAttribute('id'));
    pubsub.publish('taskRemoved', this.parentElement.parentElement.getAttribute('id'))
}

export function renderHome() {
    


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