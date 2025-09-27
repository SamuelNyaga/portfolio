//document.querySelector('form').addEventListener('submit', function(e) {
   // e.preventDefault();
   // alert('Thank you for contacting me! I will respond to you soon.');
   // this.reset();
//});
// Sidebar logic
document.addEventListener('DOMContentLoaded', function () {
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const sidebarContents = document.querySelectorAll('.sidebar-content');
    const navLinks = document.querySelectorAll('nav ul li a, .cta-btn');
    const closeBtns = document.querySelectorAll('.close-btn');

    function openSidebar(section) {
        sidebarContents.forEach(content => {
            content.classList.remove('active');
        });
        const target = document.getElementById('sidebar-' + section);
        if (target) {
            target.classList.add('active');
            sidebarOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeSidebar() {
        sidebarOverlay.classList.remove('active');
        sidebarContents.forEach(content => content.classList.remove('active'));
        document.body.style.overflow = 'hidden';
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const section = this.getAttribute('data-section');
            if (section) {
                e.preventDefault();
                openSidebar(section);
            }
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            closeSidebar();
        });
    });

    // Close sidebar when clicking outside content
    sidebarOverlay.addEventListener('click', function (e) {
        if (e.target === sidebarOverlay) {
            closeSidebar();
        }
    });
});