import { pubsub } from "./pubsub";
import { Task } from "./task";
import { Projects } from "./projects";

class Project {
    constructor (projectName) {
        this.projectName = projectName;
        this.taskArray = []
        Projects.projectsArray.push(this)
        pubsub.publish('projectsChanged', Projects.projectsArray)
        pubsub.subscribe(`taskAddedto${this.projectName}`, this.addTask.bind(this))
        pubsub.subscribe(`taskRemoved${this.projectName}`, this.removeTask.bind(this))
    }

    get name() {
        return this.projectName;
    }

    addTask([taskName, descritpion, datetime, priority]) {
        this.taskArray.push(new Task(taskName, descritpion, datetime, priority))
        pubsub.publish('taskUpdated', this)
    }

    removeTask(id) {
        this.taskArray[id] = null
        this.taskArray = this.taskArray.filter(n => n)
        pubsub.publish('taskUpdated', this)
    }
}


export { Project }