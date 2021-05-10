import data from "./data.js";
import { getUsers } from "./API.js";

//===========================Example for getting the data===========================
// const mimiKeel = document.getElementById("mimiKeel");
// mimiKeel.innerHTML = data.photographers[0].name;

// console.log("aaaaa");
// console.log(data.photographers[0].name);
// console.log("bbbbb");
//===========================EO Example for getting the data===========================

//===========================Getting datas with fetch===========================
// export async function getDatas() {
//     const users = await getUsers();
//    console.log(users)
//     const photographerName = document.getElementsByClassName("photographerName");
//   for (let x=0 ; x < photographerName.length ; x++ ) {
//     photographerName[x].innerHTML = users.photographers[x].name;
//  }
//   }
//   getDatas()
//===========================EO Getting datas with fetch===========================

const photographerName = document.getElementsByClassName("photographerName");
for (let x = 0; x < photographerName.length; x++) {
  photographerName[x].innerHTML = data.photographers[x].name;
}
