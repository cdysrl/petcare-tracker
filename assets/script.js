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
    const clone = document.getElementById('myPetClone').cloneNode(true);
    switch(obj.type) {
        case 'leopard gecko':
            clone.children[0].src = "./assets/images/leo.png";
            break;
        case 'crested gecko':
            clone.children[0].src = "./assets/images/crested.png";
            break;
        case 'cat':
            clone.children[0].src = "./assets/images/cat.png";
            break;
        case 'dog':
            clone.children[0].src = "./assets/images/dog.png";
            break;
        case 'beta fish':
            clone.children[0].src = "./assets/images/beta.png";
            break;

    }//decides which img should go here
    clone.children[1].textContent = obj.name;
    clone.dataset.schedule = obj.data;
    clone.id = obj.name;
    document.getElementById('myPets').appendChild(clone);
    
  }
  function newButton() {
    const clone = document.getElementById('newButton').cloneNode(true);
    clone.id = 'newButton1';
    document.getElementById('myPets').appendChild(clone);
  }
  function startForm(event) {
    const self = document.getElementById("newButton1");
    const clone = document.getElementById("newPetForm").cloneNode(true);
    clone.id = 'newPetForm1';
    clone.children[0].children[1].id = 'name1';
    clone.children[0].children[3].id = 'type1';
    document.getElementById('myPets').replaceChild(clone, self);
  }
  function petFormSubmit(event) {
    event.preventDefault();
    const clone = document.getElementById('newPetForm1');
    const name = document.getElementById('name1');
    const type = document.getElementById('type1');
    const pet = {
      name: name.value,
      type: type.value,
      data: ''
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