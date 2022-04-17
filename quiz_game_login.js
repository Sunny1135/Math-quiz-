player1id=document.getElementById("player1id").value;
player2id=document.getElementById("player2id").value;
function login()
{
window.location="quiz_game.html";
localStorage.setItem("player1_name:"+player1id);
localStorage.setItem("player2_name:"+player2id);
}