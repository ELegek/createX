// let circularProgress = document.querySelector(".circular-progress");
// let progressValue = document.querySelector(".progress-value");
// let progressStartValue = 0;
// let progressEndValue = 98;
// let speed = 10;

// let progress = setInterval(() => {
//   progressStartValue++;
//   progressValue.textContent = `${progressStartValue}%`;
//   circularProgress.style.background = `conic-gradient(#F89828 ${
//     progressStartValue * 3.6
//   }deg, rgba(248, 152, 40, 0.6) 0deg)`;

//   if (progressStartValue == progressEndValue) {
//     clearInterval(progress);
//   }
// }, speed);

// let circularProgressYears = document.querySelector(".circular-progress__years");
// let progressValueYears = document.querySelector(".progress-value__years");
// let progressStartValueYears = 0;
// let progressEndValueYears = 20;
// let speedYears = 10;

// let progressYears = setInterval(() => {
//   progressStartValueYears++;
//   progressValueYears.textContent = `${progressStartValueYears}`;
//   circularProgressYears.style.background = `conic-gradient(#f52f6e ${
//     progressStartValueYears * 3.6
//   }deg, rgba(245, 47, 110, 0.6) 0deg)`;

//   if (progressStartValueYears == progressEndValueYears) {
//     clearInterval(progressYears);
//   }
// }, speedYears);

// let circularProgressHours = document.querySelector(".circular-progress__hours");
// let progressValueHours = document.querySelector(".progress-value__hours");
// let progressStartValueHours = 0;
// let progressEndValueHours = 9452;
// let speedHours = 10;

// let progressHours = setInterval(() => {
//   progressStartValueHours += 94;
//   progressValueHours.textContent = `${progressStartValueHours}`;
//   circularProgressHours.style.background = `conic-gradient(#5a87fc ${
//     progressStartValueHours * 0.036
//   }deg, rgba(90, 135, 252, 0.6) 0deg)`;

//   if (progressStartValueHours >= progressEndValueHours) {
//     clearInterval(progressHours);
//   }
// }, speedHours);

// let circularProgressProjects = document.querySelector(
//   ".circular-progress__projects"
// );
// let progressValueProjects = document.querySelector(".progress-value__projects");
// let progressStartValueProjects = 0;
// let progressEndValueProjects = 100;
// let speedProjects = 10;

// let progressProjects = setInterval(() => {
//   progressStartValueProjects++;
//   progressValueProjects.textContent = `${progressStartValueProjects}%`;
//   circularProgressProjects.style.background = `conic-gradient(#03cea4 ${
//     progressStartValueProjects * 3.6
//   }deg, rgba(3, 206, 164, 0.6) 0deg)`;

//   if (progressStartValueProjects == progressEndValueProjects) {
//     clearInterval(progressProjects);
//   }
// }, speedProjects);

import { Circle } from "progressbar.js";

var circleBar1 = new Circle("#circular-1", {
  color: "#000",
  strokeWidth: 2,
  trailWidth: 2,
  trailColor: "#eee",
  easing: "linear",
  text: {
    value: "0",
    className: "progress-text",
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      padding: 0,
      margin: 0,
      transform: "translate(-50%,-50%)",
    },
  },
  step: (state, shape) => {
    shape.setText(Math.round(shape.value() * 100) + "%");
  },
});
var circleBar2 = new Circle("#circular-2", {
  color: "#000",
  strokeWidth: 2,
  trailWidth: 2,
  trailColor: "#eee",
  easing: "linear",
  text: {
    value: "0",
    className: "progress-text",
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      padding: 0,
      margin: 0,
      transform: "translate(-50%,-50%)",
    },
  },
  step: (state, shape) => {
    shape.setText(Math.round(shape.value() * 100));
  },
});
var circleBar3 = new Circle("#circular-3", {
  color: "#000",
  strokeWidth: 2,
  trailWidth: 2,
  trailColor: "#eee",
  easing: "linear",
  text: {
    value: "0",
    className: "progress-text",
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      padding: 0,
      margin: 0,
      transform: "translate(-50%,-50%)",
    },
  },
  step: (state, shape) => {
    shape.setText(Math.round(shape.value() * 100));
  },
});
var circleBar4 = new Circle("#circular-4", {
  color: "#000",
  strokeWidth: 2,
  trailWidth: 2,
  trailColor: "#eee",
  easing: "linear",
  text: {
    value: "0",
    className: "progress-text",
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      padding: 0,
      margin: 0,
      transform: "translate(-50%,-50%)",
    },
  },
  step: (state, shape) => {
    shape.setText(Math.round(shape.value() * 100));
  },
});

// Функция, которая
var visible = function (e) {
  var elementTop = window.pageYOffset + e.getBoundingClientRect().top, // Получаем координаты верхней части элементы
    windowBottom = window.pageYOffset + document.documentElement.clientHeight; // Получаем положение нижней части окна

  // Если положение нижней части окна больше чем верхняя координата элемента, то мы долистали до элемента
  // Так же проверим, не запущена ли уже анимация, а то выйдет казус в виде всё время запускающееся анимации
  if (elementTop < windowBottom && Number(e.dataset.animationState) === 0) {
    circleBar1.animate(1, {
      duration: 2000,
    });
    circleBar2.animate(1, {
      duration: 2000,
    });
    circleBar3.animate(1, {
      duration: 2000,
    });
    circleBar4.animate(1, {
      duration: 2000,
    });

    e.dataset.animationState = 1; // Отмечаем, что анимация запущена
  }
};

// Получаем нужный элемент
var element1 = document.querySelector("#circular-1");
var element2 = document.querySelector("#circular-2");
var element3 = document.querySelector("#circular-3");
var element4 = document.querySelector("#circular-4");

// Запускаем функцию
// Запускаем при скролле
window.addEventListener("scroll", function () {
  visible(element1);
  visible(element2);
  visible(element3);
  visible(element4);
});

visible(element1);
visible(element2);
visible(element3);
visible(element4);
