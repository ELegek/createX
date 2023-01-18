let circularProgress = document.querySelector(".circular-progress");
let progressValue = document.querySelector(".progress-value");
let progressStartValue = 0;
let progressEndValue = 98;
let speed = 10;

let progress = setInterval(() => {
  progressStartValue++;
  progressValue.textContent = `${progressStartValue}%`;
  circularProgress.style.background = `conic-gradient(#F89828 ${
    progressStartValue * 3.6
  }deg, rgba(248, 152, 40, 0.6) 0deg)`;

  if (progressStartValue == progressEndValue) {
    clearInterval(progress);
  }
}, speed);

let circularProgressYears = document.querySelector(".circular-progress__years");
let progressValueYears = document.querySelector(".progress-value__years");
let progressStartValueYears = 0;
let progressEndValueYears = 20;
let speedYears = 10;

let progressYears = setInterval(() => {
  progressStartValueYears++;
  progressValueYears.textContent = `${progressStartValueYears}`;
  circularProgressYears.style.background = `conic-gradient(#f52f6e ${
    progressStartValueYears * 3.6
  }deg, rgba(245, 47, 110, 0.6) 0deg)`;

  if (progressStartValueYears == progressEndValueYears) {
    clearInterval(progressYears);
  }
}, speedYears);

let circularProgressHours = document.querySelector(".circular-progress__hours");
let progressValueHours = document.querySelector(".progress-value__hours");
let progressStartValueHours = 0;
let progressEndValueHours = 9452;
let speedHours = 10;

let progressHours = setInterval(() => {
  progressStartValueHours += 94;
  progressValueHours.textContent = `${progressStartValueHours}`;
  circularProgressHours.style.background = `conic-gradient(#5a87fc ${
    progressStartValueHours * 0.036
  }deg, rgba(90, 135, 252, 0.6) 0deg)`;

  if (progressStartValueHours >= progressEndValueHours) {
    clearInterval(progressHours);
  }
}, speedHours);

let circularProgressProjects = document.querySelector(
  ".circular-progress__projects"
);
let progressValueProjects = document.querySelector(".progress-value__projects");
let progressStartValueProjects = 0;
let progressEndValueProjects = 100;
let speedProjects = 10;

let progressProjects = setInterval(() => {
  progressStartValueProjects++;
  progressValueProjects.textContent = `${progressStartValueProjects}%`;
  circularProgressProjects.style.background = `conic-gradient(#03cea4 ${
    progressStartValueProjects * 3.6
  }deg, rgba(3, 206, 164, 0.6) 0deg)`;

  if (progressStartValueProjects == progressEndValueProjects) {
    clearInterval(progressProjects);
  }
}, speedProjects);
