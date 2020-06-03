var scrollSpeed = 2000;

var vivus = new Vivus("podpis", { duration: 300 });
var aboutPage = document.querySelector(".about");
var portfolioPage = document.querySelector(".portfolio");

vivus.stop();

var fullpage = new fullpage("#fullpage", {
  autoScrolling: true,
  scrollingSpeed: scrollSpeed,
  scrollBar: true,
  anchors: ['home', 'about', 'skills', 'portfolio', 'contacts'],
  onLeave: function (origin, destination, direction) {
    if (destination.index == 1) {
      setTimeout(function () {
        vivus.play(0);
      }, scrollSpeed / 2.5);
    } else if (destination.index == 2) {
      sidebar.setAttribute("data-color", skillsPage.getAttribute("data-color"));
    } else if (destination.index == 3) {
      sidebar.setAttribute("data-color", "light");
    } else {
      sidebar.setAttribute("data-color", "dark");
    }
  }
});

var typed = new Typed("#typed", {
  stringsElement: "#typed-strings",
  typeSpeed: 50,
  backSpeed: 30,
});

AOS.init();

var sidebar = document.querySelector(".sidebar"),
  sidebarIcon = document.querySelector(".sidebar__icon");

sidebarIcon.addEventListener("click", function () {
  sidebar.classList.toggle("active");
});

//Skills page animation

var granimInstance = new Granim({
  element: "#canvas-interactive",
  name: "interactive-gradient",
  elToSetClassOn: ".canvas-interactive-wrapper",
  direction: "diagonal",
  stateTransitionSpeed: 500,
  states: {
    "default-state": {
      gradients: [["#ffff00", "#fff176"]],
    },
    "html-state": {
      gradients: [["#f37335", "#fdc830"]],
    },
    "css-state": {
      gradients: [["#2f80ed", "#56ccf2"]],
    },
    "sass-state": {
      gradients: [["#f15f79", "#b24592"]]
    },
    "bootstrap-state": {
      gradients: [["#9d50bb", "#6e48aa"]]
    },
    "vue-state": {
      gradients: [["#11998e", "#38ef7d"]]
    },
    "react-state": {
      gradients: [["#0ed2f7", "#b2fefa"]],
    },
    "redux-state": {
      gradients: [["#da22ff", "#9733ee"]]
    },
    "nodejs-state": {
      gradients: [["#a8e063", "#56ab2f"]]
    }
  },
});

var skillsList = document.querySelectorAll(".techno-list__item"),
  technoInfoText = document.querySelector(".techno-info--text"),
  skillsPage = document.querySelector(".skills"),
  js = document.getElementById("js"),
  html = document.getElementById("html"),
  css = document.getElementById("css"),
  sass = document.getElementById("sass"),
  bootstrap = document.getElementById("bootstrap"),
  vue = document.getElementById("vue"),
  react = document.getElementById("react"),
  redux = document.getElementById("redux"),
  nodejs = document.getElementById("nodejs"),
  backgroundImg = document.querySelector(".techno-info img");

