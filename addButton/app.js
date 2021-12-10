// XMLHttpRequest (XHR) objects are used to interact with servers. You can retrieve data from a URL without having to do a full page refresh.
const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  getData();
});

function getData() {
  const xhr = new XMLHttpRequest();
  console.log(xhr);

  // The XMLHttpRequest method open() initializes a newly-created request, or re-initializes an existing one.
  xhr.open("GET", "./api/sample.txt");
  // onreadystatechange - An event handler that is called whenever the readyState attribute changes.
  xhr.onreadystatechange = function () {
    // The XMLHttpRequest.readyState property returns the state an XMLHttpRequest client is in
    // The read-only XMLHttpRequest.status property returns the numerical HTTP status code of the XMLHttpRequest's response.
    if (xhr.readyState === 4 && xhr.status === 200) {
      const text = document.createElement("p");
      text.textContent = xhr.responseText;
      document.body.appendChild(text);
    } else {
      console.log({
        status: xhr.status,
        statusText: xhr.statusText,
        state: xhr.readyState,
      });
    }
  };
  // The XMLHttpRequest method send() sends the request to the server.
  xhr.send();
}
