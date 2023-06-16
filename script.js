/* Script to be pasted into a new macOS shortcut */

const url = new URL(window.location.href);

if (url.origin.includes("wikipedia")) {
  const maxWidthButton = document.getElementsByClassName(
    "vector-limited-width-toggle"
  )[0];
  maxWidthButton.click();
  console.log("ayyy");
} else {
  console.log("this ain't wikipedia bro");
}

completion(url);
