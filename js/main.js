window.addEventListener('load', init);

const imageList = ['arrow', 'foto;s', 'info', 'preview'];
const slideShow = document.getElementById("slideshow");
let slideNr = 0
let slide = document.createElement('img');
slide.id = 'slide';

function init() {

    console.log(slideShow)

    createSlideShow()

}

function createSlideShow() {
    let leftButton = document.createElement('button');
    leftButton.id = 'left-button';
    let rightButton = document.createElement('button');
    rightButton.id = 'right-button';

    slide.src = `img/${imageList[slideNr]}.png`;

    let buttonIcon = document.createElement('img');

    leftButton.appendChild(buttonIcon);
    rightButton.appendChild(buttonIcon);

    slideShow.appendChild(leftButton);
    slideShow.appendChild(slide);
    slideShow.appendChild(rightButton);

    console.log(slideShow)

    addEventListener('click', slideChangeHandler);
}

function slideChangeHandler(e) {

    if(e.target.id === "right-button" || e.target.id === "left-button") {
        if(e.target.id === "right-button") {
            console.log('!!');
            slideNr ++
            slide.src = `img/${imageList[slideNr]}.png`;
        } else if(e.target.id === "left-button") {
            console.log('!!');
            slideNr --
            slide.src = `img/${imageList[slideNr]}.png`;
        }
    }

    if(slideNr > imageList.length) {
        slideNr = 0;
    } else if (slideNr < 0) {
        slideNr = imageList.length;
    }

    console.log(slideNr)
}