// with guard causes technique
function micro_controller_connect(wifi, user_auth, user_admin){
    if(!wifi){
        console.log("ESP 32 Wifi access failed..!");
        return;
    }
    
    if(!user_auth){
        console.log("User authentication failed..!");
        return;
    }
    
    if(!user_admin){
        console.log("User is not authenticated as admin..!");
        return;
    }
    
    var user_access_level = "admin";
    console.log("User is admin");
}

var wifi = true;
var user_auth = true;
var user_admin = true;

micro_controller_connect(wifi, user_auth, user_admin);