function scrollTil(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}



const openButton = document.getElementById("openMessage");
const messageBox = document.getElementById("messageBox");
const sendButton = document.getElementById("sendMessage");
const thankYou = document.getElementById("thankYou");

openButton.addEventListener("click", () => {
  messageBox.style.display = "block";
});

sendButton.addEventListener("click", () => {
  messageBox.style.display = "none";
  thankYou.style.display = "block";
});



