// für named export
// import { cube, PI } from "./export.mjs"

// console.log(cube(2));
// console.log(PI);


// für unnamed export > default (alles)
import Mathe from "./export.mjs"

console.log(Mathe.PI);
console.log(Mathe.cube(5));
