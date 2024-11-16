const shortBtn = document.getElementById("shortBtn"),
  reloadBtn = document.getElementById("reloadBtn");

shortBtn.addEventListener("click", shortenUrl);

function shortenUrl() {
  let originalUrl = document.getElementById("originalUrl").value,
  apiUrl =
    "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(originalUrl);
  shortenUrlTextarea = document.getElementById("shortenedUrl");

  fetch(apiUrl).then(response => response.text()).then(data => {
    shortenUrlTextarea.value = data;
    })
    .catch((error) => {
        shortenUrlTextarea.value = "Error : No se puede identificar la url";
    });
}

reloadBtn.addEventListener("click", () => {
  location.reload();
});
