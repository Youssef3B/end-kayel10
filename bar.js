const htmlProgress = document.getElementById("html-progress");
const cssProgress = document.getElementById("css-progress");
const jsProgress = document.getElementById("js-progress");
const htmlPercent = document.getElementById("html-percent");
const cssPercent = document.getElementById("css-percent");
const jsPercent = document.getElementById("js-percent");

const htmlSkillLevel = 100;
const cssSkillLevel = 98;
const jsSkillLevel = 96;

// Set the skill levels as custom properties
htmlProgress.style.setProperty("--skill-level", `${htmlSkillLevel}%`);
cssProgress.style.setProperty("--skill-level", `${cssSkillLevel}%`);
jsProgress.style.setProperty("--skill-level", `${jsSkillLevel}%`);

// Trigger the animation by adding a class
htmlProgress.classList.add("animate-progress");
cssProgress.classList.add("animate-progress");
jsProgress.classList.add("animate-progress");

htmlPercent.textContent = `${htmlSkillLevel}%`;
cssPercent.textContent = `${cssSkillLevel}%`;
jsPercent.textContent = `${jsSkillLevel}%`;
