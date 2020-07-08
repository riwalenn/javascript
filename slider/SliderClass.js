class SliderClass {
    displayFirstImg() {
        let firstImg = document.createElement("div");
        firstImg.className = "firstImg";
        document.getElementById("slider").appendChild(firstImg); //affiche l'image dans le slider
    }

    moveForward() {
        let buttonAv = document.getElementById("imgBtnAv");
        let slider = document.getElementById("slider");

        buttonAv.addEventListener('click', function () {
            let img = slider.firstChild;

            if (img.classList.contains("firstImg")) {
                img.classList.add("secondImg");
                img.classList.remove("firstImg");
            } else if (img.classList.contains("secondImg")) {
                img.classList.add("thirdImg");
                img.classList.remove("secondImg");
            } else if (img.classList.contains("thirdImg")) {
                img.classList.add("firstImg");
                img.classList.remove("thirdImg");
            }
        });
    }

    moveBackward() {
        let buttonArr = document.getElementById("imgBtnArr");
        let slider = document.getElementById("slider");

        buttonArr.addEventListener('click', function () {
            let img = slider.firstChild;

            if (img.classList.contains("firstImg")) {
            img.classList.add("thirdImg");
            img.classList.remove("firstImg");
            } else if (img.classList.contains("secondImg")) {
                img.classList.add("firstImg");
                img.classList.remove("secondImg");
            } else if (img.classList.contains("thirdImg")) {
                img.classList.add("secondImg");
                img.classList.remove("thirdImg");
            }
        });
    }
}