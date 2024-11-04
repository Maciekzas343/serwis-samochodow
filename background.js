let currentBackground = 0; // Indeks aktualnego tła
const backgrounds = [
    'url("background.jpg")',
    'url("background1.jpg")',
	'url("background2.jpg")'
];

function changeBackground() {
    // Zmiana tła
    document.body.style.backgroundImage = backgrounds[currentBackground];
    
    // Przełącz na następne tło
    currentBackground = (currentBackground + 1) % backgrounds.length; 
}


setInterval(changeBackground, 15000);


changeBackground();