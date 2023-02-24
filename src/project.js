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
    }

    get name() {
        return this.projectName;
    }

    addTask([taskName, descritpion]) {
        this.taskArray.push(new Task(taskName, descritpion, this.taskArray.length))
        pubsub.publish('taskUpdated', this.taskArray)
    }

    removeTask(id) {
        this.taskArray[id] = null
        this.taskArray = this.taskArray.filter(n => n)
        pubsub.publish('taskUpdated', this.taskArray)
    }
}


export { Project }