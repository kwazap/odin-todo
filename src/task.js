import { pubsub } from "./pubsub"

class Task {
    constructor(taskName, descritpion, id, priority, dueDate){
        this.taskName = taskName
        this.descritpion = descritpion
        this.id = id
        this.priority = priority || 1
        this.dueDate = dueDate
    }

    updateTask(...args) {
        this.taskName = args[0] || this.taskName
        this.descritpion = args[1] || this.descritpion
        this.priority = args[2] || this.priority
        this.dueDate = args[3] || this.dueDate
        pubsub.publish('taskUpdated', [this.id, this.descritpion])
    }    
}



export {Task}