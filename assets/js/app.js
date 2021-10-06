const navAnimation = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-ul');
    const navItems = document.querySelectorAll('.navlinks');
    const linkSubnav = document.querySelector('.link-subnav');
    const subNav = document.querySelector('.sub-nav');
    const subNavItems = document.querySelectorAll('.sub-navitems');

    hamburger.addEventListener('click', () => {
        // Toggle Class
        nav.classList.toggle('nav-view');

        // Nav bar items Animation
        navItems.forEach((item, index) => {
            if(item.style.animation) {
                item.style.animation = ''
            } else {
                item.style.animation = `navFade 0.5s ease forwards ${index / 9 + 0.45}s`
            }
        });

        hamburger.classList.toggle('toggle');
    });

    linkSubnav.addEventListener('click', () => {
        subNav.classList.toggle('subnav-view');

        subNavItems.forEach((item, index) => {
            if(item.style.animation) {
                item.style.animation = ''
            } else {
                item.style.animation = `navFade 0.5s ease forwards ${index / 8 + 0.8}s`
            }
        });
    })
}

navAnimation();