/* Script to be pasted into a new macOS shortcut */

const url = new URL(window.location.href);

if (url.origin.includes("wikipedia")) {
  const buttons = document.getElementsByClassName("mw-ui-icon-element");
  const spread = [...buttons];
  const maxWidthButton = spread.filter(
    (element) => element.tagName === "BUTTON"
  )[0];
  maxWidthButton.click();
  console.log("ayyy");
} else {
  console.log("this ain't wikipedia bro");
}

completion(url);
