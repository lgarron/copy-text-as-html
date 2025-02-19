import { ClipboardItem, write } from "clipboard-polyfill";

const textarea = document.querySelector("textarea") as HTMLTextAreaElement;

function mustExist<T>(v: T | null): T {
  if (v === null) {
    throw new Error("Missing value");
  }
  return v;
}

const status = mustExist(document.querySelector(".status"));
mustExist(document.querySelector("button")).addEventListener(
  "click",
  async () => {
    status.textContent = "…";

    const clipboardItem = new ClipboardItem({
      "text/html": textarea.value,
    });
    write([clipboardItem]).then(
      () => {
        textarea.animate([{ opacity: 0.25 }, { opacity: 1 }], {
          duration: 250,
          easing: "ease-out",
        });
        status.textContent = "✅";
      },
      () => {
        status.textContent = "❌";
      },
    );
  },
);

textarea.addEventListener("input", () => {
  textarea.style.height = "2em";
  textarea.style.height = `${textarea.scrollHeight}px`;
});
