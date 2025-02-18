const body = document.querySelector("body"),
hourHand = document.querySelector(".hour"),
minuteHand = document.querySelector(".minute"),
secondHand = document.querySelector(".second"),
modeSwitch = document.querySelector(".mode-switch");

if(localStorage.getItem("mode") === "Dark Mode")
{
    body.classList.add("dark");
    modeSwitch.textContent = "Light Mode";
}

modeSwitch.addEventListener("click", () => 
{

    body.classList.toggle("dark");
    const isDarkMode = body.classList.contains("dark");
    modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
    localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
});

const updateTime = () => {
    
     let date = new Date();
     
     let sec = (date.getSeconds() / 60) * 360;
     let min = (date.getMinutes() / 60) * 360;
     let hr = (date.getHours() / 12) * 360;
     
     
     secondHand.style.transform = "rotate(" + sec + "deg)";
     minuteHand.style.transform = "rotate(" + min + "deg)";
     hourHand.style.transform = "rotate(" + hr + "deg)";
};
setInterval(updateTime, 1000);

updateTime();