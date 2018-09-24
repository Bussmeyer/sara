class loadingimage {
  constructor(element) {
    this.element = element;
    this.splashImg = element.querySelector('[splash-img]');
    this.splashPreImg = element.querySelector('[splash-pre-img]');
    this.src = '';
    this.srcSet = '';

    this.splashImg.addEventListener('load', () => {
        this.update();
    });

    if (this.splashImg.complete) {
        this.update();
    }
  }

  update() {
    let src = this.splashImg.getAttribute('data-src');
    let srcSet = this.splashImg.getAttribute('data-srcSet');
    if (this.src !== src && this.srcSet !== srcSet) {
      this.src = src;
      this.srcSet = srcSet;
      this.splashImg.classList.add('reveal');
      this.splashImg.src = this.src;
      this.splashImg.setAttribute('srcSet', this.srcSet);
      this.splashImg.addEventListener('animationend', function(e) {
        e.target.classList.remove('reveal');
      });
    }
  }
}
module.exports = loadingimage;
