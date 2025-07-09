const accountId = 144553
let accountemail = "utkarsh@google.com"
var accountPassword = "12345"
accountCity = "New delhi"
let accountstate;

// accountId = 2  //not allowed



accountemail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
prefer not to use var because of issue in block scope and functional scope ,(),{} are scopes
semicolon is not necessary no difference 
if no value given then js show undefined value
*/

console.table([accountId, accountemail, accountPassword,accountCity,accountstate] )