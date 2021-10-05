interface Cat{

        username:string;
        age:string;
        
    }


    const marge:Cat={
        username:"sohil",
        age:'visnagar',
        
    }

type catkey=keyof Cat;

type agetype=Cat['age'];


function getproperties<T,K extends keyof T>(obj:T,propertiesname:K):T[K]{

return (obj[propertiesname]);
    
}

const cat:Cat=null;
const getage=getproperties(cat,'username');