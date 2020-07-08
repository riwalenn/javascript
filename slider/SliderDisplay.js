class SliderDisplay {
    constructor() {
        this.listImage = [];
        this.addEvents();
        this.indexImage = 0;
        this.sliderTag = document.getElementById("slider");
    }
    addImage(imagePath) {
        this.listImage.push(imagePath);
    }

    displaySlider() {
        let firstImg = new Image();
        firstImg.src = this.listImage[this.indexImage];
        firstImg.setAttribute("id", "imgSlider");
        firstImg.setAttribute("class", "display-block");

        this.sliderTag.appendChild(firstImg);
    }

    addEvents() {
        let buttonAv = document.getElementById("imgBtnAv");
        buttonAv.addEventListener('click', this.displayNextImg.bind(this));
        let buttonArr = document.getElementById("imgBtnArr");
        buttonArr.addEventListener('click', this.displayPreviousImg.bind(this));
    }

    displayNextImg() {
        this.indexImage++;
        if (this.indexImage >= this.listImage.length) {
            this.indexImage = 0;
        }
        let img = this.sliderTag.firstChild;
        console.log(img);
        img.classList.replace("display-block", "display-none");

        let currentImage = new Image();
        currentImage.src = this.listImage[this.indexImage];
        currentImage.className = "display-block";
        this.sliderTag.appendChild(currentImage);
    }

    displayPreviousImg() {

    }
}