// Start Write name project dynamically
let element = document.getElementById("id");
let ele = ` Special Design`;

let i = 0;
window.onload = function () {
  let interv = setInterval(function () {
    element.innerHTML += ele[i];
    i++;
    if (i === ele.length) {
      clearInterval(interv);
    }
  }, 100);
};
// End Write name project dynamically

// start Setting box
let settingbox = document.querySelector(".setting-box");
let iconsetting = document.querySelector(".fa-gear");
iconsetting.onclick = function () {
  // open setting
  settingbox.classList.toggle("open");
  //stop toggle
  iconsetting.classList.toggle("fa-spin");
};
// End Setting box

// start switch color
document.documentElement.style.setProperty(
  "--main-color",
  localStorage.getItem("pagecolor")
);
// About US section photo
document.querySelector(".img-us img").src = localStorage.getItem("aboutimg");

document.querySelectorAll(".colors-list li").forEach((e) => {
  e.classList.remove("active");
  // add active to color element
  if (e.getAttribute("data-color") === localStorage.getItem("pagecolor")) {
    e.classList.add("active");
  }
});

let colorli = document.querySelectorAll(".colors-list li");
colorli.forEach((li) => {
  li.addEventListener("click", (e) => {
    // change main_color
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color // li.getAttribute("data-color")
    );
    // About US section photos
    document.querySelector(".img-us img").src = e.target.dataset.img;
    localStorage.setItem("aboutimg", e.target.dataset.img);

    localStorage.setItem("pagecolor", e.target.dataset.color);
    // loop for active
    document.querySelectorAll(".colors-list .active").forEach((e) => {
      e.classList.remove("active");
    });

    e.target.classList.add("active");
  });
});
// End switch color
// Strat switch background
let backgroundColor = document.querySelectorAll(".random-background span");
backgroundColor.forEach((span) => {
  span.addEventListener("click", (el) => {
    el.target.parentElement.querySelectorAll(".active").forEach((active) => {
      active.classList.remove("active");
    });
    el.target.classList.add("active");
  });
});

// Start Select land of LandingPage
let LandingPage = document.querySelector(".landing-page");
// array of images
let imgarr = ["Img01.jpg", "Img02.jpg", "Img03.jpg", "Img04.jpg", "Img05.jpg"];

// function random
let no = document.querySelector(".no");
let yes = document.querySelector(".yes");
let backgroundoption = true;
let backgroundinterval;
function randomizeImg() {
  if (backgroundoption === true) {
    backgroundinterval = setInterval(function () {
      let imgrandom = parseInt(Math.random() * imgarr.length);
      LandingPage.style.backgroundImage =
        'url("./imgs/' + imgarr[imgrandom] + '")';
    }, 3000);
  }
}
yes.addEventListener("click", () => {
  backgroundoption = true;
  randomizeImg();
});
no.addEventListener("click", () => {
  backgroundoption = false;
  clearInterval(backgroundinterval);
  localStorage.setItem("background-option", LandingPage.style.backgroundImage);
});
// End Select land of LandingPage
// End switch background

// Start select skills
let ourskills = document.querySelector(".skills");

window.onscroll = function () {
  // to calculate height
  //   1- offsettop
  let skilloffsettop = ourskills.offsetTop;
  //   2- offsetHeight
  let skilloffsetHeight = ourskills.offsetHeight;
  //   3- window innerheight
  let skillinnerheight = window.innerHeight;
  //   4- window pageyscroll
  let skillpageyscroll = window.pageYOffset;

  //(window.scrollY >= 370 ) ===(skillpageyscroll >=skilloffsettop+skilloffsetHeight-skillinnerheight)
  if (
    skillpageyscroll >
    skilloffsettop + skilloffsetHeight - skillinnerheight
  ) {
    document
      .querySelectorAll(".skill-box .skill-progress span")
      .forEach((skill) => {
        skill.style.width = skill.dataset.progress;
      });
  }
};
// End select skills

// Start Gallary
let Allphoto = document.querySelectorAll(".images-box img");

Allphoto.forEach((img) => {
  img.addEventListener("click", (e) => {
    // create overlay
    let overlay = document.createElement("div");
    overlay.className = "popup-overlay";
    document.body.appendChild(overlay);
    // create popupbox
    let popupbox = document.createElement("div");
    popupbox.className = "popup-box";
    // create Header
    if (img.alt !== null) {
      let imghead = document.createElement("h3");
      let imgtext = document.createTextNode(img.alt);
      imghead.appendChild(imgtext);
      popupbox.appendChild(imghead);
    }
    // create close span
    let closebutton = document.createElement("span");
    let close = document.createTextNode("X");
    closebutton.appendChild(close);
    popupbox.appendChild(closebutton);
    closebutton.className = "close-btn";
    // create image
    let imgpop = document.createElement("img");
    imgpop.src = img.src;
    popupbox.appendChild(imgpop);
    document.body.appendChild(popupbox);
  });
});
// close popup
document.addEventListener("click", (e) => {
  if (e.target.className === "close-btn") {
    // remove parent
    e.target.parentElement.remove();
    // remove delay
    document.querySelector(".popup-overlay").remove();
  }
});
// End Gallary
// links
let golink = document.querySelectorAll(".links li");
golink.forEach((el) => {
  console.log(el);
  el.addEventListener("click", () => {
    console.log(el.dataset.section);
    document.querySelector("." + el.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
  });
});
// Start nav-bullet
let allbullets = document.querySelectorAll(".nav-bullets .bullet");
allbullets.forEach((bullet) => {
  bullet.addEventListener("click", (e) => {
    document.querySelector("." + e.target.dataset.section).scrollIntoView({
      behavior: "smooth",
    });
  });
});

let buttonspan = document.querySelectorAll(".bullets-show span");
let navbullets = document.querySelector(".nav-bullets");
let bulletlocalnav = localStorage.getItem("bullets");
//local storage
navbullets.style.display = bulletlocalnav;

buttonspan.forEach((e) => {
  e.addEventListener("click", (e) => {
    let res = e.target.dataset.display;
    if (res == "block") {
      navbullets.style.display = e.target.dataset.display;
    } else {
      navbullets.style.display = e.target.dataset.display;
    }
    localStorage.setItem("bullets", navbullets.style.display);
  });
});
buttonspan.forEach((e) => {
  // remove all active
  e.classList.remove("active");
  // add class active
  if (bulletlocalnav === "block") {
    document.querySelector(".bullets-show .yes").classList.add("active");
  } else {
    document.querySelector(".bullets-show .no").classList.add("active");
  }
});
// End nav-bullet
// start reset button

let resetbutton = document.querySelector(".reset-option");
resetbutton.addEventListener("click", () => {
  localStorage.clear();
  localStorage.setItem("aboutimg", "./imgs/about-y.jpg");
  document.querySelector(".img-us img").src = localStorage.getItem("aboutimg");
  window.location.reload();
});

// toggle menu  improtant
let tooglebtn = document.querySelector(".list-menu");
let clicable = document.querySelector(".list-menu i");
let tlinks = document.querySelector(".links");

tooglebtn.onclick = function () {
  this.classList.toggle("menu-active");
  tlinks.classList.toggle("open");
};

document.addEventListener("click", (e) => {
  if (e.target !== clicable && e.target !== tlinks) {
    // check menu if open
    if (tlinks.classList.contains("open")) {
      //toggle
      tooglebtn.classList.toggle("menu-active");
      tlinks.classList.toggle("open");
    }
  }
});

tlinks.onclick = function (e) {
  e.stopPropagation();
};
