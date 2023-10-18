const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/bappa.jpg") {
    myImage.setAttribute("src", "images/ganapati.jpg");
  } else {
    myImage.setAttribute("src", "images/bappa.jpg");
  }
};
