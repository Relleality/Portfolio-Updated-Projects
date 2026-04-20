// script.js
// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



//scroll sections active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {

        navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        });
        // active sections for animation on scroll
        sec.classList.add('show-animate');
    } else {
        sec.classList.remove('show-animate');
    }
    
});

// sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

const projectData = {
    "invoke": {
        title: "INVOKE Rice Blast Disease",
        year: "💻 2026",
        embed: `<iframe style="border:none;" width="100%" height="600" src="https://embed.figma.com/proto/TsOL5cfUiZ3FdPutdJbutL/Invoke-Rice-Blast-Disease?scaling=contain&content-scaling=responsive&page-id=0%3A1&node-id=0-17&embed-host=share" allowfullscreen></iframe>`,
        desc: `INVOKE Rice Blast Disease is an AI-powered web-based system designed for the early detection of rice blast disease in Philippine rice fields. The project utilizes ResNet50 for feature extraction and a Linear Support Vector Machine (SVM) for accurate classification of infected and healthy rice leaves.`
    },
    "devribo": {
    title: "DEVRibo Website",
    year: "💻 2026",
    embed: `<iframe style="border:none;" width="100%" height="600" src="https://embed.figma.com/design/DhYbjNu7rhkBHa58EPIv91/Untitled?node-id=0-1&embed-host=share" allowfullscreen></iframe>`,
    desc: `DEVRibo Website is a modern, user-focused web platform designed to showcase and simplify the discovery, collection, and management of digital assets such as NFTs.`
    }
};

function openProjectModal(key) {
    const data = projectData[key];
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalYear').textContent = data.year;
    document.getElementById('modalEmbed').innerHTML = data.embed;
    document.getElementById('modalDesc').textContent = data.desc;
    document.getElementById('projectModal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    document.getElementById('projectModal').classList.remove('open');
    document.getElementById('modalEmbed').innerHTML = '';
    document.body.style.overflow = '';
}

const hoverPreview = document.getElementById('hoverPreview');
const hoverPreviewImg = document.getElementById('hoverPreviewImg');

const previewImages = {
    "invoke": "invoke-farm-main.png",
    "devribo": "devribo-figma.png"
};

document.querySelectorAll('[data-preview]').forEach(card => {
    card.addEventListener('mouseenter', (e) => {
        const key = card.getAttribute('data-preview');
        hoverPreviewImg.src = previewImages[key];
        hoverPreview.classList.add('visible');
    });

    card.addEventListener('mousemove', (e) => {
        hoverPreview.style.left = (e.clientX + 20) + 'px';
        hoverPreview.style.top = (e.clientY - 80) + 'px';
    });

    card.addEventListener('mouseleave', () => {
        hoverPreview.classList.remove('visible');
    });
});
