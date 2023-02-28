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
        this.taskArray.push(new Task(taskName, descritpion, this.idTicker, datetime))
        this.idTicker += 1
        pubsub.publish('taskUpdated', this)
    }

    removeTask(id) {
        console.log(id, this.taskArray, this.taskArray[id]);
        this.taskArray[id] = null
        this.taskArray = this.taskArray.filter(n => n)
        pubsub.publish('taskUpdated', this)
        console.log(id, this.taskArray, this.taskArray[id]);
    }
}


export { Project }