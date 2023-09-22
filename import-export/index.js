//common js syntax to import file, Ts hiis oldest way to import the file
// var catMe = require('cat-me');
// console.log(catMe());

//ES6 syntax to import file , Ts hiis newest way to import the file
import catMe from "cat-me"; // importing inbuilt module called cat-me.
//console.log(catMe());

// It is called as name import
// Destructuring way of importing own modules form the test.js file into index.js file
//import {test1, test2} from "./test.js";    
//test1();  //calling the modules;
//test2();

// import all modules from test.js file into index.js file using (*) symbol with object name called testPackage
// import * as testPackage from "./test.js";
// testPackage.default();
// testPackage.test1();
// testPackage.test2();

//Default way of importing modules
import default123  from "./test.js";
default123();

//combination of both Default and named import
// import default123, {test1, test2} from "./test.js";
// default123();
// test1();