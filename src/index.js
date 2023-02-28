import { Project } from "./project";
import { pubsub } from "./pubsub";
import { renderProject, renderTask, renderProjects } from "./render";
import "./style.css";


const project1 = new Project('name')
project1.addTask(['xxxx', 'bxxxxxbbbb'])
project1.addTask(['xxxx', 'bxxxxxbbbb'])
project1.addTask(['xxxx', 'bxxxxxbbbb'])

project1.removeTask(1)
project1.taskArray[0].updateTask('a', 'b', 'c', 'd')

const project2 = new Project('ime')
project2.addTask(['xxxx', 'bxxxxxbbbb'])
const project3 = new Project('asdasddsadasd')
// project3.addTask(['gg','gg'])

// console.log(project1.taskArray[0], 'aaaaaa');
// console.log(Projects.projectsArray);