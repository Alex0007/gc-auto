var MemCleaner = (function() {

    var instance

    if (global.gc) {
        console.log('Garbage collector is available on global scope')
    } else {
        console.log('--expose-gc flag wasn\'t provided')
    }

    var set = function(interval) {
        return global.gc ? setInterval(function() {
            try {
                global.gc()
            } catch (gcerr) {
                console.log('Garbage collecting error', gcerr)
            }
        }, interval) : undefined
    }

    var createInstance = function(interval) {

        if (interval < 1000) {
            console.log('gc cleaner interval set to 1 second')
            interval = 1000
        }
        if (instance) {
            clearInterval(instance)
        }

        return set(interval)
    }

    instance = set(30000)

    return function Construct_singletone(interval) {
        if (!global.gc) return
        
        interval = parseInt(interval) || 30000

        console.log('Setting garbage collector periodic task with interval', interval, 'ms')

        instance = createInstance(interval)
        return instance

        if (this && this.constructor === Construct_singletone) {
            instance = this
        } else {
            return new Construct_singletone()
        }
    }
}())

module.exports = MemCleaner
