const content = document.querySelector(".content");
const startButton = document.querySelector('#start-btn');
const main = document.querySelector(".main");
const closeButton = document.querySelector(".close");
const doneButton = document.querySelector("#done-btn");
const numberInput = document.querySelector("#numberInput");
const bulbContainer = document.querySelector("#bulbContainer");
const toggleContainer = document.querySelector("#toggleContainer");
const resetButton = document.querySelector("#reset-btn");

const bulbOnImage = 'https://pics.clipartpng.com/midle/Yellow_Light_Bulb_PNG_Clip_Art-2108.png';
const bulbOffImage = 'https://tse3.mm.bing.net/th?id=OIP.gCyfU_YjPSFedeV9kFlY_QAAAA&w=300&h=538&rs=1&pid=ImgDetMain';


startButton.addEventListener("click", () => {
   content.style.display = 'none';
   main.style.display = 'block';
});

closeButton.addEventListener("click", () => {
   main.style.display = "none";
});

doneButton.addEventListener("click", () => {
   resetButton.style.display = 'block';
   startButton.style.display = 'none';
   const numBulbs = parseInt(numberInput.value);
   if (isNaN(numBulbs) || numBulbs <= 0) {
        alert("pleasr enter  valid number of bulbs");
        return;
   }

   bulbContainer.innerHTML = "";
   toggleContainer.innerHTML = "";

   for (let i = 0; i < numBulbs; i++) {
      const bulbWrapper = document.createElement('div');
      bulbWrapper.classList.add('bulb-Wrapper')

      const bulb = document.createElement('div');
      bulb.classList.add('bulb');

      const bulbImage = document.createElement('img');
      bulbImage.classList.add('bulb-image');
      bulbImage.src = bulbOffImage;

      bulb.appendChild(bulbImage);
  
      const toggleButton = document.createElement('div');
      toggleButton.classList.add('toggle-btn');
      toggleButton.setAttribute("data-index", i);

      bulbWrapper.appendChild(bulb);
      bulbWrapper.appendChild(toggleButton);


      bulbContainer.appendChild(bulbWrapper);
       
  }

const toggleButton = document.querySelectorAll('.toggle-btn');
     toggleButton.forEach(button => {
    button.addEventListener('click', () => {
      const bulbIndx = parseInt(button.getAttribute('data-index'));
      const bulbs = document.querySelectorAll('.bulb');
      const bulb = bulbs[bulbIndx];
      const bulbImage = bulb.querySelector('.bulb-image');


      if (bulbImage.src === bulbOffImage) {
         bulbImage.src = bulbOnImage;
         button.classList.add('active');
       }
      else {
         bulbImage.src = bulbOffImage;
         button.classList.remove('active');
        }
        });
      });
      main.style.display = 'none';
    });

    resetButton.addEventListener('click', () => {
      const bulbImgs = document.querySelectorAll('.bulb-image');
      const toggleButtons = document.querySelectorAll('.toggle-btn');
      bulbImgs.forEach((bulbImg, i) => {
        bulbImg.src = bulbOffImage;
        toggleButtons[i].classList.remove('active');
      });


    });
