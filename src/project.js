import { pubsub } from "./pubsub";

class Project {
    constructor (projectName) {
        this.projectName = projectName;
        this.taskArray = []
    }

    get name() {
        return this.projectName;
    }

    addTask(newTask) {
        this.taskArray.push(newTask)
        pubsub.publish('taskAdded', this.taskArray)
    }
}


export { Project }