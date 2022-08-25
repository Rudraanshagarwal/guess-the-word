function addUser(){
    player_1=document.getElementById("i1").value;
    player_2=document.getElementById("i2").value;

    localStorage.setItem("player_1",player_1);
    localStorage.setItem("player_2",player_2);

window.location="index2.html";
}