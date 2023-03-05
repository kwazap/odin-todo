import { format } from "date-fns";
import { Project } from "./project";
import { Projects } from "./projects";
import { renderProject, renderTask, renderProjects } from "./render";
import "./style.css";


const project1 = new Project('name')
project1.addTask(['xxxx', 'bxxxxxbbbb', new Date(1000, 10, 10)])
project1.addTask(['xxxx', 'bxxxxxbbbb', new Date(1000, 10, 10)])
project1.addTask(['xxxx', 'bxxxxxbbbb', new Date(1000, 10, 10)])
project1.addTask(['aaaa', 'bxxxxxbbbb', new Date(1000, 10, 10)])
project1.addTask(['bbbb', 'bxxxxxbbbb', new Date(1000, 10, 10)])
project1.addTask(['cccc', 'bxxxxxbbbb', new Date(1000, 10, 10)])

project1.removeTask(1)
// project1.taskArray[0].updateTask('dsadasdasda', 'b', 'c', 'd')

const project2 = new Project('ime')
project2.addTask(['xxxx', 'bxxxxxbbbb', new Date(1000, 10, 10)])
const project3 = new Project('asdasddsadasd')
project3.addTask(['gg', 'gg', new Date(1000, 10, 10)])

Projects.deleteProject('asdasddsadasd')

// console.log(project1.taskArray[0], 'aaaaaa');
// console.log(Projects.projectsArray);