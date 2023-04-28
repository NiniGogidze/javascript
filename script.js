const h1 = document.createElement("h1");
h1.innerText = "blog title";
document.body.appendChild(h1).style.textAlign = "center";

const img = document.createElement("img");
img.src = "https://cloudfront-us-east-1.images.arcpublishing.com/gray/5ND7473EKFEWBJSL76K54UHX34.jpeg";
document.body.appendChild(img).style.width = "300px";
document.body.appendChild(img).style.height = "400px";
document.body.appendChild(img).style.paddingLeft = " 590px";

const para = document.createElement("p");
para.innerText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores deserunt, quasi optio illo doloremque maiores voluptatibus minus cumque minima facilis quisquam sapiente odio dicta modi animi soluta cum tenetur rem.";
document.body.appendChild(para).style.textAlign = "left";
document.body.appendChild(para).style.height = "100px";
document.body.appendChild(para).style.width = "400px";
document.body.appendChild(para).style.paddingLeft = "550px";

let btn = document.createElement("button");
btn.innerHTML = "read more";
document.body.appendChild(btn).style.position = "absolute";
document.body.appendChild(btn).style.left = "50%";
document.body.appendChild(btn).style.transform = "translateX(-50%)";

