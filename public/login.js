function login() {
    const nameEl = document.querySelector("#username");
    localStorage.setItem("userName", nameEl.value);
    window.location.href = "myaccount.html";
  }