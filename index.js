document.getElementById("fetchButton");

function fetchPhotos() {
    const photoContainer = document.getElementById('photos');
    photoContainer.innerHTML = '';

    for (let i = 0; i < 4; i++) {
        const img = document.createElement('img');
        img.src = `https://picsum.photos/1000/1000?random=${Math.floor(Math.random()*1000)}`;
        img.alt = 'Random Photo';
        photoContainer.appendChild(img);}
}
fetchMorePhotos()
document.getElementById("More"); 
function fetchMorePhotos() {
    const photoContainer = document.getElementById('photos');

    for (let i = 0; i < 4; i++) {
        const img = document.createElement('img');
        img.src = `https://picsum.photos/1000/1000?random=${Math.floor(Math.random()*1000)}`;
        /*Math.random() function generates a random <number to ensure each image is different*/
        img.alt = 'Random Photo';
        photoContainer.appendChild(img);} //adds the new image to the photos
}


document.getElementById('toggleSwitch').addEventListener('change', function() {
    const photos = document.querySelectorAll('#photos');
    if (this.checked) {
        photos.forEach(photo => {
            photo.style.filter = `grayscale(100%)`;
        });
    } else {
        photos.forEach(photo => {
            photo.style.filter = `none`;
        });
    }
});

