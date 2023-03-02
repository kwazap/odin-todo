import { pubsub } from "./pubsub"

class Task {
    constructor(taskName, descritpion, dueDate, priority){
        this.taskName = taskName
        this.descritpion = descritpion
        this.dueDate = dueDate
        this.priority = priority || 1
    }

    updateTask(...args) {
        this.taskName = args[0] || this.taskName
        this.descritpion = args[1] || this.descritpion
        this.priority = args[2] || this.priority
        this.dueDate = args[3] || this.dueDate
    }    
}



export {Task}