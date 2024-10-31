// const square = function (a){
//     return a*a;
// }

// const square = (a) => {
//     return a*a;
// }

const square = (a) => a * a;

console.log(square(50));


const car = {
    model: "Fiesta",
    manofracturer: "Ford",
    fullName(){
        console.log(this);
        return `${this.manofracturer} ${this.model}`
    },
};

console.log(car.fullName());

const car2 = {
    model: "Mazaratti",
    manofractuerer: "GlbalCars",
    fullName(){
        console.log(this);
        return `${this.manofractuerer} is a car of ${this.model}`

        
    }
};

console.log(car2.fullName());

const car3 = {
    model: "Mazaratti3",
    manofractuerer: "GlbalCars3",
    fullName:() => {
        console.log(this);
        return `${this.manofractuerer} is a car of ${this.model}`

        
    }
};

console.log(car3.fullName());
