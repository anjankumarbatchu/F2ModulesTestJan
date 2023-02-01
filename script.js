let flag1 = 1;
let flag2 = 0;
let flag3 = 0;
let flag4 = 0;

let nameObj = document.querySelector("#name");
let userNameObj = document.querySelector("#userName");
let emailObj = document.querySelector("#email");


let firstImgObj = document.querySelector(".first-img");
firstImgObj.addEventListener("click", registerForm);

let regFormObj = document.querySelector(".registration-form");

function registerForm() {
    if (flag1 = 1) {
        regFormObj.classList.remove("hide");
    }

}

let subBtn = document.querySelector("#sub-btn");
subBtn.addEventListener("click", submitFormInfoFunction);

function submitFormInfoFunction() {

    let input_name1 = nameObj.value;
    let input_username1 = userNameObj.value;
    let input_email1 = emailObj.value;

    if (input_name1 && input_username1 && input_email1) {

        alert('Your Info is Submitted successfully! Click on the next image to view your info.');

        flag2 = 1;

    } else {
        alert(`Please fill all the fields.`);
    }
}


let secImgObj = document.querySelector(".sec-img");
secImgObj.addEventListener("click", displayfunc);



let disp_name_obj = document.querySelector(".disp-name");
let disp_username_obj = document.querySelector(".disp-username");
let display_data_obj = document.querySelector(".display-data");


function displayfunc() {
    if (flag2 == 1) {

        let input_name = nameObj.value;
        let input_username = userNameObj.value;
        let input_email = emailObj.value;

        if (input_name && input_username && input_email) {

            disp_name_obj.innerHTML = "Name : " + input_name;
            disp_username_obj.innerHTML = "UserName : " + input_username;

            flag3 = 1;
        }
        else {
            alert(`Please fill all the fields.`);
        }
    }

}


let thirdImgObj = document.querySelector(".third-img");
thirdImgObj.addEventListener("click", dicefunc);

let diceClassObj = document.querySelector(".dice-class");


function dicefunc() {
    if (flag3 == 1) {
        diceClassObj.classList.remove("hide");
    }

}

let dice_img = document.querySelector("#dice");
let score = document.querySelector(".score-para");

let img4 = document.querySelector(".fourth-img");
let error = document.querySelector(".error-para");
let badLuck = document.querySelector(".badluck-para");

let attempt = 0;
let tryagain = 0;
let sum = 0;

dice_img.addEventListener("click", numGenerator);

function numGenerator() {
    if (attempt < 3) {
        let diceNum = Math.floor(Math.random() * 6) + 1;
        score.innerHTML += diceNum + " ";
        sum += diceNum;
        attempt++;
        if (attempt == 3) {
            if (sum > 10) {
                img4.style.pointerEvents = "auto";
                error.innerText = "Congo!! Click on the fourth Image";
                flag4 = 1;
            } else {
                if (tryagain == 1) {
                    error.innerHTML = "";
                    badLuck.style.display = "block";
                    dice_img.disabled = true;
                    dice_img.removeEventListener("click", numGenerator);

                } else {
                    error.innerText = "try Again";
                    score.innerHTML = "";
                    sum = 0;
                    tryagain++;
                }
                attempt = 0;
            }
        }
    }
}



img4.addEventListener("click", generateCouponFunc);

let couponClassObj = document.querySelector(".coupon-class");
let couponParaObj = document.querySelector(".coupon-para");

function generateCouponFunc() {
    if (flag4 == 1) {
        couponClassObj.classList.remove("hide");

        let coupon = "";
        let numbers = "0123456789";

        let allChars = numbers;

        for (let i = 0; i < 12; i++) {
            let random = Math.floor(Math.random() * allChars.length);
            coupon = coupon + allChars[random];
        }
        couponParaObj.innerHTML = "Your Coupon : " + coupon;
    }
}
