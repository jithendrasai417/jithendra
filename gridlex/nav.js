// const finalValue = 100;
// const duration = 30000; // 3 seconds
// const startValue = 0;
// const step = finalValue / (duration / 1000 * 60); // Calculate step based on desired duration and final value
// let currentValue = startValue;
// const counterElement = document.getElementById("counter");
// const counterElement1 = document.getElementById("counter1");

// function animateCounter() {
// 	currentValue += step;
// 	if (currentValue >= finalValue) {
// 		currentValue = finalValue;
// 	}
// 	counterElement.innerHTML = Math.floor(currentValue);
// 	if (currentValue < finalValue) {
// 		requestAnimationFrame(animateCounter);
// 	}
// }

// animateCounter();

// function animateCounters() {
// 	currentValue += step;
// 	if (currentValue >= finalValue) {
// 		currentValue = finalValue;
// 	}
// 	counterElement1.innerHTML = Math.floor(currentValue);
// 	if (currentValue < finalValue) {
// 		requestAnimationFrame(animateCounters);
// 	}
// }

// animateCounters();

let count = 1;
let count1 = 1;
const counter = document.getElementById("counter");
const counter1 = document.getElementById("counter1");

setInterval(() => {
  counter.innerHTML = count;
  counter1.innerHTML = count1;
  count++;
  count1++

  if (count > 100 && count1>100) {
    count = 1;
    count1=1;
  }
}, 300);

function toggleCollapse() {
  var detailsElement = document.getElementById('details');
  detailsElement.classList.toggle('collapsed');
}

function submitForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  
  document.getElementById('submittedName').textContent = name;
  document.getElementById('submittedEmail').textContent = email;
  
  document.getElementById('popup').classList.remove('hidden');
}

function closePopup() {
  document.getElementById('popup').classList.add('hidden');
}

window.addEventListener('scroll', function() {
  var getInTouchButton = document.getElementById('getInTouchButton');
  var detailsElement = document.getElementById('details');
  
  if (window.pageYOffset > 0) {
    getInTouchButton.classList.add('sticky');
    detailsElement.classList.remove('collapsed');
  } else {
    getInTouchButton.classList.remove('sticky');
    if (!detailsElement.classList.contains('collapsed')) {
      detailsElement.classList.add('collapsed');
    }
  }
});


