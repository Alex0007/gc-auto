var MemCleaner = (function() {

    if (global.gc) {
        console.log('Garbage collector is available on global scope')
    } else {
        console.log('--expose-gc flag wasn\'t provided')
    }

    var instance = global.gc ? setInterval(function() {
        try {
            global.gc()
        } catch (gcerr) {
            console.log('Garbage collecting error', gcerr)
        }
    }, 30000) : undefined

    return function Construct_singletone() {
        if (instance) {
            return instance
        }
        if (this && this.constructor === Construct_singletone) {
            instance = this
        } else {
            return new Construct_singletone()
        }
    }
}())

module.exports = MemCleaner
