
    interface user
    {
    username:string;
    readonly ac_number:number;
    amount:number;
    }
    interface credit
    {
        ac_number:12345678910,
        amount:200,
    }
    interface debit{
        ac_number:12345678910,
        amount:200,     
    }
class usrinfo { 


 inf:user={
    username:"sohil",
    ac_number:12345678910,
    amount:200,
}
}
class debit extends usrinfo{

 
    infcred:credit={
        ac_number:12345678910,
        amount:200,
    }
 
}

const j=new debit();
const lu=j.inf.username;
const lac=j.inf.ac_number;
const la=j.inf.amount;


console.log(lu+"<br>"+lac+"<br>"+la);


// this is credit code
console.log(la-20);
console.log(la);
