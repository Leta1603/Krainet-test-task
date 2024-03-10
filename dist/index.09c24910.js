// Validation
let form = document.querySelector(".contacts-form");
let nameInput = form.elements.name;
let emailInput = form.elements.email;
let messageInput = form.elements.message;
let checkbox = form.elements.privacy;
let checkboxWrapper = document.querySelector(".privacy-policy");
let submitBtn = document.querySelector(".contacts-form__btn");
const resetErrorMessages = ()=>{
    let errorMessages = document.querySelectorAll(".contacts-form__error-message_active");
    errorMessages.forEach((message)=>{
        message.textContent = "";
        message.classList.remove("contacts-form__error-message_active");
    });
    let errorLabels = document.querySelectorAll(".contacts-form__label_error");
    errorLabels.forEach((label)=>{
        label.classList.remove("contacts-form__label_error");
    });
    let errorInputs = document.querySelectorAll(".contacts-form__input_error");
    errorInputs.forEach((input)=>{
        input.classList.remove("contacts-form__input_error");
    });
};
const displayErrorMessage = (input, message)=>{
    const parentDiv = input.closest(".contacts-form__item");
    parentDiv.querySelector(".contacts-form__label").classList.add("contacts-form__label_error");
    parentDiv.querySelector(".contacts-form__input").classList.add("contacts-form__input_error");
    parentDiv.querySelector(".contacts-form__error-message").textContent = message;
    parentDiv.querySelector(".contacts-form__error-message").classList.add("contacts-form__error-message_active");
};
const isValidEmail = (email)=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};
const clearForm = ()=>{
    emailInput.value = "";
    nameInput.value = "";
    messageInput.value = "";
};
const isCheckboxDisplayed = ()=>{
    submitBtn.disabled = false;
    if (window.getComputedStyle(checkboxWrapper, null).display !== "none") {
        submitBtn.disabled = true;
        checkbox.addEventListener("change", ()=>{
            submitBtn.disabled = !checkbox.checked;
        });
    }
};
isCheckboxDisplayed();
window.addEventListener("resize", ()=>{
    isCheckboxDisplayed();
});
form.addEventListener("submit", (event)=>{
    event.preventDefault();
    resetErrorMessages();
    let isValid = true;
    if (!nameInput.value.trim()) {
        displayErrorMessage(nameInput, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0412\u0430\u0448\u0435 \u0438\u043C\u044F");
        isValid = false;
    }
    if (!emailInput.value.trim() || !isValidEmail(emailInput.value.trim())) {
        displayErrorMessage(emailInput, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u0443\u044E \u043F\u043E\u0447\u0442\u0443");
        isValid = false;
    }
    if (!messageInput.value.trim()) {
        displayErrorMessage(messageInput, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435");
        isValid = false;
    }
    if (isValid) {
        let formData = new FormData(form);
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Object.fromEntries(formData))
        }).then((response)=>{
            if (!response.ok) throw new Error("Network response was not ok");
            return response.json();
        }).then((data)=>{
            console.log("The data has been sent successfully:", data);
        }).catch(function(error) {
            console.error("An error occurred while sending the data:", error);
        });
        clearForm();
    }
});
//Burger-menu
const burgerIcon = document.querySelector(".burger-icon");
const burgerMenu = document.querySelector(".burger-menu");
const cross = document.querySelector(".burger-menu__cross");
const overlapping = document.querySelector(".overlapping");
const closeBurgerMenu = ()=>{
    burgerMenu.classList.remove("burger-menu_active");
    document.body.classList.remove("_lock");
    overlapping.classList.remove("overlapping_active");
};
burgerIcon.addEventListener("click", ()=>{
    burgerMenu.classList.toggle("burger-menu_active");
    document.body.classList.toggle("_lock");
    overlapping.classList.toggle("overlapping_active");
});
cross.addEventListener("click", ()=>closeBurgerMenu());
overlapping.addEventListener("click", ()=>closeBurgerMenu());
const burgerLinks = document.querySelectorAll(".menu-item");
burgerLinks.forEach((link)=>{
    link.addEventListener("click", ()=>closeBurgerMenu());
});

//# sourceMappingURL=index.09c24910.js.map
