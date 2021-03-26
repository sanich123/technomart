const mapButton = document.querySelector('.to-map');
const mapPopup = document.querySelector('.modal-map');
const mapCloseButton = document.querySelector('.close-button');



mapButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    mapPopup.classList.add('modal-map-show');
});

mapCloseButton.addEventListener('click', function(evt){
evt.preventDefault();
mapPopup.classList.remove('modal-map-show');
});

window.addEventListener('keydown', function(evt){
    if (evt.keyCode === 27) {
        if (mapPopup.classList.contains('modal-map-show')) {
            evt.preventDefault();
            mapPopup.classList.remove('modal-map-show');
        }
    }
});