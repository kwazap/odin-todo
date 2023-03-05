import { Project } from "./project";
import { pubsub } from "./pubsub";

export const Projects = {
    projectsArray: [],

    addNewProject: function (newProjectName) {
        console.log('working');
        new Project(newProjectName)
    },

    deleteProject: function (delProjectName) {
        for (let i = 0; i < this.projectsArray.length; i++) {
            console.log(this.projectsArray.length);
            if (this.projectsArray[i].projectName == delProjectName) {
                this.projectsArray[i] = null
            }
            this.projectsArray = this.projectsArray.filter(n => n)
            pubsub.publish('projectsChanged', this.projectsArray)                        
        }
    }
}

pubsub.subscribe('addNewProject', Projects.addNewProject)