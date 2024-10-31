const cube = function(x){
    return x * x * x
}

const cube2 = (x) => x * x * x;

const PI = Math.PI;

function testlogs(){
console.log(cube(5));
console.log(cube2(10));
}

// testlogs();



//exporte

// export { cube, PI }

export default {cube, PI}