var skillsContent = [
  "JavaScript, often abbreviated as JS, is a programming language that conforms to the\
    ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It\
    has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.\
    <a href=\"https://en.wikipedia.org/wiki/JavaScript\">More info</a>",

  "HTML5 is a markup language used for structuring and presenting content on the World Wide Web.\
    It was the fifth and last major version of HTML that is a World Wide Web Consortium (W3C) recommendation.\
    The current specification is known as the HTML Living Standard and is maintained\
    by a consortium of the major browser vendors (Apple, Google, Mozilla, and Microsoft), the Web Hypertext Application Technology Working Group (WHATWG).\
    <a href=\"https://en.wikipedia.org/wiki/HTML5\">More info</a>",

  "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.\
    CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.\
    CSS is designed to enable the separation of presentation and content, including layout, colors, and fonts.\
    <a href=\"https://en.wikipedia.org/wiki/Cascading_Style_Sheets\">More info</a>",

  "Sass (short for syntactically awesome style sheets) is a style sheet language initially designed by Hampton Catlin and developed by Natalie Weizenbaum.\
    After its initial versions, Weizenbaum and Chris Eppstein have continued to extend Sass with SassScript, a scripting language used in Sass files.\
    <a href=\"https://en.wikipedia.org/wiki/Sass_(stylesheet_language)\">More info</a>",

  "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.\
    It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.\
    <a href=\"https://en.wikipedia.org/wiki/Bootstrap_(front-end_framework)\">More info</a>",

  "Vue.js is an open-source model–view–viewmodel JavaScript framework for building user interfaces and single-page applications.\
    It was created by Evan You, and is maintained by him and the rest of the active core team members coming from various companies such as Netlify and Netguru.\
    <a href=\"https://en.wikipedia.org/wiki/Vue.js\">More info</a>",

  "React (also known as React.js or ReactJS) is an open-source JavaScript library for building user interfaces.\
    It is maintained by Facebook and a community of individual developers and companies.\
    React can be used as a base in the development of single-page or mobile applications.\
    However, React is only concerned with rendering data to the DOM, and so creating React\
    applications usually requires the use of additional libraries for state management and routing.\
    Redux and React Router are respective examples of such libraries.\
    <a href=\"https://en.wikipedia.org/wiki/React_(web_framework)\">More info</a>",

  "Redux is an open-source JavaScript library for managing application state.\
    It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to (and inspired by) Facebook's Flux architecture,\
    it was created by Dan Abramov and Andrew Clark.\
    <a href=\"https://en.wikipedia.org/wiki/Redux_(JavaScript_library)\">More info</a>",

  "Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser.\
    Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to\
    produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a \"JavaScript everywhere\"\
    paradigm, unifying web-application development around a single programming language, rather than different languages for server- and client-side scripts.\
    <a href=\"https://en.wikipedia.org/wiki/Node.js\">More info</a>",

]

function toggleColor(color) {
  if (skillsPage.getAttribute("data-color") !== color) {
    skillsPage.setAttribute("data-color", color);
    sidebar.setAttribute("data-color", color);
  }
  return true;
}

function nextSkill(skillElement, state, img, color, index) {
  skillsList.forEach(function (item) {
    item.classList.remove("active");
  });
  granimInstance.changeState(state);
  skillElement.classList.add("active");
  backgroundImg.src = img;
  technoInfoText.innerHTML = skillsContent[index];
  toggleColor(color);
}

js.addEventListener("click", function () {
  nextSkill(js, "default-state", "./img/js.svg", "dark", 0);
});

html.addEventListener("click", function () {
  nextSkill(html, "html-state", "./img/html5.svg", "light", 1);
});

css.addEventListener("click", function () {
  nextSkill(css, "css-state", "./img/css.svg", "light", 2);
});

sass.addEventListener("click", function () {
  nextSkill(sass, "sass-state", "./img/sass.svg", "light", 3);
});

bootstrap.addEventListener("click", function () {
  nextSkill(bootstrap, "bootstrap-state", "./img/bootstrap.svg", "light", 4);
});

vue.addEventListener("click", function () {
  nextSkill(vue, "vue-state", "./img/vue.svg", "light", 5);
});

react.addEventListener("click", function () {
  nextSkill(react, "react-state", "./img/react2.png", "light", 6);
});

redux.addEventListener("click", function () {
  nextSkill(redux, "redux-state", "./img/redux.svg", "light", 7);
});

nodejs.addEventListener("click", function () {
  nextSkill(nodejs, "nodejs-state", "./img/nodejs-icon.svg", "light", 8);
});

// Macbook animation

var mySwiper = new Swiper(".swiper-container", {
  speed: 600,
  loop: true,
  autoplay: true,
  effect: "fade",
  autoplay: {
    disableOnInteraction: false,
  },
});

var macbook = document.querySelector(".macbook");

macbook.addEventListener("click", function () {
  var activeSlideImg = document.querySelector(".swiper-slide-active > img");
  var url = activeSlideImg.getAttribute("alt");

  if (url !== "") {
    window.open(url);
  }
});

// Scramble text

var messages = [
  "You can swipe the picture in MacBook",
  "Click to check the page.",
];

var promtMessage = document.querySelector(".promt");
var textScramble = new TextScramble(promtMessage);

var counter = 0;
var next = function () {
  textScramble.setText(messages[counter]).then(function () {
    setTimeout(next, 800);
  });
  counter = (counter + 1) % messages.length;
};

next();
