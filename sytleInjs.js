const sections = document.querySelectorAll("section");
//console.log(sections);

for (const section of sections) {
    //console.log(section);
    section.style.border = "2px solid red";
    section.style.marginTop = "20px";
    section.ul.style.textDecobation = "none"
}


// 1.============== Add (Element তৈরি ও যোগ করা)
// DOM-এ নতুন element যোগ করার জন্য ব্যবহার করা হয়:

// document.createElement("tagName") → নতুন element বানানো

// element.appendChild(newElement) → parent এ child যোগ করা

// element.append(newElement) → parent এ যোগ করা (text ও element দুটোই নিতে পারে)

// element.prepend(newElement) → parent এর শুরুতে যোগ করা


function addFriend() {
  const newLi = document.createElement("li");   // নতুন li বানালাম
  newLi.innerText = "Charlie";                  // ভিতরে টেক্সট দিলাম

  const list = document.getElementById("friend-list");
  list.appendChild(newLi);                      // ul এ যোগ করলাম
}


// 2.================ Remove (Element মুছে ফেলা)
// Element remove করার জন্য:

// element.remove() → সরাসরি element মুছে ফেলা

// parent.removeChild(child) → parent থেকে নির্দিষ্ট child মুছে ফেলা

function removePara() {
  const para = document.getElementById("para");
  para.remove(); // paragraph মুছে যাবে
}
