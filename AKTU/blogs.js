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
        { serial: 1, name: "Institute of Engineering and Technology(IET), Lucknow ", ranking: "-", cseCutoff: 29908, highestPackage: "49LPA(1.2Cr off-campus)", AveragePackage: "₹7-8LPA" },
        { serial: 2, name: "Kamla Nehru Institute of Technology, Sultanpur", ranking: 148, cseCutoff: 63776, highestPackage: "₹45LPA", AveragePackage: "₹5.5-12LPA" },
        { serial: 3, name: "Bundelkhand Institute of Engineering and Technology, Jhansi", ranking: "151-200", cseCutoff: "-", highestPackage: "-", AveragePackage: "₹-" },
        { serial: 4, name: "Ajay Kumar Garg Engineering College, Ghaziabad", ranking: "-", cseCutoff: 96796, highestPackage: "1.12CPA", AveragePackage: "₹5LPA" },
        { serial: 5, name: "Noida Institute of Engineering & Technology(NIET), Greater Noida", ranking: "101-150", cseCutoff: 228214, highestPackage: "₹58LPA", AveragePackage: "₹5.76LPA" },
        { serial: 6, name: "GL Bajaj Institute of Technology & Management, Greater Noida", ranking: "151-200", cseCutoff: 129397, highestPackage: "₹58LPA", AveragePackage: "₹7.35LPA" },
        { serial: 7, name: "Galgotia’s College of Engineering & Technology, Greater Noida", ranking: "151-200", cseCutoff: 103447, highestPackage: "₹60LPA", AveragePackage: "₹4.26LPA" },
        { serial: 8, name: "KIET Group of Institutions, Ghaziabad", ranking: "151-200", cseCutoff: 140992, highestPackage: "₹48.89LPA", AveragePackage: "₹5LPA" },
        { serial: 9, name: "Madan Mohan Malaviya University of Technology, Gorakhpur", ranking: "251-300", cseCutoff: 72956, highestPackage: "₹52LPA", AveragePackage: "₹7.2LPA" }
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