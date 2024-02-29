

var likeImage = document.querySelector('.like');

likeImage.addEventListener('click', function () {
    if (likeImage.src.endsWith('empty.png')) {
        likeImage.src = 'images/full.png';
        likeImage.alt = 'Image 2';
    } else {
        likeImage.src = 'images/empty.png';
        likeImage.alt = 'Image 1';
    }
});