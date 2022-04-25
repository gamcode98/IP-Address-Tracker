const d = document;
const $dialog = d.querySelector("dialog");
const $closeDialog = d.getElementById("close");
const $contentDialog = d.querySelector(".content-dialog");
let $p = d.createElement("p");

export default function detectetAdBlocker() {
  let x = document.querySelector(".ad-zone");
  let x_height = x.offsetHeight;

  if (!x_height) {
    $p.textContent =
      "Please, to use this site you need disable your adblocker.";
    $contentDialog.appendChild($p);
    $dialog.showModal();
  }
  $closeDialog.addEventListener("click", () => {
    $dialog.close();
    $p.textContent = "";
  });
}
