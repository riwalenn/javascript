class GameNumber {
    constructor(numberSearch) {
        this.numberSearch = numberSearch;
    }

    rangeNumbers(newNumber) {
        if ((newNumber > 0) && (newNumber < 100)) {
            return true;
        } else {
            return false;
        }
    }

    compareNumbers(newNumber) {
        if (newNumber < this.numberSearch) {
            return -1;
        }
        if (newNumber > this.numberSearch) {
            return 1;
        }
        if (newNumber == this.numberSearch) {
            return 0;
        }
    }

    verifNumber(inputId) {
        let input = document.getElementById(inputId);
        let newNumber = input.value;
        let resultCompare = this.compareNumbers(newNumber);
        let isInRange = this.rangeNumbers(newNumber);
        console.log(input.value);

        if (resultCompare === -1) {
            alert ("le nombre est plus élevé");
        }
        if (resultCompare === 1) {
            alert("le nombre est moins élevé");
        }
        if (resultCompare === 0) {
            alert("Félicitations, vous avez trouvé !");
            return true;
        }
        if (isInRange === false) {
            alert("Veuillez entrer un nombre entre 0 et 100");
        }
        return false;
    }
}