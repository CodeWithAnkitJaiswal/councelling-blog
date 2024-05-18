// Smooth scrolling for navigation links
document.querySelectorAll('.slide a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// to open tg GTC from logo
function openGTC() {
    var linkUrl = "https://telegram.me/grand_theft_coders";

    window.open(linkUrl, '_blank');
}


function buycoffee() {
    var linkUrl = "https://iamaako.github.io/Buy-Me-A-Coffee/";

    window.open(linkUrl, '_blank');
}

function ytvideo() {
    var linkUrl = "https://youtu.be/Mb6oZ9iMteg";

    window.open(linkUrl, '_blank');
}




document.addEventListener("DOMContentLoaded", function() {
    const coffeeButton = document.getElementById("coffee-button");

    // Expand the button after 20 seconds
    setTimeout(function() {
        coffeeButton.classList.add("expanded");
    }, 9000);

    // Contract the button after 30 seconds
    setTimeout(function() {
        coffeeButton.classList.remove("expanded");
    }, 18000);
});


// menu

function show() {
    const open = document.getElementById('open');
    const close = document.getElementById('close');
    const list = document.getElementById('list');
    const mobile = document.getElementById('mobile');
    open.classList.toggle('active');
    mobile.classList.toggle('active');
    close.classList.toggle('active');
    list.classList.toggle('active');
}

// FOR TOP COLLEGES Selection(Added By Aryan)


document.addEventListener("DOMContentLoaded", function() {
    const colleges = [
        { serial: 1, name: "NIT Tirchy", ranking: 9, cseCutoff: 1679, highestPackage: "₹62.89LPA", AveragePackage: "₹12LPA" },
        { serial: 2, name: "NIT Surathkal", ranking: 12, cseCutoff: 0, highestPackage: "₹54.75LPA", AveragePackage: "₹15LPA" },
        { serial: 3, name: "NIT Rourkela", ranking: 16, cseCutoff: 8799, highestPackage: "₹83.60LPA", AveragePackage: "₹13.89LPA" },
        { serial: 4, name: "NIT Warangal", ranking: 21, cseCutoff: 3362, highestPackage: "88LPA", AveragePackage: "₹17.29LPA" },
        { serial: 5, name: "NIT Calicut", ranking: 23, cseCutoff: 0, highestPackage: "₹47LPA", AveragePackage: "₹114.29LPA" },
        { serial: 6, name: "DTU", ranking: 29, cseCutoff: 0, highestPackage: "₹82.05LPA", AveragePackage: "₹12.21LPA" },
        { serial: 7, name: "IIEST Shibpur", ranking: 35, cseCutoff: 16662, highestPackage: "₹54LPA", AveragePackage: "₹9.5LPA" },
        { serial: 8, name: "MNIT Jaipur", ranking: 37, cseCutoff: 5171, highestPackage: "₹64LPA", AveragePackage: "₹13.20LPA" },
        { serial: 9, name: "NIT Silchar", ranking: 40, cseCutoff: 0, highestPackage: "₹44LPA", AveragePackage: "₹13.58LPA" },
        { serial: 10, name: "NIT Patna", ranking: 41, cseCutoff: 18281, highestPackage: "₹52LPA", AveragePackage: "₹14LPA" }
        // Add details for other colleges here
    ];


    const collegesList = document.getElementById("colleges-list");

    // Populate colleges list
    colleges.forEach((college, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <div class="college-header">
                <span class="college-name">${college.name}</span>
                <span class="arrow down"></span>
            </div>
            <div class="college-details hidden">
                <p><strong>NIRF Ranking:</strong> ${college.ranking}</p>
                <p><strong>CSE Cutoff:</strong> ${college.cseCutoff}</p>
                <p><strong>Highest Package:</strong> ${college.highestPackage}</p>
                <p><strong>AveragePackage:</strong> ${college.AveragePackage}</p>
            </div>
        `;
        li.addEventListener("click", function() {
            toggleDetails(li);
        });
        collegesList.appendChild(li);
    });

    // Function to toggle details visibility
    function toggleDetails(element) {
        const details = element.querySelector(".college-details");
        const arrow = element.querySelector(".arrow");
        details.classList.toggle("hidden");
        arrow.classList.toggle("down");
        arrow.classList.toggle("up");
    }
});

// FOR THANKYOU CARD