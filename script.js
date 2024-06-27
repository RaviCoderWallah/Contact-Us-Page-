const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const emailAddress = document.querySelector("#email");
const message = document.querySelector("#message");
const squareCheckBox = document.querySelector(".square");
const form = document.querySelector("#form");
let errorState = document.querySelectorAll(".error-state");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let firstNameValue = firstName.value.trim();
    let lastNameValue = lastName.value.trim();
    let emailAddressValue = emailAddress.value.trim();
    let messageValue = message.value.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (firstNameValue === "") {
        let col_1_row_1_Paragraph = document.querySelector(".col-1 p");
        col_1_row_1_Paragraph.classList.add("error");
    }

    if (lastNameValue === "") {
        let col_1_row_2_Paragraph = document.querySelector(".col-1 .row-2 p");
        col_1_row_2_Paragraph.classList.add("error");
    }

    if (emailAddressValue === "" || !emailRegex.test(emailAddressValue)) {
        let col_2_Paragraph = document.querySelector(".col-2 p");
        col_2_Paragraph.classList.add("error");
    }

    if (messageValue === "") {
        let col_4_Paragraph = document.querySelector(".col-4 p");
        col_4_Paragraph.classList.add("error");
    }

    queryTypeCheckBox();

    agreeTypeCheckBOx();

});

function queryTypeCheckBox(){
    const firstRadio = document.querySelector(".col-3-child .row-1");
    const secondRadio = document.querySelector(".col-3-child .row-2");
    let col_3_chlid = document.querySelector(".col-3-child");
    firstRadio.addEventListener('click', () => {
        col_3_chlid.classList.add("firstChecked");
        col_3_chlid.classList.remove("secondChecked");
    });
    
    secondRadio.addEventListener("click", () => {
        col_3_chlid.classList.add("secondChecked");
        col_3_chlid.classList.remove("firstChecked");
    });
}

function agreeTypeCheckBOx(){
    const agreeConditionsCheckBox = document.querySelector(".col-5-child");
    const col_5_Paragraph = document.querySelector(".col-5 p");
    agreeConditionsCheckBox.addEventListener("click", () => {
        agreeConditionsCheckBox.classList.toggle("checked");
    });
}

