function validateStudentForm(){
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const password = document.querySelector('input[name="password"]').value;

    if(name.length < 3){
        alert("Name must be at least 3 characters");
        return false;
    }

    if(!email.includes("@")){
        alert("Enter a valid email");
        return false;
    }

    if(phone.length < 10){
        alert("Phone number must be at least 10 digits");
        return false;
    }

    if(password.length < 5){
        alert("Password must be at least 5 characters");
        return false;
    }

    return true;
}
