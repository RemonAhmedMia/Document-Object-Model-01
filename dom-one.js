const allHeading = document.getElementsByTagName("h1");
 for(const h1 of allHeading) {
    console.log(h1.innerText);
 }

 const allListItems = document.getElementsByTagName("li");
 for(const li of allListItems) {
    // console.log(li); evhabe dile li soho dhekabe;
    console.log(li.innerText); // li er vitor er text gula show korbe shodu
 }

//  getElementbyId============

const rimo =document.getElementById("tittle").innerText = "Hello World"; //  to change inner text
console.log(rimo);


// document.getElementsByClassName()
// এটা দিয়ে তুমি একটা নির্দিষ্ট class যুক্ত সব element ধরতে পারো।

// Multiple element ধরা সম্ভব।

// এটা HTMLCollection রিটার্ন করে (Array-এর মতো, কিন্তু সরাসরি Array না)।

const clasess = document.getElementsByClassName("importent-friends");
//console.log(clasess);
for(const friend of clasess){
    console.log(friend.innerText);
    
}
