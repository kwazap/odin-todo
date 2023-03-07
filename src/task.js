import { pubsub } from "./pubsub"

class Task {
    constructor(taskName, descritpion, dueDate, priority, id){
        this.taskName = taskName
        this.descritpion = descritpion
        this.dueDate = dueDate
        this.priority = priority || 1
        this.id = id
    }    
}



export {Task}