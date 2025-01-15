document.querySelectorAll('section').forEach(section => {
    section.addEventListener('click', () => {
        alert(`You clicked on the ${section.querySelector('h2').innerText} section.`);
    });
});
