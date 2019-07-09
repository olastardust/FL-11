let shortEmail = 5;
let emailLenght = 6;
let email = prompt("Enter your email");
if (email === "" || email === null) {
    alert("Canceled");
} else if (userEmail.length < emailLenght) {
    alert("I don't know any emails having name length less than 6 symbols");
} else if (email === "user@gmail.com" || email === "admin@gmail.com") {
    let password = prompt("Enter your password");
    if (password === "" || password === null) {
        alert("Canceled");
    } else if (email === "user@gmail.com" && password === "UserPass" ||
        email === "admin@gmail.com" && password === "AdminPass") {
        let changePassword = confirm("Do you want to change password?");
        if (changePassword === false) {
            alert("You have failed the change.");
        } else {
            let passwordConfirmation = prompt("Enter your old password");
            if (passwordConfirmation === "" || passwordConfirmation === null) {
                alert('Canceled');
            } else if (email === "user@gmail.com" && passwordConfirmation === "UserPass" ||
                email === "admin@gmail.com" && passwordConfirmation === "AdminPass") {
                let newPassword = prompt("Enter your new password");
                if (newPassword.length < shortEmail) {
                    alert("It’s too short password. Sorry.");
                } else if (newPassword === "" || newPassword === null) {
                    alert("Canceled");
                } else {
                    let repeatNewPassword = prompt("Enter your new password again");
                    if (repeatNewPassword === repeatNewPassword) {
                        alert("You have successfully changed your password.");
                    } else {
                        alert("You wrote the wrong password.");
                    }
                }
            }
        }
    } else {
        alert("Wrong password");
    }
} else {
    alert("I don't know you");
}
