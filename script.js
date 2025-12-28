let water = Number(localStorage.getItem("water")) || 0;
const goal = 2000;

const status = document.getElementById("status");
const bar = document.getElementById("bar");

function update(){
status.textContent = `Бүгін ішілген су: ${water} мл`;
bar.style.width = Math.min(water/goal*100,100) + "%";
localStorage.setItem("water", water);
}

function drink(){
water += 250;
update();
}

update();
