function toggleContent(button) {
    const article = button.closest("article");
    const content = article.querySelector(".long-content");

    if (!content) return;

    const isVisible = content.classList.contains("show");

    if (isVisible) {
        content.classList.remove("show");
        button.textContent = "Read more";
    } else {
        content.classList.add("show");
        button.textContent = "Read less";
    }
}

// Για την αποστολή της φόρμας "Contact"
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Αποτρέπει την αποστολή της φόρμας

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("response-message").innerText = "Thank you, " + name + ". Your message has been sent successfully!";
        document.getElementById("response-message").style.color = "green";
        document.getElementById("contact-form").reset(); // Καθαρίζει τη φόρμα
    } else {
        document.getElementById("response-message").innerText = "Please fill out all the fields.";
        document.getElementById("response-message").style.color = "red";
    }

    document.getElementById("response-message").style.display = "block";
});
