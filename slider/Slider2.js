class Slider2 {
    constructor() {
        this.listImages = [];
        this.indexImage = 0;
        this.sliderTag = document.getElementById("slider");
        this.hrefindicators = document.getElementById("slider_indicators");
        this.addEvents();
    }

    addImage(imagePath) {
        this.listImages.push(imagePath);
    }

    displaySlider() {
        let firstImg = new Image();

        firstImg.src = this.listImages[this.indexImage];

        this.sliderTag.appendChild(firstImg); //affiche l'image dans le slider

        this.displayIndicators();
    }

    addEvents() {
        let buttonAv = document.getElementById("imgBtnAv");
        buttonAv.addEventListener('click', this.goToNextImage.bind(this));
        let buttonArr = document.getElementById("imgBtnArr");
        buttonArr.addEventListener('click', this.goToPrevImage.bind(this));
    }

    goToIndexImage() {
        this.sliderTag.innerHTML = "";
        let currentImage = new Image();
        currentImage.src = this.listImages[this.indexImage];
        this.sliderTag.appendChild(currentImage);
    }

    goToImage(event) {
        console.log(event.target.getAttribute("data-slide-to"));
        this.indexImage = event.target.getAttribute("data-slide-to");
        this.goToIndexImage();
    }

    goToNextImage() {
        this.indexImage++;
        if (this.indexImage >= this.listImages.length) {
            this.indexImage = 0;
        }

        this.goToIndexImage();
    }

    goToPrevImage() {
        this.indexImage--;
        if (this.indexImage < 0) {
            this.indexImage = this.listImages.length-1;
        }

        this.goToIndexImage();
    }

    displayIndicators() {
        console.log(this.listImages[0]);
        for (let i = 0; i < this.listImages.length; i++) {
            console.log("coucou for");
            let hrefIndicator = document.createElement("li");
            hrefIndicator.setAttribute("class", "slider_indicator");
            hrefIndicator.setAttribute("id", "indicator" + i); //si w3c
            hrefIndicator.setAttribute("data-slide-to", i); //si pas w3c
            hrefIndicator.addEventListener('click', this.goToImage.bind(this));
            this.hrefindicators.appendChild(hrefIndicator);
        }
    }
}