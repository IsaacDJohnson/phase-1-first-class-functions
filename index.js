function receivesAFunction(cb){
    console.log()
        cb();
}

function returnsANamedFunction(){
    return function named(){
        return 'function'
    }
}

function returnsAnAnonymousFunction(){
    return function (){
        return 'Good news everyone!'
    }
}

