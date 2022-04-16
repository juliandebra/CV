function aboutModal(){
    let about = document.getElementById('About');
    let tech = document.getElementById('Tech');
    let libraries = document.getElementById('Libraries')
    tech.style.display = 'none'
    about.style.display = 'flex';
    libraries.style.display = 'none'
}
function techModal(){
    let about = document.getElementById('About');
    let tech = document.getElementById('Tech');
    let libraries = document.getElementById('Libraries')
    tech.style.display = 'block'
    about.style.display = 'none';
    libraries.style.display = 'none'
}
function librModal(){
    let about = document.getElementById('About');
    let tech = document.getElementById('Tech');
    let libraries = document.getElementById('Libraries')
    tech.style.display = 'none'
    about.style.display = 'none';
    libraries.style.display = 'block'
}


function openModalOne() {
    let modal = document.getElementById("modal1");
    modal.style.display = "block";
}
function openModalTwo() {
    let modal = document.getElementById("modal2");
    modal.style.display = "block";
}
function openModalThree() {
    let modal = document.getElementById("modal3");
    modal.style.display = "block";
}
function openModalFour() {
    let modal = document.getElementById("modal4");
    modal.style.display = "block";
}
function closeModalOne() {
    let modal = document.getElementById("modal1");
    modal.style.display = "none";
}
function closeModalTwo() {
    let modal = document.getElementById("modal2");
    modal.style.display = "none";
}
function closeModalThree() {
    let modal = document.getElementById("modal3");
    modal.style.display = "none";
}
function closeModalFour() {
    let modal = document.getElementById("modal4");
    modal.style.display = "none";
}