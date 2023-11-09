
document.addEventListener("DOMContentLoaded", function() {
    const playerNameEl = document.querySelector('.user-name');
    if (localStorage.getItem("userName")){
        playerNameEl.textContent = "Welcome " + localStorage.getItem("userName") + "!";
    } else {
        playerNameEl.textContent = "Please sign in";
    }
});


// getPlayerName() {
//     return localStorage.getItem('userName') || 'Mystery player';
// }