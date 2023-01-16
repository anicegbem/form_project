let error = document.querySelector(".error");
let password = document.querySelector("#password");
let confirmation = document.querySelector("#confirm");

confirmation.addEventListener('input', function () {
    if(confirmation.value != password.value) {
        error.textContent = '*Passwords do not match';
    }
    else {
        error.textContent = "";
    }

});

password.onblur = function() {
    error.textContent = "";
}

confirmation.onblur = function() {
    error.textContent = "";
}