class Borderradius {
    constructor() {
        this.theBox = document.querySelector(".box");
        this.topLeftInput = document.querySelector('.top-left input');
        this.topRightInput = document.querySelector('.top-right input');
        this.bottomLeftInput = document.querySelector('.bottom-left input');
        this.bottomRightInput = document.querySelector('.bottom-right input');
        this.thickness = document.querySelector('.thick input');
        this.inputs = document.querySelectorAll('input[type="text"]')
        this.topLeftText = document.querySelector('.top-left-text');
        this.topRightText = document.querySelector('.top-right-text');
        this.bottomLeftText = document.querySelector('.bottom-left-text');
        this.bottomRightText = document.querySelector('.bottom-right-text');
        this.borderThickness = document.querySelector('.border-thickness');
        this.borderStyle = document.querySelector(".style-select")
        this.borderType = document.querySelector(".border-type")
        this.borderColor = document.querySelector('input[type="color"]')
        this.borderColorText = document.querySelector('.border-color')
        this.topLeftText.innerText = `0px`;
        this.topRightText.innerText = `0px`;
        this.bottomLeftText.innerText = `0px`;
        this.bottomRightText.innerText = `0px`;
        this.borderThickness.innerText = `0px`

    }

    changeRadius() {
        this.inputs.forEach(input => {
            input.maxLength = 3;
            this.inputCheck()
        })

        let tL = this.topLeftInput.value;
        let tR = this.topRightInput.value;
        let bL = this.bottomLeftInput.value;
        let bR = this.bottomRightInput.value;
        let thick = this.thickness.value;


        this.theBox.style.borderTopLeftRadius = `${tL}px`;
        this.theBox.style.borderTopRightRadius = `${tR}px`;
        this.theBox.style.borderBottomLeftRadius = `${bL}px`;
        this.theBox.style.borderBottomRightRadius = `${bR}px`;
        this.theBox.style.borderWidth = `${thick}px`;

        this.topLeftText.innerText = `${tL}px`;
        this.topRightText.innerText = `${tR}px`;
        this.bottomLeftText.innerText = `${bL}px`;
        this.bottomRightText.innerText = `${bR}px`;
        this.borderThickness.innerText = `${thick}px`;

    }

    inputCheck() {
        this.thickness.maxLength = 2
        if (this.thickness.value > 30) {
            this.thickness.value = 1;
        }
    }

    changeStyle() {
        let border = this.borderStyle.value;
        switch (border) {
            case 'dashed':
                this.theBox.style.borderStyle = "dashed"
                this.borderType.innerText = 'dashed'
                break;

            case 'dotted':
                this.theBox.style.borderStyle = "dotted"
                this.borderType.innerText = 'dotted'
                break;

            case 'double':
                this.theBox.style.borderStyle = "double"
                this.borderType.innerText = 'double'
                break;

            case 'groove':
                this.theBox.style.borderStyle = "groove"
                this.borderType.innerText = 'groove'
                break;

            case 'inset':
                this.theBox.style.borderStyle = "inset"
                this.borderType.innerText = 'inset'
                break;

            case 'outset':
                this.theBox.style.borderStyle = "outset"
                this.borderType.innerText = 'outset'
                break;

            case 'ridge':
                this.theBox.style.borderStyle = "ridge"
                this.borderType.innerText = 'ridge'
                break;

            case 'solid':
                this.theBox.style.borderStyle = "solid"
                this.borderType.innerText = 'solid'
                break;
        }

    }
    changeColor() {
        let colorCode = this.borderColor.value;
        this.theBox.style.borderColor = colorCode;
        this.borderColorText.innerText = colorCode;
    }
}

const radiusApp = new Borderradius;

radiusApp.inputs.forEach(function(input) {
    input.addEventListener('input', function() {
        radiusApp.changeRadius()
    })
})

radiusApp.borderStyle.addEventListener('change', function() {
    radiusApp.changeStyle()
})

radiusApp.borderColor.addEventListener('change', function() {
    radiusApp.changeColor()
})