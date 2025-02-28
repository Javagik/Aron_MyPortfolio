document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("home-link").addEventListener("click", () => {
        window.location.href = "index.html"; // Redirect to home page
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Function for smooth scrolling
    function smoothScroll(target) {
        document.querySelector(target).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    // Scroll to Projects section when clicking "Projects"
    document.getElementById("projects-link").addEventListener("click", function (event) {
        event.preventDefault();
        smoothScroll("#project");
    });

    // Scroll to Main Wrapper when clicking "About"
    document.getElementById("about-link").addEventListener("click", function (event) {
        event.preventDefault();
        smoothScroll(".main-wrapper");
    });
    // Scroll to Projects section when clicking "Projects"
    document.getElementById("review-link").addEventListener("click", function (event) {
        event.preventDefault();
        smoothScroll(".review");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll(".skills span");
    
    skills.forEach(skill => {
        skill.addEventListener("click", () => {
            skills.forEach(s => s.classList.remove("active"));
            skill.classList.add("active");
        });
    });
});

// MAKING THE ICON CLICKABLE AND DIRECT YOU TO THE LINK GIVEN
document.addEventListener("DOMContentLoaded", () => {
    const socialLinks = [
        { id: "github-link", url: "https://github.com/Javagik" },
        { id: "facebook-link", url: "https://www.facebook.com/aron.ogalina.14" },
        { id: "linkedin-link", url: "https://www.linkedin.com/in/aron-ogalina-981a8825a/" }
    ];
    
    socialLinks.forEach(link => {
        const icon = document.getElementById(link.id);
        if (icon) {
            icon.addEventListener("click", () => {
                window.open(link.url, "_blank");
            });
        }
    });
});

  // REDIRECT TO GRAPH.HTML WHEN CLICKING THE show-more-detail-btn
  const showMoreBtns = document.querySelectorAll(".show-more-detail-btn");

  showMoreBtns.forEach(btn => {
      btn.addEventListener("click", () => {
          window.location.href = "graph.html";
      });
  });
  // MAKING THE NAV CLIKABLE WHEN BEING RESPONSIVE
  document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
});

// JAVASCRIPTS OF GRAPGH.HTML - THIS SHOWS THE GRAPH
document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("skillsChart").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["HTML", "CSS", "JavaScript", "Django", "MySQL", "Python"],
            datasets: [{
                label: "Skill Mastery (%)",
                data: [55, 45, 25, 30, 10, 30], // PERCENT% OF SKILLS IN GRAPH
                backgroundColor: [
                    "red", "blue", "yellow", "green", "orange", "purple"
                ],
                borderColor: "#fff",
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        color: "white",
                        font: { size: 14 }
                    }
                },
                x: {
                    ticks: {
                        color: "white",
                        font: { size: 14 }
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: 'white',
                        font: { size: 14 }
                    }
                }
            }
        }
    });
});

// IN REVIEW COMMENTING PAGE 
emailjs.init("A0wOONDpn5DWkPJSc"); // EmailJS User ID

let selectedRating = 0;
document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', function () {
        selectedRating = this.getAttribute('data-value');
        document.querySelectorAll('.star').forEach(s => s.classList.remove('selected'));
        this.classList.add('selected');
        for (let i = 1; i <= selectedRating; i++) {
            document.querySelector(`.star[data-value='${i}']`).classList.add('selected');
        }
    });
});

function submitComment() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const commentText = document.getElementById("comment").value;

    if (name.trim() === "" || email.trim() === "" || commentText.trim() === "" || selectedRating === 0) {
        alert("Please fill out all fields and select a rating!");
        return;
    }

    // Display Comment
    const commentsDiv = document.getElementById("comments");
    const newComment = document.createElement("div");
    newComment.classList.add("comment");
    newComment.innerHTML = `<strong>${name} (${email})</strong><br><strong>Rating: ${'★'.repeat(selectedRating)}${'☆'.repeat(5 - selectedRating)}</strong><p>${commentText}</p>`;
    commentsDiv.prepend(newComment);

    // Send Email Notification
    const templateParams = {
        from_name: name,
        from_email: email,
        message: commentText,
        rating: `${'★'.repeat(selectedRating)}${'☆'.repeat(5 - selectedRating)}`,
    };

    emailjs.send("service_qdiemzg", "template_aux1y1p", templateParams)
        .then(response => {
            console.log("Email sent successfully:", response);
            alert("Review submitted successfully!");
        })
        .catch(error => {
            console.error("Email sending failed:", error);
            alert("Error sending notification.");
        });

    // Reset Fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("comment").value = "";
    selectedRating = 0;
    document.querySelectorAll('.star').forEach(s => s.classList.remove('selected'));
}

document.addEventListener("DOMContentLoaded", function () {
    // Redirect links
    document.getElementById("home-link").addEventListener("click", function () {
        window.location.href = "index.html"; // Redirect to Home page
    });

    document.getElementById("about-link").addEventListener("click", function () {
        window.location.href = "base.html"; // Redirect to About page
    });

    // Smooth scroll for Projects link
    document.getElementById("projects-link").addEventListener("click", function (event) {
        const projectSection = document.getElementById("project");
        if (projectSection) {
            event.preventDefault(); // Prevent default link behavior
            projectSection.scrollIntoView({ behavior: "smooth" });
        }
    });

    // Smooth scroll for Review link
    document.getElementById("review-link").addEventListener("click", function (event) {
        const reviewSection = document.querySelector(".container");
        if (reviewSection) {
            event.preventDefault(); // Prevent default link behavior
            reviewSection.scrollIntoView({ behavior: "smooth" });
        }
    });
});