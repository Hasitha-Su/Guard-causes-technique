// without guard causes technique
function micro_controller_connect(wifi, user_auth, user_admin){
    if(wifi){
        if(user_auth){
            if(user_admin){
                var user_access_level = "admin";
                console.log("User is admin");
            }else{
                console.log("User is not authenticated as admin..!");
            }   
        }else{
            console.log("User authentication failed..!");
        }
    }else{
        console.log("ESP 32 Wifi access failed..!")
    }
}

var wifi = true;
var user_auth = true;
var user_admin = false;

micro_controller_connect(wifi, user_auth, user_admin);