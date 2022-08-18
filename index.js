function receivesAFunction(callback){
    return callback();
}

function returnsANamedFunction(){
    function func(){

    }
    return func;
}

const returnsAnAnonymousFunction = function () {
    return () => {}
}