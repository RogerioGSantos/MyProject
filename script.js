function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  // get the img tag
  const img = document.querySelector("#profile img");

  // replace the image
  if (html.classList.contains("light")) {
    // If you have light mode, add the light image
    img.setAttribute("src", "./assets/avatar-light.png");
  } else {
    // If you don't have light mode, keep the image normal
    img.setAttribute("src", "./assets/avatar.png");
  }
}
