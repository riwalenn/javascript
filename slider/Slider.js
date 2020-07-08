class Slider {
    afficherImage() {
        let firstImg = new Image();
        let slider = document.getElementById("slider");

        firstImg.src = "img/1.jpg";
        firstImg.setAttribute("id", "imgSlider");
        firstImg.setAttribute("class", "firstImg");

        slider.appendChild(firstImg); //affiche l'image dans le slider
    }

    modifierImageAv() {
        let buttonAv = document.getElementById("imgBtnAv");
        let slider = document.getElementById("slider");

        buttonAv.addEventListener('click', function () {
            let img = document.getElementById("imgSlider");

            if (img.classList.contains("firstImg")) {
                let secondImg = new Image();

                secondImg.src = "img/2.jpg";
                secondImg.setAttribute("id", "imgSlider");
                secondImg.setAttribute("class", "secondImg");

                img.remove();
                slider.appendChild(secondImg);

            } else if (img.classList.contains("secondImg")) {
                let thirdImg = new Image();

                thirdImg.src = "img/3.jpg";
                thirdImg.setAttribute("id", "imgSlider");
                thirdImg.setAttribute("class", "thirdImg");

                img.remove();
                slider.appendChild(thirdImg);

            } else if (img.classList.contains("thirdImg")) {
                let firstImg = new Image();

                firstImg.src = "img/1.jpg";
                firstImg.setAttribute("id", "imgSlider");
                firstImg.setAttribute("class", "firstImg");

                img.remove();
                slider.appendChild(firstImg);

            }
        });
    }

    modifierImageArr() {
        let buttonArr = document.getElementById("imgBtnArr");
        let slider = document.getElementById("slider");

        buttonArr.addEventListener('click', function () {
            let img = document.getElementById("imgSlider");
            if (img.classList.contains("firstImg")) {
                let thirdImg = new Image();

                thirdImg.src = "img/3.jpg";
                thirdImg.setAttribute("id", "imgSlider");
                thirdImg.setAttribute("class", "thirdImg");

                img.remove();
                slider.appendChild(thirdImg);

            } else if (img.classList.contains("secondImg")) {
                let firstImg = new Image();

                firstImg.src = "img/1.jpg";
                firstImg.setAttribute("id", "imgSlider");
                firstImg.setAttribute("class", "firstImg");

                img.remove();
                slider.appendChild(firstImg);

            } else if (img.classList.contains("thirdImg")) {
                let secondImg = new Image();

                secondImg.src = "img/2.jpg";
                secondImg.setAttribute("id", "imgSlider");
                secondImg.setAttribute("class", "secondImg");

                img.remove();
                slider.appendChild(secondImg);

            }
        });
    }
}