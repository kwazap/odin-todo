import { pubsub } from "./pubsub"

export function render(what) {
    console.log('render log:', what)
    pubsub.subscribe('taskAdded', render)
}