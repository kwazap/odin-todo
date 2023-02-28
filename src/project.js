import { pubsub } from "./pubsub";
import { Task } from "./task";
import { Projects } from "./projects";

class Project {
    constructor (projectName) {
        this.projectName = projectName;
        this.taskArray = []
        Projects.projectsArray.push(this)
        this.idTicker = 0
        pubsub.publish('projectsChanged', Projects.projectsArray)
        pubsub.subscribe(`taskAddedto${this.projectName}`, this.addTask.bind(this))
        pubsub.subscribe(`taskRemoved${this.projectName}`, this.removeTask.bind(this))
    }

    get name() {
        return this.projectName;
    }

    addTask([taskName, descritpion, datetime]) {
        this.idTicker += 1
        this.taskArray.push(new Task(taskName, descritpion, this.idTicker, datetime))
        pubsub.publish('taskUpdated', this.taskArray)
    }

    removeTask(id) {
        this.taskArray[id] = null
        this.taskArray = this.taskArray.filter(n => n)
        pubsub.publish('taskUpdated', this.taskArray)
    }
}


export { Project }