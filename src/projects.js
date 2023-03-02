import { Project } from "./project";
import { pubsub } from "./pubsub";

export const Projects = {
    projectsArray: [],

    addNewProject: function (newProjectName) {
        console.log('working');
        new Project(newProjectName)
    }
}

pubsub.subscribe('addNewProject', Projects.addNewProject)