var users=[{
    "name":"John",
    "gender":"male",
    "image":"dummy profile.png"
},{
    "name":"Jane",
    "gender":"female",
    "image":"jane.png"
}]
let index=0;
function toggleUser(){
    if(index==0){
        index=1;
    }else{
        index=0;
    }
    document.getElementById("user").innerHTML=users[index].name;
    document.getElementById("gender").innerHTML=users[index].gender;
    document.getElementById("profile").src=users[index].image;
}