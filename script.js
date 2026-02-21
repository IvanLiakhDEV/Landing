const button = document.getElementById('humMenu');
const dropdownNav = document.querySelector('.dropdownNavbar');

const handleToggleMenu = () => {
    dropdownNav.classList.toggle('isOpen');
};

button.addEventListener('click', handleToggleMenu);
