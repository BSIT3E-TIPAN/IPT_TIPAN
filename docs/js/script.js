// Function to handle image click and open it in the modal
document.querySelectorAll('.gal img').forEach(image => {
    image.addEventListener('click', function() {
        // Show the modal and set the clicked image as the modal content
        const modal = document.getElementById('imageModal');
        const modalImage = document.getElementById('modalImage');
        modal.style.display = 'block';
        modalImage.src = image.src;
    });
});

// Function to handle closing the modal
document.getElementById('closeModal').addEventListener('click', function() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
});

// Function to handle the back button click and close the modal
document.getElementById('backBtnModal').addEventListener('click', function() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
});