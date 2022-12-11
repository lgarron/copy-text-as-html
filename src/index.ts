import { ClipboardItem, write } from "clipboard-polyfill";

window.addEventListener("load", function () {
  const status = document.querySelector(".status")!;
  document
    .querySelector("button")!
    .addEventListener("click", async function () {
      status.textContent = "…";

      const clipboardItem = new ClipboardItem({
        "text/html": document.querySelector("textarea")!.value,
      });
      write([clipboardItem]).then(
        function () {
          status.textContent = "✅";
        },
        function () {
          status.textContent = "❌";
        },
      );
    });
});
