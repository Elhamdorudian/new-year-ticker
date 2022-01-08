const eyd = document.querySelector(".eyd");

const future = new Date("March 21 2022 00:00:00");
let F = () => {
  now3 = new Date();
  let norooz = future.getTime() - now3.getTime();
  let ms = norooz / 1000;
  let xs = Math.floor(norooz / 1000);
  let s = xs % 60;
  let sS = s.toString();
  if (s < 10) {
    sS = `0${sS}`;
  }
  let xm = Math.floor(xs / 60);
  let m = xm % 60;
  let mS = m.toString();
  if (m < 10) {
    mS = `0${mS}`;
  }
  let xh = Math.floor(xm / 60);
  let h = xh % 24;
  let hS = h.toString();
  if (h < 10) {
    hS = `0${hS}`;
  }
  let d = Math.floor(xh / 24);

  const html = `
        <span>${d}D</span> : 
        <span>${hS}H</span> : 
        <span>${mS}M</span> : 
        <span>${sS}S</span>

        `;
  eyd.innerHTML = html;
};

setInterval(F, 1000);
