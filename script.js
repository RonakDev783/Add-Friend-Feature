var istatus = document.querySelector("h5");
var btn = document.querySelector("#add");
let popupMessage = document.querySelector("#popup-message");
var check = 0;
btn.addEventListener("click", function () {
    if (check == 0) {
        istatus.innerHTML = "Friends";
        istatus.style.color = "green";
        btn.innerHTML = "Remove Friend";
        popupMessage.style.display = "block";
        popupMessage.style.backgroundColor = "green";
        popupMessage.innerHTML = "Shruti Sharma is added to your friend list";
        check = 1;
    }
    else {
        istatus.innerHTML = "Stranger";
        istatus.style.color = "red";
         btn.innerHTML = "Add Friend";
         popupMessage.style.display = "block";
         popupMessage.style.backgroundColor = "red";
         popupMessage.innerHTML = "Shruti Sharma is removed from your friend list";
        check = 0;
    }

    setTimeout(()=>{
        popupMessage.style.display = "none";
    },2000);
});

