import { format } from "date-fns";
import { Project } from "./project";
import { Projects } from "./projects";
import { renderProject, renderTask, renderProjects } from "./render";
import "./style.css";


const project1 = new Project('name')
project1.addTask(['name1', 'bxxxxxbbbb', new Date(2023, 3, 8)])
project1.addTask(['name2', 'bxxxxxbbbb', new Date(2023, 3, 6)])
project1.addTask(['name3', 'bxxxxxbbbb', new Date(2023, 3, 7)])
project1.addTask(['name4', 'bxxxxxbbbb', new Date(2023, 3, 5)])
project1.addTask(['name5', 'bxxxxxbbbb', new Date(2023, 3, 11)])
project1.addTask(['name6', 'bxxxxxbbbb', new Date(2023, 3, 14)])

const project2 = new Project('ime')
project2.addTask(['ime1', 'bxxxxxbbbb', new Date(2023, 3, 5)])
project2.addTask(['ime1', 'bxxxxxbbbb', new Date(2023, 3, 7)])
project2.addTask(['ime1', 'bxxxxxbbbb', new Date(2023, 3, 15)])
const project3 = new Project('asdasddsadasd')
project3.addTask(['asdasddsadasd1', 'gg', new Date(2023, 3, 5)])