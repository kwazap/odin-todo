import { Project } from "./project";
import { render } from "./render";
import {Task} from "./task"

render()
const project1 = new Project('name')
project1.addTask('newtask', 'descr')
project1.addTask('newtask', 'descsdar')
project1.addTask('AAAA', 'bbbbb')

project1.removeTask(1)