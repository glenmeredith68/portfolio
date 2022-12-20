// footer functions for the bottom

function getDate() {
    let d = new Date().getFullYear();
    document.getElementById('outputspan').innerText = d;
}
getDate();

function getModified() {
    let m = new Date(document.lastModified);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = months[m.getMonth()];
    let year = m.getFullYear();
    let formattedm = `${month}, ${year}`;
    document.getElementById('lastmod').innerText = formattedm;
}
getModified();


// hamburger menu
const hambutton = document.getElementsByClassName('hamburger')[0];
hambutton.addEventListener('click', () => {
document.getElementsByClassName('nav')[0].classList.toggle('hidden');
document.getElementsByClassName('nav')[0].classList.toggle('flex');


});

