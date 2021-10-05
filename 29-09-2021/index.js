var form = document.querySelector('#myform');
form.onsubmit = function () {
    var formData = new FormData(form);
    console.log(formData);
    var text = formData.get('textInput');
    console.log(text);
    return false; // prevent reload
};
