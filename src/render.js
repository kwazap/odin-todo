import { pubsub } from "./pubsub"

//DOM cache
const content = document.querySelector('.task-list')
const projects = document.querySelector('.projects')
const newTaskBtn = document.querySelector('.new-button')
const newTaskMenu = document.querySelector('.new-task-menu')
const newTaskMenuAddBtn = document.querySelector('.new-task-menu-add')
const newTaskMenuCancelBtn = document.querySelector('.new-task-menu-cancel')

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
    // [name, description]
    const targetProject = document.querySelector('#project').value
    const taskArgumentArray = [
        document.querySelector('#taskName').value,
        document.querySelector('#taskDescription').value
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
    // pubsub.subscribe('projectsChanged', renderProjects)    
}

export function renderProject(newTaskArray) {
    clearTasks()
    newTaskArray = newTaskArray || []
    newTaskArray.forEach(element => {
        const newElement = document.createElement('div')
        newElement.className = 'task'
        newElement.textContent = element.taskName
        content.appendChild(newElement)
    })
}

export function renderSidebar(){



}

export function renderHome() {
    


}

export function renderTask(...args) {
    // console.log('renderTask:', args[0], args[1]);

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