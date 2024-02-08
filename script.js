
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("article-button").addEventListener("click", function () {
        
        document.getElementById("main-content").scrollIntoView({ behavior: "smooth" });
    });

    document.getElementById("newsletter-form").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thanks for subscribing!");
    });
});
