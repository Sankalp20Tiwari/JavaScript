//Immediately Invoked Functions Expressions (IIFE)

(function chai(){  //named iife 
    console.log("DB Connected")
})();   //if we do not put semicolon ; next function is not executed 
 
//IIFE used to protectfrom pollution of global scope 

((name) => {   //unnamed iife 
    console.log(`DB Connected two ${name}`)
})('sangu')
 

