// JSON JavaScript Object Notation
const btn = document.querySelector(".btn");
const url = "./api/people.json";
btn.addEventListener("click", () => {
  getData(url);
});

function getData(url) {
  const xhr = new XMLHttpRequest();
  console.log(xhr);

  xhr.open("GET", url);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // parse
      const data = JSON.parse(xhr.responseText);
      const displayData = data
        .map((item) => `<p>${item.id}. ${item.name}</p>`)
        .join("");
      const element = document.createElement("div");
      element.innerHTML = displayData;
      document.body.appendChild(element);
    } else {
      console.log({
        status: xhr.status,
        statusText: xhr.statusText,
        state: xhr.readyState,
      });
    }
  };
  xhr.send();
}
