(async () => {
    const userName = localStorage.getItem('userName');
    const loggedIn = ['myaccount', 'recipeLink', 'signOut']
    const notLoggedIn = ['logInContent', 'logInBtn']
    if (userName) {
      // document.querySelector('#playerName').textContent = userName;
      setDisplay(notLoggedIn, 'none');
      setDisplay(loggedIn, 'block');
    } else {
      setDisplay(notLoggedIn, 'block');
      setDisplay(loggedIn, 'none');
    }
  })();

  function setDisplay(controlId, display) {
    controlId.forEach(element => {
      const displayEl = document.querySelector(`#${element}`);
      if (displayEl){
        displayEl.style.display = display;
      }
    });
    // const playControlEl = document.querySelector(`#${controlId}`);
    // if (playControlEl) {
    //   playControlEl.style.display = display;
    // }
  }

  function logout() {
    localStorage.removeItem('userName');
    fetch(`/api/auth/logout`, {
      method: 'delete',
    }).then(() => (window.location.href = '/'));
  }