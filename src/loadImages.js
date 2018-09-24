module.exports = function loadFullImages() {
    /* creates the image element and sets up a callback to add it
       to the page once it loads */
    function loadFullImage(item) {
        const img = new Image();
        img.src = item.href;
        img.className = 'reveal';
        if (img.complete) {
            phaseInImg(item, img);
        } else {
            img.addEventListener('load', function fullImageLoaded() {
                phaseInImg(item, img);
                img.removeEventListener('load', fullImageLoaded);
            })
        }
    }

    /* adds full image element to page, removes placeholder element */
    function phaseInImg(item, img) {
        removePreviewFeatures(item);
        item
            .appendChild(img)
            .addEventListener('animationend', function phaseOutPreview(e) {
                let previewImage = item.querySelector('.hero-preview');
                item.removeChild(previewImage);
                e.target.classList.remove('reveal');
                e.target.removeEventListener('animationend', phaseOutPreview);
            })
    }
}
