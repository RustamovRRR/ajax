const xhr = new XMLHttpRequest();
console.log(xhr);

xhr.open("GET", "./api/sample.txt");
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const text = document.createElement("p");
    text.textContent = xhr.responseText;
    document.body.appendChild(text);
  } else {
    console.log({
      status: xhr.status,
      statusText: xhr.statusText,
    });
  }
};
xhr.send();
