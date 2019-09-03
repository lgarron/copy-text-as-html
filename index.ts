import { write, DT } from "clipboard-polyfill"

window.addEventListener("load", function () {
  const status = document.querySelector(".status");
  document.querySelector("button").addEventListener("click", async function () {
    status.textContent = "…";
    const dt = new DT();
    dt.setData("text/html", document.querySelector("textarea").value);
    write(dt).then(function () {
      status.textContent = "✅";
    }, function () {
      status.textContent = "❌";
    })
  });
})
