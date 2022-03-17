const app = document.querySelector('.app');

const inactiveTime = 3000; // 3 seconds
// last time the user moved the mouse
let mouseLastMoveTime = new Date();

// mouse movement listener
document.addEventListener('mousemove',()=>{
    mouseLastMoveTime = new Date();
    // show tge app
    app.classList.remove('inactive');
    //show the curser
    document.body.style.curser="auto";
})

//deactivate the application
function deactivateApp() {
    // check if the user inactive for a certain time
    let now = new Date();
    let deltaTime = now - mouseLastMoveTime;

    if (deltaTime >= inactiveTime){
        // hide the app
        app.classList.add('inactive');
        // hiding the curser
        document.body.style.curser="none";
    }

    // creating a loop
    requestAnimationFrame(deactivateApp);
}

deactivateApp();