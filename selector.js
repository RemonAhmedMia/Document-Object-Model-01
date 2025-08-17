// 1. document.querySelector()
// এটা সর্বপ্রথম match হওয়া element রিটার্ন করে।

// তুমি CSS selector ব্যবহার করে element ধরতে পারো।

// প্রথম .friend element ধরবে
const firstFriend = document.querySelector(".friend");
console.log(firstFriend.innerText); // Alice

// id ধরে রাখা
const title = document.querySelector("#main-title");
console.log(title.innerText); // Hello DOM


// 2. document.querySelectorAll()
// এটা সব matching element রিটার্ন করে NodeList আকারে।

// CSS selectors ব্যবহার করা যায়।

const allFriends = document.querySelectorAll(".friend");

allFriends.forEach(friend => {
  console.log(friend.innerText);
  friend.style.color = "green"; // সব element green হবে
});



const nestedFriend = document.querySelector("#container .friend");
console.log(nestedFriend.innerText); // Alice


// Tip:

// যদি শুধু একটি element দরকার → querySelector()
// যদি সব matching element দরকার → querySelectorAll()


// Style Attribute=============

const headingOne = document.getElementById("heading").style.backgroundColor = "red";
heading.style.color = "white";
heading.style.padding = "20px";
heading.style.textAlign = "center"
console.log(headingOne);
