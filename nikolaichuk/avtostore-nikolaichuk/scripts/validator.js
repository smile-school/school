(function () {
    function isAllRequired(requiredClassName) {
        var requiredFields = this.form.querySelectorAll("." + requiredClassName),
            isValid = true;
        for (var i = 0; i < requiredFields.length; i++){
            if (!requiredFields[i].value.trim()){
                showErrorMessage(requiredFields[i], " / required field cannot be blank");
                isValid = false;
            }
        }
        return isValid;
    };

    function isValidEmail(emailField) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            isValid = true;
        if (!mailformat.test(emailField.value.trim())){
            showErrorMessage(emailField, 'You have entered an invalid email address!');
            isValid = false;
        }
        return isValid;
    }

    function showErrorMessage(field, message){
        var error = document.createElement('span');
        error.classList.add("error-js");
        error.style.color = 'red';
        error.innerHTML = message;
        field.parentElement.insertBefore(error, field);
    };

    function removeErrorMessage(){
        var errors = this.form.querySelectorAll('.error-js');
        for(var i = 0; i < errors.length; i++){
            errors[i].remove();
        }
    };

    function Validator(form) {
        this.form = form;
    };

    Validator.prototype.isAllRequired = isAllRequired;
    Validator.prototype.isValidEmail = isValidEmail;
    Validator.prototype.showErrorMessage = showErrorMessage;
    Validator.prototype.removeErrorMessage = removeErrorMessage;

    window.Validator = Validator;
})();