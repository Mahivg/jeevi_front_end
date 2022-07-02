// Finding an Element

const loginButton = document.getElementById('loginBtn');
// console.dir(loginButton);

// one way of adding listener
// loginButton.addEventListener('click',  (event) => {
//     console.log(event);
//     const userNameElement = document.getElementById('txtUserName');
//     const passwordElement = document.getElementById('txtPassword');
//     console.log(userNameElement.value);
//     console.log(passwordElement.value);

//     console.log("button got clicked");
// });

// loginButton.addEventListener('mouseenter', functionRef);

function onLoginButtonClick() {
    const userNameElement = document.getElementById('txtUserName');
    const passwordElement = document.getElementById('txtPassword');
    console.log(userNameElement.value);
    console.log(passwordElement.value);
    console.log("button got clicked");
    document.location.href
    window.open('https://www.google.com');
}


const inputs = document.getElementsByClassName('my-input'); // []
// console.log(inputs);

const divElement = document.createElement('div');
const pElement = document.createElement('p'); 
    // <p class="classname" style="" > snkanssndksa </p>
divElement.textContent = 'THis is my content';
divElement.classList.toggle('classname');
//<div>
//   <p class="classname" style="" > snkanssndksa </p>
// </div>

divElement.append(pElement);

const userNameElement = document.getElementById('txtUserName');

function preventSplCharInput(keyPressEvent) {
    // const keyPressEvent = this.event;
   var numRegex = new RegExp('^[A-Za-z0-9 ]+$');

    //[0-9][a-z][A-Z]
    if(numRegex.test(keyPressEvent.key)) {        
        console.log(keyPressEvent);
    } else {        
       console.log('Preventing');     
       console.log(keyPressEvent);
       keyPressEvent.preventDefault();
    }

}
userNameElement.addEventListener('keydown', preventSplCharInput);
