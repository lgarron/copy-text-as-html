import { ClipboardItem, write } from "clipboard-polyfill";

const textarea = document.querySelector("textarea") as HTMLTextAreaElement;

const status = document.querySelector(".status")!;
document.querySelector("button")!.addEventListener("click", async function () {
  status.textContent = "…";

  const clipboardItem = new ClipboardItem({
    "text/html": textarea.value,
  });
  write([clipboardItem]).then(
    function () {
      textarea.animate([{ opacity: 0.25 }, { opacity: 1 }], {
        duration: 250,
        easing: "ease-out",
      });
      status.textContent = "✅";
    },
    function () {
      status.textContent = "❌";
    },
  );
});

textarea.addEventListener("input", () => {
  textarea.style.height = "2em";
  textarea.style.height = `${textarea.scrollHeight}px`;
});
