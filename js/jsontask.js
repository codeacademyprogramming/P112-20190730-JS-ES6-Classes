"use strict";


// const userJson = `{"results":[{"gender":"female","name":{"title":"miss","first":"ramona","last":"shaw"},"location":{"street":"3226 samaritan dr","city":"richardson","state":"indiana","postcode":48797,"coordinates":{"latitude":"88.5710","longitude":"25.2390"},"timezone":{"offset":"+6:00","description":"Almaty, Dhaka, Colombo"}},"email":"ramona.shaw@example.com","login":{"uuid":"cd3c5bb4-6960-43c7-afdd-5176298b4109","username":"tinygoose171","password":"smokes","salt":"KzaoXDN7","md5":"49e16ac8b92a6962a5cf3d717762fb84","sha1":"9fb6c301f3498376ff0e5067e02bd47317e60937","sha256":"99d9e7cb68558ba3d80222d0976e80515dd7a54a5739fa512df858c98cfcb05c"},"dob":{"date":"1970-08-15T17:31:12Z","age":48},"registered":{"date":"2008-12-27T17:34:05Z","age":10},"phone":"(557)-210-6668","cell":"(912)-655-1375","id":{"name":"SSN","value":"790-62-4877"},"picture":{"large":"https://randomuser.me/api/portraits/women/13.jpg","medium":"https://randomuser.me/api/portraits/med/women/13.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/13.jpg"},"nat":"US"}],"info":{"seed":"9defe4a12e1a59ed","results":1,"page":1,"version":"1.2"}}`;

// const userObj = JSON.parse(userJson);

// const card = document.querySelector(".card");

// card.firstElementChild.src = userObj.results[0].picture.large;

// card.lastElementChild.children[0].innerHTML = userObj.results[0].name.first + " " + userObj.results[0].name.last;
// card.lastElementChild.children[1].innerHTML = userObj.results[0].location.city.toUpperCase();

const studentArray = [];

const inputElements = document.querySelectorAll(".student-form input");
const ulList = document.querySelector(".student-list ul");

function Student(ad, soyad, poctunvani){
    this.email = poctunvani;
    this.name = ad;
    this.surname = soyad;
}

document.querySelector(".student-form button").addEventListener("click", addNewStudent);

function addNewStudent(){
    let newStudentObject = new Student(inputElements[0].value, inputElements[1].value, inputElements[2].value );
    studentArray.push(newStudentObject);

    showStudents();
}


function showStudents(){
    ulList.innerHTML = "";
    for(let i=0; i < studentArray.length; i++){
        let liEl = document.createElement("li");
        liEl.addEventListener("dblclick", function(){
            alert(studentArray[i].name);
            studentArray.splice(i, 1);
            showStudents();
        });
        liEl.innerText = studentArray[i].name + " "+  studentArray[i].surname + " " + studentArray[i].email;
        ulList.appendChild(liEl);
    }
}