// first section Typewriter Effect
const texts = [
    "VIDEO EDITOR",
    "SHORTS EDITOR",
    "INTRO EDITOR",
    "YOUTUBER"
]
// it refers to the speed of text and the location of text
let speed = 100;
const textElements = document.querySelector("#element");

let textIndex = 0;
let charcterIndex = 0;

// this function is used for the animation of the text
function typeWriter() {
    if (charcterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else {
        setTimeout(eraseText, 1000)
    }
}
// this function is basically used for the erase animation on the text
function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 100)
    }
    else {
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}
// this is used to set that the animation will start runnig as soon as the window is loaded
window.onload = typeWriter

// first section Typewriter Effect

// for animation in the second section
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab");
    // document.getElementById(tabname).classList.add("active-tab");
}
// for animation in the second section

// for the submit form 
  const scriptURL = 'https://script.google.com/macros/s/AKfycbz_Ksb4YZfaiPFVzcdtpRd8GKGzH5cDyzivsdvoMxCFwJt3LLeLmXgsX17a2QuHNnwrEQ/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })

