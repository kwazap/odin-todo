import { Project } from "./project";
import { render, renderTask } from "./render";
import {Task} from "./task"

render()
renderTask()
const project1 = new Project('name')
project1.addTask('newtask', 'descr')
project1.addTask('newtask', 'descsdar')
project1.addTask('AAAA', 'bbbbb')

project1.removeTask(1)
project1.taskArray[0].updateTask('a', 'b', 'c', 'd')

console.log(project1.taskArray[0]);