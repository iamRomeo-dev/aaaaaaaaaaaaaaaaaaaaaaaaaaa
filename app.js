 import data from "./data.js";

// fetch("https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeData.json", {mode: 'cors'})
// .then(response => response.json())
// .then(response => console.log(response))

const mimiKeel = document.getElementById("mimiKeel");
mimiKeel.innerHTML = data.photographers[0].name;

console.log("aaaaa")
 console.log(data.photographers[0].name)
console.log("bbbbb")


 
// idUser.textContent = user._id;
// li.appendChild(button);