async function generate() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    document.getElementById("adviceID").innerText = "A D V I C E #" + data.slip.id;
    document.getElementById("adviceText").innerText = '"' + data.slip.advice + '"';
  }
  document.getElementById('dice').onclick = () => {
    generate();
  }