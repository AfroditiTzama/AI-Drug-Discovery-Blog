function toggleContent(button) {
    const article = button.closest("article"); // Βρίσκει το κοντινότερο article
    const content = article.querySelector(".long-content");

    if (!content) return;

    const isHidden = content.style.display === "none" || content.style.display === "";
    content.style.display = isHidden ? "block" : "none";
    button.textContent = isHidden ? "Read less" : "Read more";
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
