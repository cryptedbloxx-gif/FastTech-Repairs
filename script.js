// Customer reviews rotation

const reviews = [
    "⭐⭐⭐⭐⭐ Excellent service. AC repaired the same day!",
    "⭐⭐⭐⭐⭐ Very professional technician. Highly recommended.",
    "⭐⭐⭐⭐⭐ Washing machine issue fixed quickly.",
    "⭐⭐⭐⭐⭐ Affordable pricing and great service.",
    "⭐⭐⭐⭐⭐ RO water purifier working perfectly now."
];

const reviewText = document.getElementById("reviewText");

let reviewIndex = 0;

setInterval(() => {
    reviewIndex++;

    if (reviewIndex >= reviews.length) {
        reviewIndex = 0;
    }

    reviewText.textContent = reviews[reviewIndex];
}, 4000);


// WhatsApp Form Submission

const form = document.getElementById("serviceForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const service = document.getElementById("service").value;
    const issue = document.getElementById("issue").value;

    const message =
`Hello, I need appliance repair service.

Name: ${name}
Phone: ${phone}
Address: ${address}

Service Required:
${service}

Problem:
${issue}`;

    // IMPORTANT:
    // Replace 919876543210 with your dad's WhatsApp number

    const whatsappNumber = "9878088945";

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
});


// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});