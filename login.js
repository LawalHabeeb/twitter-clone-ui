const colorSwitch = document.getElementById("switch-mode");
colorSwitch.addEventListener('click',checkMode);

function checkMode() {
    console.log("checking..."); 
    
    if (colorSwitch.checked) {
        darkModeOff();
    } else {
        darkModeOn();
    }
}

function darkModeOff() {
    document.body.classList.remove("dark-mode");
}

function darkModeOn() {
    document.body.classList.add("dark-mode");
}
