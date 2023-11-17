// (async () => {
//   const userName = localStorage.getItem('userName');
//   const loggedIn = ['myaccount', 'recipeLink']
//   if (userName) {
//     // document.querySelector('#playerName').textContent = userName;
//     setDisplay(['loginControls'], 'none');
//     setDisplay(loggedIn, 'block');
//   } else {
//     setDisplay(['loginControls'], 'block');
//     setDisplay(loggedIn, 'none');
//   }
// })();

async function loginUser() {
  loginOrCreate(`/api/auth/login`);
}

async function createUser() {
  loginOrCreate(`/api/auth/create`);
}

async function loginOrCreate(endpoint) {
  const userName = document.querySelector('#username')?.value;
  const password = document.querySelector('#password')?.value;
  const response = await fetch(endpoint, {
    method: 'post',
    body: JSON.stringify({ email: userName, password: password }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  if (response.ok) {
    localStorage.setItem('userName', userName);
    // const hidden = document.querySelectorAll(".hide");
    // hidden.style.display = display;
    window.location.href = 'myaccount.html';
  } else {
    const error = document.getElementById('message');
    error.textContent = "⚠ Error: Unauthorized";
  }
}

function logout() {
  localStorage.removeItem('userName');
  fetch(`/api/auth/logout`, {
    method: 'delete',
  }).then(() => (window.location.href = '/'));
}

async function getUser(email) {
  let recipes = [];
  // See if we have a user with the given email.
  const response = await fetch(`/api/user/${email}`);
  if (response.status === 200) {
    return response.json();
  }

  return null;
}

// function setDisplay(controlId, display) {
//   controlId.forEach(element => {
//     const displayEl = document.querySelector(`#${element}`);
//     if (displayEl){
//       displayEl.style.display = display;
//     }
//   });
//   // const playControlEl = document.querySelector(`#${controlId}`);
//   // if (playControlEl) {
//   //   playControlEl.style.display = display;
//   // }
// }
