import { pubsub } from "./pubsub"

//DOM cache
const content = document.querySelector('.content')
const projects = document.querySelector('.projects')

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
    pubsub.subscribe('projectsChanged', renderProjects)    
}

export function renderProject(newTaskArray) {
    console.log(newTaskArray);
    clearTasks()
    newTaskArray = newTaskArray || []
    console.log(newTaskArray, 'renderProject print');
    newTaskArray.forEach(element => {
        const newElement = document.createElement('div')
        newElement.textContent = element.taskName
        content.appendChild(newElement)
    })
    pubsub.subscribe('taskAdded', renderProject)
}

export function renderSidebar(){



}

export function renderHome() {
    


}

export function renderTask(...args) {
    // console.log('renderTask:', args[0], args[1]);
    pubsub.subscribe('taskUpdated', renderTask)
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