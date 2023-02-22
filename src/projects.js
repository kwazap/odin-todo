
export const Projects = {
    projectsArray: [],
    
    getProjectsArray: function () {
        console.log("projectsarray:", projectsArray);
    },

    addProject: function (newProject) {
        this.projectsArray.push(newProject)
        pubsub.publish('projectsChanged', this.projectsArray)
    }
}