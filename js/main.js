function completeAndRedirect() {
    var form = document.forms['myform'];
    text.innerHTML = "Typed date <br> Packs : " + form.elements.packs.value + "<br>First name : " + form.elements.firstName.value + "<br>Last name : " + form.elements.lastName.value + "<br>Gender : " + form.elements.gender.value + "<br> EMAIL : " +  form.elements.email.value +  "<br> Birth Date : " + form.elements.birthDate.value + "<br> Message : " + form.elements.message.value;
}