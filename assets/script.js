//These functions control which tab of the website your on
function switchMyPets() {
    document.getElementById("myPets").hidden = false;
    document.getElementById("toDo").hidden = true;
    document.getElementById("calender").hidden = true;
    document.getElementById("petCareGuide").hidden = true;
}

function switchToDo() {
    document.getElementById("myPets").hidden = true;
    document.getElementById("toDo").hidden = false;
    document.getElementById("calender").hidden = true;
    document.getElementById("petCareGuide").hidden = true;
}

function switchCalender() {
    document.getElementById("myPets").hidden = true;
    document.getElementById("toDo").hidden = true;
    document.getElementById("calender").hidden = false;
    document.getElementById("petCareGuide").hidden = true;
}

function switchCarePetGuide() {
    document.getElementById("myPets").hidden = true;
    document.getElementById("toDo").hidden = true;
    document.getElementById("calender").hidden = true;
    document.getElementById("petCareGuide").hidden = false;
}
//this if statement makes sure if this is your first time using this site its localStorage for lengthPT is set to zero
if (localStorage.getItem('lengthPT') === null) {
 localStorage.setItem('lengthPT','0');
}
//this function creates an array of objecsts being stored for myPets page from localStorage
function readStorage() {
    let len = Number(localStorage.getItem('lengthPT'));
    let list = [];
    for (let i=1; i<=len; i++) {
      if (null === localStorage.getItem((i + 'PT'))) {continue;}
      list.push(JSON.parse(localStorage.getItem((i + 'PT'))));
    }
  return list;
  }
  //this function stores an object to localStorage for the myPet page.
  function storeStorage(obj) {
    len = localStorage.getItem('lengthPT');
    len++;
    localStorage.setItem('lengthPT', len);
    localStorage.setItem((len + 'PT'), JSON.stringify(obj));
  }
  //This function adds a pet to my pets page based on the input object
  function petAdd(obj) {
    const clone = document.getElementById('myPetClone').cloneNode(true);
    switch(obj.type) {
        case 'leopard gecko':
            clone.children[0].children[1].src = "./assets/images/leo.jpg";
            break;
        case 'crested gecko':
            clone.children[0].children[1].src = "./assets/images/crested.jpg";
            break;
        case 'cat':
            clone.children[0].children[1].src = "./assets/images/cat.jpg";
            break;
        case 'dog':
            clone.children[0].children[1].src = "./assets/images/dog.jpg";
            break;
        case 'beta fish':
            clone.children[0].children[1].src = "./assets/images/beta.jpg";
            break;

    }//decides which img should go here
    clone.children[0].children[0].textContent = obj.name;
    clone.dataset.type = obj.type;
    clone.dataset.index = obj.data;
    clone.id = obj.name;
    document.getElementById('myPets').appendChild(clone);
    
  }
  //The newButton function adds an element to the end of the my pets page that when clicked on opens a form to add a new pet
  function newButton() {
    const clone = document.getElementById('newButton').cloneNode(true);
    clone.id = 'newButton1';
    document.getElementById('myPets').appendChild(clone);
  }
  //The startForm function is the activated function when new+ button is clicked that replaces it with the form
  function startForm(event) {
    const self = document.getElementById("newButton1");
    const clone = document.getElementById("newPetForm").cloneNode(true);
    clone.id = 'newPetForm1';
    clone.children[0].children[1].id = 'name1';
    clone.children[0].children[3].id = 'type1';
    document.getElementById('myPets').replaceChild(clone, self);
  }
  //This function is fired by the submit button on the new pet form that turns the form into an element with the new pet info and then calls the newbutton function to create a new+ button
  function petFormSubmit(event) {
    event.preventDefault();
    const clone = document.getElementById('newPetForm1');
    const name = document.getElementById('name1');
    const type = document.getElementById('type1');
    const pet = {
      name: name.value,
      type: type.value,
      data: (Number(localStorage.getItem('lengthPT')) + 1)
    }
    storeStorage(pet);
    petAdd(pet);
    newButton();
    document.getElementById('myPets').removeChild(clone);
    
  }

//This is code that runs in order to create the pet list when it first opens
const pets = readStorage();
for (const pet of pets) {
  petAdd(pet);
}
newButton();

//this function is the one that deletes pets from mypets list
function deletePet(event) {
  const self = event.target;
  const clone = self.parentElement.parentElement.parentElement;
  localStorage.removeItem((clone.dataset.index) + 'PT');
  document.getElementById('myPets').removeChild(clone);
}

//this function is for editing your pets on my pet page
function editPet(event) {
  const self = event.target;
  const clone = self.parentElement.parentElement.parentElement;
  clone.children[1].children[0].children[1].value = clone.id;
  clone.children[1].children[0].children[3].value = clone.dataset.type;
  clone.children[0].hidden = true;
  clone.children[1].hidden = false;
}

//this function resubmit the pet form for editing your pets on the my pet page
function resubmit(event) {
  event.preventDefault();
  const self = event.target;
  const clone = self.parentElement.parentElement;
  clone.children[0].children[0].textContent =  clone.children[1].children[0].children[1].value;
  clone.dataset.type =   clone.children[1].children[0].children[3].value;
  clone.id = clone.children[1].children[0].children[1].value;
  const obj = JSON.parse(localStorage.getItem((clone.dataset.index) + 'PT'));
  obj.name = clone.id;
  obj.type = clone.dataset.type;
  switch(obj.type) {
    case 'leopard gecko':
        clone.children[0].children[1].src = "./assets/images/leo.jpg";
        break;
    case 'crested gecko':
        clone.children[0].children[1].src = "./assets/images/crested.jpg";
        break;
    case 'cat':
        clone.children[0].children[1].src = "./assets/images/cat.jpg";
        break;
    case 'dog':
        clone.children[0].children[1].src = "./assets/images/dog.jpg";
        break;
    case 'beta fish':
        clone.children[0].children[1].src = "./assets/images/beta.jpg";
        break;

  }//decides which img should go here
  localStorage.setItem((clone.dataset.index + 'PT'), JSON.stringify(obj));
  clone.children[0].hidden = false;
  clone.children[1].hidden = true;
}