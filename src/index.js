import { format } from "date-fns";
import { Project } from "./project";
import { Projects } from "./projects";
import { renderProject, renderTask, renderProjects } from "./render";
import "./style.css";


const project1 = new Project('name')
project1.addTask(['xxxx', 'bxxxxxbbbb', new Date(2023, 3, 8)])
project1.addTask(['xxxx', 'bxxxxxbbbb', new Date(2023, 3, 6)])
project1.addTask(['xxxx', 'bxxxxxbbbb', new Date(2023, 3, 7)])
project1.addTask(['aaaa', 'bxxxxxbbbb', new Date(2023, 3, 5)])
project1.addTask(['bbbb', 'bxxxxxbbbb', new Date(2023, 3, 11)])
project1.addTask(['cccc', 'bxxxxxbbbb', new Date(2023, 3, 14)])

// project1.removeTask(1)

// const project2 = new Project('ime')
// project2.addTask(['xxxx', 'bxxxxxbbbb', new Date(2023, 3, 5)])
// project2.addTask(['xxxx', 'bxxxxxbbbb', new Date(2023, 3, 7)])
// project2.addTask(['xxxx', 'bxxxxxbbbb', new Date(2023, 3, 15)])
// const project3 = new Project('asdasddsadasd')
// project3.addTask(['gg', 'gg', new Date(2023, 3, 5)])