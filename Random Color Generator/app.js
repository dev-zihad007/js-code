const getColor = () => {
    //Hax Code
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomcode = "#" + randomNumber.toString(16);
    document.body.style.background = randomcode;
    document.getElementById("color-code").innerText = randomcode;
    navigator.clipboard.writeText(randomcode);
    
}
//event call
document.getElementById("btn").addEventListener(
    "click",
    getColor
)
//init call
getColor();
    
