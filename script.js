const form = document.querySelector('form[name="royal-chai-signup"]');
const successMessage = document.querySelector('.success-message');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault(); // STOP page reload

    const formData = new FormData(form);

    fetch('/', {
      method: 'POST',
      body: formData,
    })
      .then(() => {
        form.style.display = 'none';
        successMessage.style.display = 'block';
      })
      .catch(() => {
        alert('👉 Once deployed on Netlify → everything works perfectly.');
      });
  });
}

const launchBox = document.getElementById("launchMessage");

const stages = [
  "☕ Brewing Begins…",
  "👑 Selecting Royal Ingredients…",
  "🔥 First Batch Almost Ready…",
  "✨ Launching Soon"
];

let stageIndex = 0;

launchBox.style.transition = "opacity 0.6s ease";

function advanceStage() {
  if (stageIndex >= stages.length - 1) return; // stop at final stage

  launchBox.style.opacity = "0";

  setTimeout(() => {
    stageIndex++;
    launchBox.textContent = stages[stageIndex];
    launchBox.style.opacity = "1";
  }, 600);
}

// Advance every 5 seconds, only until final
const stageInterval = setInterval(() => {
  advanceStage();

  if (stageIndex >= stages.length - 1) {
    clearInterval(stageInterval);
  }
}, 5000);
 

