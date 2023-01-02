import { pubsub } from "./pubsub"

export function render(what) {
    
    if (!what) {
    } else {
        if (document.querySelector('.cc')) {
            document.querySelector('.cc').remove()
        }
        let result = Object.values(what)
        const cc = document.createElement('div')
        cc.className = 'cc'
        const container = document.querySelector('.container')
        container.appendChild(cc)
        result.forEach(element => {
            const div = document.createElement('div')
            div.textContent = element.taskName
            cc.appendChild(div)
        });
    }
    pubsub.subscribe('taskAdded', render)
}

export function renderTask(...args) {
    console.log('renderTask:', args[0], args[1]);
    pubsub.subscribe('taskUpdated', renderTask)
}