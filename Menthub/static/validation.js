document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const inputs = form.querySelectorAll("input, select, textarea");

    inputs.forEach(input => {
        input.addEventListener("input", () => validateField(input));
        input.addEventListener("blur", () => validateField(input));
    });

    form.addEventListener("submit", function (e) {
        let isValid = true;
        inputs.forEach(input => {
            if (!validateField(input)) isValid = false;
        });

        if (!isValid) {
            e.preventDefault();
            alert("Please correct the highlighted fields.");
        }
    });

    function validateField(field) {
        const value = field.value.trim();
        const id = field.id;
        let valid = true;
        let errorMessage = "";

        switch (id) {
            case "fullName":
                if (!value) {
                    valid = false;
                    errorMessage = "Full Name is required.";
                } else if(!/^[a-zA-Z\s.'-]+$/.test(value)) {
                    valid = false;
                    errorMessage = "Full Name can only contain letters, spaces, apostrophes, and hyphens.";
                }
                break;
            case "signupEmail":
                if (!/^[\w.-]+@[\w.-]+\.\w+$/.test(value)) {
                    valid = false;
                    errorMessage = "Enter a valid email address.";
                }
                break;
            case "signupPassword":
                if (value.length < 6) {
                    valid = false;
                    errorMessage = "Password must be at least 6 characters.";
                }
                break;
            case "department":
            case "academicYear":
                if (!value) {
                    valid = false;
                    errorMessage = "Please select an option.";
                }
                break;
            case "linkedinUrl":
                if (value && !/^https:\/\/(www\.)?linkedin\.com\/.*$/.test(value)) {
                    valid = false;
                    errorMessage = "Enter a valid LinkedIn URL.";
                }
                break;
            case "whatsappContact":
                if (value && !/^\+91\d{10}$/.test(value)) {
                    valid = false;
                    errorMessage = "Enter a valid WhatsApp number (+91 format).";
                }
                break;
        }

        if (field.name === "role") {
            const checked = form.querySelectorAll("input[name='role']:checked").length > 0;
            if (!checked) {
                valid = false;
                errorMessage = "Select a role.";
            }
        }

        toggleErrorState(field, valid, errorMessage);
        return valid;
    }

    function toggleErrorState(field, valid, message) {
        let errorSpan = field.nextElementSibling;
        if (!errorSpan || !errorSpan.classList.contains("error-message")) {
            errorSpan = document.createElement("span");
            errorSpan.className = "error-message";
            field.parentNode.appendChild(errorSpan);
        }
        errorSpan.textContent = valid ? "" : message;
        field.classList.toggle("invalid", !valid);
    }
});
