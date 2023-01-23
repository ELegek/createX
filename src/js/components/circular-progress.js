import { Circle } from "progressbar.js";

var circleBar1 = new Circle("#circular-1", {
  color: "#F89828",
  strokeWidth: 6,
  trailWidth: 6,
  trailColor: "rgba(248, 152, 40, 0.6)",
  easing: "linear",
  text: {
    value: "0",
    className: "progress-text",
    style: {
      color: "#000",
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
  color: "#F52F6E",
  strokeWidth: 6,
  trailWidth: 6,
  trailColor: "rgba(245, 47, 110, 0.6)",
  easing: "linear",
  text: {
    value: "0",
    className: "progress-text",
    style: {
      color: "#000",
      position: "absolute",
      top: "50%",
      left: "50%",
      padding: 0,
      margin: 0,
      transform: "translate(-50%,-50%)",
    },
  },
  step: (state, shape) => {
    shape.setText(Math.round(shape.value() * 26.6));
  },
});
var circleBar3 = new Circle("#circular-3", {
  color: "#5A87FC",
  strokeWidth: 6,
  trailWidth: 6,
  trailColor: "rgba(90, 135, 252, 0.6)",
  easing: "linear",
  text: {
    value: "0",
    className: "progress-text",
    style: {
      color: "#000",
      position: "absolute",
      top: "50%",
      left: "50%",
      padding: 0,
      margin: 0,
      transform: "translate(-50%,-50%)",
    },
  },
  step: (state, shape) => {
    shape.setText(Math.round(shape.value() * 11815));
  },
});
var circleBar4 = new Circle("#circular-4", {
  color: "#03CEA4",
  strokeWidth: 6,
  trailWidth: 6,
  trailColor: "rgba(3, 206, 164, 0.6)",
  easing: "linear",
  text: {
    value: "0",
    className: "progress-text",
    style: {
      color: "#000",
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

// Функция, которая
var visible = function (e) {
  var elementTop = window.pageYOffset + e.getBoundingClientRect().top, // Получаем координаты верхней части элементы
    windowBottom = window.pageYOffset + document.documentElement.clientHeight; // Получаем положение нижней части окна

  // Если положение нижней части окна больше чем верхняя координата элемента, то мы долистали до элемента
  // Так же проверим, не запущена ли уже анимация, а то выйдет казус в виде всё время запускающееся анимации
  if (elementTop < windowBottom && Number(e.dataset.animationState) === 0) {
    circleBar1.animate(0.98, {
      duration: 2000,
    });
    circleBar2.animate(0.75, {
      duration: 2000,
    });
    circleBar3.animate(0.8, {
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
  if (element1 && element2 && element3 && element4) {
    visible(element1);
    visible(element2);
    visible(element3);
    visible(element4);
  }
});

visible(element1);
visible(element2);
visible(element3);
visible(element4);
