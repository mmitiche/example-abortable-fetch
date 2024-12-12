const request = new Request("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: new Headers({
    "Content-Type": "application/json",
  }),
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
});

const url = request.url;
const options = {
  method: request.method,
  headers: request.headers,
  body: request.body,
  duplex: "half",
};

// fetch(url, options)
fetch(request)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => console.log("Response Data:", data))
  .catch((error) => console.error("Error:", error));
