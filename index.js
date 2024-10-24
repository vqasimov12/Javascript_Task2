const mainDiv = document.getElementById("mainDiv");

mainDiv.style.display = "flex";
mainDiv.style.alignItems = "center";
mainDiv.style.justifyContent = "center";
mainDiv.style.width = "100%";
mainDiv.style.height = "100vh";
mainDiv.style.flexDirection = "column";
mainDiv.style.gap = "60px";

const header = document.createElement("h1");
header.innerText = "Slideshow View";
mainDiv.appendChild(header);

const div1 = document.createElement("div");
div1.style.display = "flex";
div1.style.width = "70%";
div1.style.height = "fit-content";
div1.style.alignItems = "center";
div1.style.justifyContent = "space-between";

const images = [
  "./assets/img1.jpg",
  "./assets/img2.jpg",
  "./assets/img3.jpg",
  "./assets/img4.jpg",
  "./assets/img5.jpg",
  "./assets/img6.jpg",
  "./assets/img7.jpg",
  "./assets/img8.jpg",
  "./assets/img9.jpg"
];

const mainImage = document.createElement("img");
mainImage.src = images[0];
const btn1 = document.createElement("button");
const btn2 = document.createElement("button");

mainImage.style.height = "400px";
mainImage.style.boxShadow = "3px 3px 5px 2px lightgray";
mainImage.style.borderRadius = "40px";

btn1.style.height = "40px";
btn1.style.width = "40px";
btn1.style.borderRadius = "50%";
btn1.style.display = "flex";
btn1.style.alignItems = "center";
btn1.style.justifyContent = "center";
btn1.style.boxShadow = "3px 3px 5px 2px lightgray";
btn1.style.border = "none";
let iteration = 0;

btn2.style.height = "40px";
btn2.style.border = "none";
btn2.style.width = "40px";
btn2.style.borderRadius = "50%";
btn2.style.display = "flex";
btn2.style.alignItems = "center";
btn2.style.justifyContent = "center";
btn2.style.boxShadow = "3px 3px 5px 2px lightgray";

const i1 = document.createElement("i");
const i2 = document.createElement("i");
i1.classList.add("fa-solid");
i1.classList.add("fa-angle-left");
i2.classList.add("fa-solid");
i2.classList.add("fa-angle-right");
btn1.appendChild(i1);
btn2.appendChild(i2);

const div2 = document.createElement("div");
div2.style.display = "flex";
div2.style.justifyContent = "center";
div2.style.alignItems = "center";
div2.style.height = "fit-content";
div2.style.gap = "10px";
div2.style.border = "none";
div2.style.backgroundColor = "transparent";
div2.style.boxShadow = "3px 3px 5px 2px lightgray";

for (let i = 0; i < images.length; i++) {
  const smallImg = document.createElement("img");
  smallImg.src = images[i];
  smallImg.style.height = "80px";
  smallImg.style.borderRadius = "10px";
  smallImg.addEventListener("click", () => {
    iteration=i
    mainImage.src=images[i]
});

  div2.appendChild(smallImg);
}

btn1.addEventListener("click", () => {
  if (iteration === 0) iteration = images.length-1;
  else iteration--;
  mainImage.src = images[iteration];
});

btn2.addEventListener("click", () => {
  if (iteration === images.length-1) iteration = 0;
  else iteration++;
  mainImage.src = images[iteration];
});

div1.appendChild(btn1);
div1.appendChild(mainImage);
div1.appendChild(btn2);

mainDiv.appendChild(div1);
mainDiv.appendChild(div2);
