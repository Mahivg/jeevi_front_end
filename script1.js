// Finding an Element

const loginButton = document.getElementById('loginBtn');
// console.dir(loginButton);

// one way of adding listener
// loginButton.addEventListener('click',  (event) => {
//     const userNameElement = document.getElementById('txtUserName');
//     const passwordElement = document.getElementById('txtPassword');
//     console.log(userNameElement.value);
//     console.log(passwordElement.value);

//     console.log("button got clicked");
// });

// loginButton.addEventListener('mouseenter', functionRef);

function onLoginButtonClick(event) {
    const userNameElement = document.getElementById('txtUserName');
    const passwordElement = document.getElementById('txtPassword');
    console.log(userNameElement.value);
    console.log(passwordElement.value);
    console.log("button got clicked");
}


const inputs = document.getElementsByClassName('my-input'); // []
// console.log(inputs);


