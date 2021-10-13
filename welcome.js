let heart = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
<path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
</svg>`;
let info = prompt("Lütfen İsminizi Girin");
let text = (document.querySelector(
  "h6"
).innerHTML = `SAYFAMA HOŞGELDİN <br><br>  -${heart} ${info.toUpperCase()} ${heart}- `);
let endtime = setInterval(showTime, 1000);

function showTime() {
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  let g = d.getDay();
 if (g == 1) {
    g = "PAZARTESİ";
  } else if (g == 2) {
    g = "SALI";
  } else if (g == 3) {
    g = "ÇARŞAMBA";
  } else if (g == 4) {
    g = "PERŞEMBE";
  } else if (g == 5) {
    g = "CUMA";
  } else if (g == 6) {
    g = "CUMARTESİ";
  } else if (g == 7) {
    g = "PAZAR";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

let time = (document.querySelector(
    "h3"
  ).innerHTML = `${h} : ${m} : ${s}  -  ${g}`);
}

showTime();
setInterval(showTime(), 1000);
