function Roosevelts(rooseveltName) {

let myRegex = /(Franklin|Franklin D.|Eleanor) Roosevelt/; 
console.log(myRegex.test(rooseveltName));
}

Roosevelts("Eleanor Roosevelt")
Roosevelts("Franklin D. Roosevelt");