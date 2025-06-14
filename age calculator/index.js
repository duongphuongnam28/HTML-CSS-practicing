let date = document.getElementById("date");
const button = document.getElementById('btn')
const calculator = document.querySelector('.calculator')
date.max = new Date().toISOString().split("T")[0];

function calculateAge() {
  let birth = new Date(date.value);
  let d1 = birth.getDate();
  let m1 = birth.getMonth() + 1;
  let y1 = birth.getFullYear();

  let today = new Date();
  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let d3, m3, y3;

  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = new Date(y1, m1, 0).getDate() + d2 - d1;
  }

  if (m3 < 0) {
    m3 = 11;
    y3--;
  }

  let result = document.createElement('p')
  if((Number.isNaN(y3) && Number.isNaN(m3) && Number,isNaN(d3)) || (y3 ===0 && m3 ===0 && d3 === 0) ) return
  result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old`
  calculator.appendChild(result)
}

button.addEventListener('click', calculateAge)

