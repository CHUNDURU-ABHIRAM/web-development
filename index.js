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
function randomUser(){
    fetch("https://randomuser.me/api").
    then(function(data){
        return data.json();
    }).then(function(js){
        var user=js.results[0];
        var name=user.name.title+" "+user.name.first+" "+user.name.last;
        var gender=user.gender;
        var image=user.picture.large;
        document.getElementById("user").innerHTML=name;
        document.getElementById("gender").innerHTML=gender;
        document.getElementById("profile").src=image;
    })
}