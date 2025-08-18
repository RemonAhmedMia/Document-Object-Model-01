// append() কি?
// DOM এ নতুন content (element বা text) parent element এর শেষে যোগ করার জন্য ব্যবহার হয়।
// এটা একাধিক node বা text একসাথে append করতে পারে।
// appendChild() এর থেকে flexible, কারণ শুধু element নয়, text ও append করা যায়।

const plasesList = document.getElementById("places-list");
const li = document.createElement("li");
li.innerText = "Pahartoli"
plasesList.appendChild(li)


const mainContainer = document.getElementById("main-container");
const secttion = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "Hello Creative Members";
secttion.appendChild(h1);

const ul = document.createElement("ul");
const li1 = document.createElement("li");
 li1.innerText = "Al-Amin";
 ul.appendChild(li1);

 const li2 = document.createElement("li");
 li2.innerText = "Rimon";
 ul.appendChild(li2);

 const li3 = document.createElement("li");
 li3.innerText = "Shakib";
 ul.appendChild(li3);

 secttion.appendChild(ul);

 mainContainer.appendChild(secttion);


//  Set InnerHTML directly================

const sectionDress = document.createElement("section");
sectionDress.innerHTML = `
<h1> My Dress Collection </h1>
<ul>
<li>shirt</li>
<li>Pant</li>
<li>Gen-z</li>
<li>Trawser</li>
</ul>
`

mainContainer.appendChild(sectionDress);