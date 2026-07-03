const projects = [

{
name:"Green Acres Estate",
image:"images/project1.jpg",
description:"Affordable residential plots with ready title deeds."
},

{
name:"Sunset Villas",
image:"images/project2.jpg",
description:"Prime plots with excellent road access."
},

{
name:"Riverside Gardens",
image:"images/project3.jpg",
description:"Secure investment in a growing neighbourhood."
}

];

const grid=document.querySelector(".grid");

projects.forEach(project=>{

const card=document.createElement("div");

card.className="card";

card.innerHTML=`

<img src="${project.image}">

<h3>${project.name}</h3>

<p>${project.description}</p>

`;

grid.appendChild(card);

});
const input = document.getElementById("wishInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("wishList");

button.addEventListener("click", function () {

    if (input.value.trim() === "") {
        alert("Please enter a property.");
        return;
    }

    const li = document.createElement("li");
    li.textContent = input.value;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";

    removeButton.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(removeButton);
    list.appendChild(li);

    input.value = "";
});


const form = document.getElementById("contactForm");
const feedback = document.getElementById("feedback");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (username === "" || email === "" || message === "") {

        feedback.textContent = "Please fill in all the fields.";
        feedback.style.color = "red";
        return;
    }

    feedback.textContent =
        "Thank you, " + username + "! Your message has been received.";

    feedback.style.color = "green";

});