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
//This code is the functions for pulling from your local storage and making a list of your pets
if (localStorage.getItem('lengthPT') === null) {
 localStorage.setItem('lengthPT','0');
}
function readStorage() {
    let len = Number(localStorage.getItem('lengthPT'));
    let list = [];
    for (let i=1; i<=len; i++) {
      list.push(JSON.parse(localStorage.getItem(i)));
    }
  return list;
  }
  function storeStorage(obj) {
    len = localStorage.getItem('lengthPT');
    len++;
    localStorage.setItem('lengthPT', len);
    localStorage.setItem(len, JSON.stringify(obj));
  }
  function petAdd(obj) {
    const clone = document.body.section.getElementById('myPetClone').cloneNode(true);
    switch(obj.type) {
        case 'leopard gecko':
            clone.img.src = "";
            break;
    }//decides which img should go here
    clone.h1.textContent = obj.name;
    clone.dataset.schedule = obj.data;
    document.getElementById('myPets').appendChild(clone);
    
  }
  function newButton() {
    const clone = document.getElementById('newButton').cloneNode(true);
    document.getElementById('myPets').appendChild(clone);
  }
  function startForm(event) {
    const self = event.target;
    const clone = document.body.section.getElementById('newPetForm').cloneNode(true);
    document.getElementById('myPets').replaceChild(clone, self);
  }
  function petFormSubmit(event) {
    event.preventDefault();
    const self = document.getElementById('myPets').getElementById('newPetForm');
    const form = event.target;
    const name = form.getElementById('name');
    const type = form.getElementById('type');
    const pet = {
      name: name.value,
      type: type.value,
      data: ''
    }
    storeStorage(pet);
    petAdd(pet);
    newButton();
    document.getElementById('myPets').removeChild(self);
    
  }

//This is code that runs in order to create the pet list when it first opens
const pets = readStorage();
for (pet of pets) {
  petAdd(pet);
}
newButton();