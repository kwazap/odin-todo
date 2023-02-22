
export const pubsub = {
    events: {},

    subscribe (eventName, fn) {
        this.events[eventName] = this.events[eventName] || []          
        if (this.events[eventName] == []) {
            this.events[eventName].push(fn)
        } else {
            for (let i = 0; i < this.events[eventName].length; i++) {
                if (this.events[eventName][i] == fn) {
                    return
                }                
            }
            this.events[eventName].push(fn)
        }
        // console.log(this.events, this.events['projectsChanged'])
    },

    publish(eventName, value) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(fn => {
                fn(value)
            });
        }
    }
}