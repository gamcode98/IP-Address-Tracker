const d = document;
const formHeight = d.getElementById("form");
const footerHeight = d.querySelector("footer");
export default function getHeight() {
  // formHeight = "--form-height: " + $("#target").outerHeight() + "px;";

  let h = formHeight.getBoundingClientRect();
  let f = footerHeight.getBoundingClientRect();
  // let h2 = formHeight.offsetHeight;
  // $("body").attr({ style: DivHeight });
  // console.log(h);
  // console.log(f);
}
