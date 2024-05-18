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
        { serial: 1, name: "IIT Madras ", ranking: 1, cseCutoff: 148, highestPackage: "₹2.14cr", medianPackage: "₹17 LPA", website: "https://www.iitm.ac.in/" },
        { serial: 2, name: "IIT Delhi ", ranking: 2, cseCutoff: 118, highestPackage: "₹2.5cr", medianPackage: "₹18.8 LPA", website: "https://home.iitd.ac.in/" },
        { serial: 3, name: "IIT Bombay ", ranking: 3, cseCutoff: 67, highestPackage: "₹3.67cr", medianPackage: "₹17.6 LPA", website: "https://www.iitb.ac.in/" },
        { serial: 4, name: "IIT Kanpur ", ranking: 4, cseCutoff: 238, highestPackage: "₹1.9cr", medianPackage: "₹25.3 LPA", website: "https://www.iitk.ac.in/" },
        { serial: 5, name: "IIT Roorkee ", ranking: 5, cseCutoff: 412, highestPackage: "₹2.05 cr", medianPackage: "₹19.69 LPA", website: "https://www.iitr.ac.in/" },
        { serial: 6, name: "IIT Khagarpur ", ranking: 6, cseCutoff: 279, highestPackage: "₹2.67cr", medianPackage: "₹22.33 LPA", website: "https://www.iitkgp.ac.in/" },
        { serial: 7, name: "IIT Guwahati ", ranking: 7, cseCutoff: 654, highestPackage: "₹1.20cr", medianPackage: "₹16.51 LPA", website: "https://www.iitg.ac.in/" },
        { serial: 8, name: "IIT Hydrabad ", ranking: 8, cseCutoff: 674, highestPackage: "₹63.78LPA", medianPackage: "₹20.5LPA", website: "https://www.iith.ac.in/" },
        { serial: 9, name: "NIT Tiruchirappalli ", ranking: 9, cseCutoff: 5164, highestPackage: "₹52.38LPA", medianPackage: "₹23.2 LPA", website: "https://www.nitt.edu/" },
        { serial: 10, name: "NIT Surathkal ", ranking: 12, cseCutoff: 3406, highestPackage: "₹54.75LPA", medianPackage: "₹18.26 LPA", website: "https://www.nitk.ac.in/" }
        // Add other colleges here
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
                <p><strong>Median Package:</strong> ${college.medianPackage}</p>
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

// credit//document.addEventListener('DOMContentLoaded', (event) => {
console.log("Credit section loaded.");
// Add any interactive features here