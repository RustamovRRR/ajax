const urlAPI2 = "https://api.chucknorris.io/jokes/random";

const btn2 = document.querySelector(".btn");
const content2 = document.querySelector(".content");

btn2.addEventListener("click", () => {
  getData(urlAPI2);
});

function getData(url) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status === 200) {
      const { value: joke } = JSON.parse(xhr.responseText);
      content2.textContent = joke;
    }
  };
}
