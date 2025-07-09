// singleton
//Object.create

// object literals

const mySym = Symbol("key1")

const jsuser = {
    name: "utkarsh",
    "full name": "utkarsh pandey",
    [mySym]: "mykey1",
    age: 18,
    location: "New delhi",
    email: "utkarsh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]

}

// console.log(jsuser.email);
// console.log(jsuser["email"]);
// console.log(jsuser["full name"]);
// console.log(jsuser[mySym]);

jsuser.email = "utkarsh@chatgpt.com"
//Object.freeze(jsuser)
jsuser.email = "utkarsh@microsoft.com"
// console.log(jsuser);

jsuser.greeting = function(){
    console.log("hello js user");
    
}
jsuser.greetingtwo = function(){
    console.log(`hello js user, ${this.name}`);
    
}

//console.log(jsuser.greeting);
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());



