import { Project } from "./project";
import { renderProject, renderTask, renderProjects } from "./render";
import { Task } from "./task"
import { Projects } from "./projects"
import "./style.css"


// empty calls for pubsub init
renderProject()
renderTask()
renderProjects()
const project1 = new Project('name')
project1.addTask('newtask', 'descr')
project1.addTask('newtask', 'descsdar')
project1.addTask('AAAA', 'bbbbb')

project1.removeTask(1)
project1.taskArray[0].updateTask('a', 'b', 'c', 'd')

const project2 = new Project('ime')
project2.addTask('xxxx', 'bxxxxxbbbb')
const project3 = new Project('asdasddsadasd')

// console.log(project1.taskArray[0], 'aaaaaa');
// console.log(Projects.projectsArray);