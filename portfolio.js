//Animation with Popmotion: Make card flip


const cardCon = document.querySelector('.card');

 if(document.body.contains(cardCon)){
  const { easing, tween, styler} = window.popmotion;
  const divStyler = styler(cardCon);
  cardCon.addEventListener('click', _event => {
    tween({
      from: 0,
      to: { x: 0, rotate: 360 },
      duration: 2000,
      ease: easing.backOut,
    })
    .start(divStyler.set);
  });
 }


// Array with technologies used to built the site

let techList = [];
let htmlTag = document.getElementsByTagName('html');
let linkTag = document.getElementsByTagName('link');
let scriptTag = document.getElementsByTagName('script');
let questionmarkTag = document.getElementsByTagName('?');

let footerTextEl = document.getElementsByClassName("footer-text")[0];
let footerText = 'This page was built using: ';

function techUsedText() {
  if(htmlTag.length > 0) {
    techList.push('HTML');
  }
  if(linkTag.length > 0) {
    techList.push('CSS');
  }
  if(scriptTag.length > 0) {
    techList.push('JavaScript');
  }
  if(questionmarkTag.length > 0) {
    techList.push('PHP');
  }
  
  for(let i = 0; i < techList.length -1; i++) {
    console.log(i); //delete!!!
    if(i === 0) {
      footerText += techList[i];
      console.log(footerText); ///delete!!!
    } else {
      footerText += ', ' + techList[i];
      }    
  }
  
  footerText += ' and ' + techList[techList.length -1] + '.'
  console.log(footerText); //delete!!!
  footerTextEl.innerHTML = footerText;
}

techUsedText()
  

// Homepage Github code snippet, provided by ITC

let GITHUB_URL = "https://api.github.com/users/LangeJM";
const card = document.getElementsByClassName("card")[0];
const profileImage = document.getElementById("profile-image");

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
        
    profileImage.src = data.avatar_url;
    const profileName = document.getElementById("my-name");
    profileName.textContent = data.name;
  });


/*
Contact Page - Form Submit: 
Disable submit button until required input provided. 
Function listens 'oninput' of the respective required field. 
This is embedded in the html.  
*/

function checkForm()
{
    let elements = document.forms[0].elements;
    let submitButton = document.getElementsByClassName("submit")[0] 
    console.log("New cycle");//Delete!!
    for(let i = 0; i < elements.length; i++)
    {
      if(elements[i].hasAttribute('required'))
        {
          console.log(elements[i].name)//Delete!!
          console.log(elements[i].value)//Delete!!
          if(elements[i].value.length == 0)
            {
              submitButton.setAttribute('disabled',true);
              console.log('disabled')
              break;
            } else {submitButton.removeAttribute('disabled');
          console.log('enabled')}
        };
     }
}

// ABout Page: Hide/Show paragraph based on button click code snippet 
const upBtn = document.querySelector(".up");
const downBtn = document.querySelector(".down");
const placesParas = document.querySelectorAll('.places p');
let currentSelected = 0; 
let cityId = ''

upBtn.addEventListener('click', function() {
    placesParas[currentSelected].classList.add("hidden");
    currentSelected--;
    placesParas[currentSelected].classList.remove("hidden");
    downBtn.disabled = false;
    if (currentSelected === 0) {
        upBtn.disabled = true;
    }
    
    //This part was inserted per event listener (twice). Maybe there is a good way to re-use within a fucntion etc..? 
    cityId = placesParas[currentSelected].id
    
    let maps_URL = `https://maps.google.com/maps?width=100%25&height=100%&hl=en&q=${cityId}+(My%20Business%20Name)&t=&z=12&ie=UTF8&iwloc=B&output=embed`;

    frameVar = document.getElementById("frameID");
    frameVar.src = maps_URL;

    //Function to re-load the iframe
    function reload() { 
      frameVar.src += ""; 
      } btn.onclick = reload; 
    reload;
});

downBtn.addEventListener('click', function() {
    placesParas[currentSelected].classList.add("hidden");
    currentSelected++;
    placesParas[currentSelected].classList.remove("hidden");
    upBtn.disabled = false;

    if (placesParas.length === currentSelected+1) {
        downBtn.disabled = true;
    }
    
    cityId = placesParas[currentSelected].id
    
    let maps_URL = `https://maps.google.com/maps?width=100%25&height=100%&hl=en&q=${cityId}+(My%20Business%20Name)&t=&z=12&ie=UTF8&iwloc=B&output=embed`;

    frameVar = document.getElementById("frameID");
    frameVar.src = maps_URL;

    //Function to re-load the iframe
    function reload() { 
      frameVar.src += ""; 
      } btn.onclick = reload; 
    reload;   
});

// On-Form-Submit Confirm Pop-Up (tied into html) 
function confSubmit(form) {
  if (confirm("Are you sure you want to submit the form?")) {
    alert("Form succesfully submitted!");
    form.submit();
  }
  else {
  alert("You decided to not submit the form!");
  }
}
