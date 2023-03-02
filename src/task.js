import { pubsub } from "./pubsub"

class Task {
    constructor(taskName, descritpion, dueDate, priority){
        this.taskName = taskName
        this.descritpion = descritpion
        this.dueDate = dueDate
        this.priority = priority || 1
    }    
}



export {Task}