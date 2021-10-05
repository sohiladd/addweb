interface IPerson { 
    firstName:string, 
    lastName:string, 
    sayHi: ()=>string 
 } 
 
 var customer:IPerson = { 
    firstName:"Ketan",
    lastName:"dabhi", 
    sayHi: ():string =>{return "Hi there"} 
 } 
 
 console.log("Customer Object ") 
 console.log(customer.firstName) 
 console.log(customer.lastName) 
 console.log(customer.sayHi())  
 
 var employee:IPerson = { 
    firstName:"rajveer",
    lastName:"khachar", 
    sayHi: ():string =>{return "Hello!!!"} 
 } 
   
 console.log("Employee  Object ") 
 console.log(employee.firstName)
 console.log(employee.lastName)