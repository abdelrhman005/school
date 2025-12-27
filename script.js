function validateForm() {
    const name = document.getElementById("name").value.trim()
    const email = document.getElementById("email").value.trim()
    const phone = document.getElementById("phone").value.trim()
    const message = document.getElementById("message").value.trim()
    const error = document.getElementById("error")
    if (name.length < 3) {
        error.textContent = "Name must be at least 3 characters"
        return
    }
    if (!email.includes("@") || !email.includes(".")) {
        error.textContent = "Please enter a valid email"
        return
    }
    if (phone.length < 10 || isNaN(phone)) {
        error.textContent = "Please enter a valid phone number"
        return
    }

    if (message.length < 10) {
        error.textContent = "Message must be at least 10 characters"
        return
    }

}
