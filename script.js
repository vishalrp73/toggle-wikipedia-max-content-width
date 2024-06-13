/* Script to be pasted into a new macOS shortcut */

const url = new URL(window.location.href);

if (url.origin.includes("wikipedia")) {
  const smallTextBtn = document.getElementById("skin-client-pref-vector-feature-custom-font-size-value-0");
  const wideBtn = document.getElementById("skin-client-pref-vector-feature-limited-width-value-0");
  const appearanceBtn = document.getElementsByClassName("vector-pinnable-header-toggle-button vector-pinnable-header-unpin-button")[2];
  smallTextBtn.click();
  wideBtn.click();
  appearanceBtn.click();
  console.log("ayyy");
} else {
  console.log("this ain't wikipedia bro");
}

completion(url);
