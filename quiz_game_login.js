function addUser() {
    var player1name = document.getElementById("player1name").Value;
    var player2name = document.getElementById("player2name").Value;
    localStorage.setItem("player1name", player1name);
    localStorage.setItem("player2name", player2name);
    window.location = "quiz_game_page.html";
}