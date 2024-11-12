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

// Pet Care Guide Section

function displayContent() {
  const choice = document.getElementById('petSpecies').value;
  const contentDiv = document.getElementById('petCareGuideInformation');
  contentDiv.innerHTML = '';

  if (choice === 'dog') {
      const image = document.createElement('img');
      image.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Chin_posing.jpg/1920px-Chin_posing.jpg";
      image.alt = "Japan Chin Dog";
      
      const text = document.createElement('h3');
      text.textContent = 'Three Care Tips for Dogs';

      const orderedList = document.createElement('ol');

      // Item 1 - Dog
      const listItem1 = document.createElement('li');
      listItem1.textContent = 'Feeding';
      const details1 = document.createElement('p');
      details1.textContent = 'Premium-quality dry food provides a well-balanced diet for adult dogs and may be mixed with water, broth or canned food. Your dog may enjoy cottage cheese, cooked egg or fruits and vegetables, but these additions should not total more than ten percent of his daily food intake.';
      details1.classList.add('details');

      // Item 2 - Dog
      const listItem2 = document.createElement('li');
      listItem2.textContent = 'Exercise';
      const details2 = document.createElement('p');
      details2.textContent = 'Dogs need exercise to burn calories, stimulate their minds, and stay healthy. Individual exercise needs vary based on breed or breed mix, sex, age and level of health. Exercise also tends to help dogs avoid boredom, which can lead to destructive behaviors. Supervised fun and games will satisfy many of your pet\'s instinctual urges to dig, herd, chew, retrieve and chase.';
      details2.classList.add('details');
     
      // Item 3 - Dog
      const listItem3 = document.createElement('li');
      listItem3.textContent = 'Grooming';
      const details3 = document.createElement('p');
      details3.textContent = 'Help keep your dog clean and reduce shedding with frequent brushing. Check for fleas and ticks daily during warm weather. Most dogs don\'t need to be bathed more than a few times a year. Before bathing, comb or cut out all mats from the coat. Carefully rinse all soap out of the coat, or the dirt will stick to soap residue. Please visit our Dog Grooming Tips page for more information.';
      details3.classList.add('details');

      orderedList.appendChild(listItem1);
      listItem1.appendChild(details1);
      orderedList.appendChild(listItem2);
      listItem2.appendChild(details2);
      orderedList.appendChild(listItem3);
      listItem3.appendChild(details3); 
      
      // Dog - Source
      const infoSource = document.createElement('a');
      infoSource.href = 'https://www.aspca.org/pet-care/dog-care/general-dog-care';
      infoSource.textContent = 'Care Tips Source'

      contentDiv.appendChild(image);
      contentDiv.appendChild(text);
      contentDiv.appendChild(orderedList);
      contentDiv.appendChild(infoSource);

  } else if (choice === 'cat') {
      const image = document.createElement('img');
      image.src = "https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg";
      image.alt = "Siamese Cat";
      
      const text = document.createElement('h3');
      text.textContent = 'Three Care Tips for Cats';
      
      const orderedList = document.createElement('ol');

      // Item 1 - Cat
      const listItem1 = document.createElement('li');
      listItem1.textContent = 'Feeding';
      const details1 = document.createElement('p');
      details1.textContent = 'purchasing high-quality, brand-name kitten or cat food. Your veterinarian will be able to assess your new cat or kitten and determine the best diet. Factors such as age, activity level and health make a difference in what and how much a cat should eat.';
      details1.classList.add('details');

      // Item 2 - Cat
      const listItem2 = document.createElement('li');
      listItem2.textContent = 'Grooming';
      const details2 = document.createElement('p');
      details2.textContent = 'Most cats stay relatively clean and rarely need a bath, but you should brush or comb your cat regularly. Frequent brushing helps keep your cat\'s coat clean, reduces the amount of shedding and cuts down on the incidence of hairballs. Please visit our Cat Grooming Tips page for more information.';
      details2.classList.add('details');
     
      // Item 3 - Cat
      const listItem3 = document.createElement('li');
      listItem3.textContent = 'Handling';
      const details3 = document.createElement('p');
      details3.textContent = 'To pick up your cat, place one hand behind the front legs and another under the hindquarters. Lift gently. Never pick up a cat by the scruff of the neck or by the front legs.';
      details3.classList.add('details');

      orderedList.appendChild(listItem1);
      listItem1.appendChild(details1);
      orderedList.appendChild(listItem2);
      listItem2.appendChild(details2);
      orderedList.appendChild(listItem3);
      listItem3.appendChild(details3); 

      // Cat - Source
      const infoSource = document.createElement('a');
      infoSource.href = 'https://www.aspca.org/pet-care/cat-care/general-cat-care';
      infoSource.textContent = 'Care Tips Source'

      contentDiv.appendChild(image);
      contentDiv.appendChild(text);
      contentDiv.appendChild(orderedList);
      contentDiv.appendChild(infoSource);
  } else if (choice === 'leopardGecko') {
      const image = document.createElement('img');
      image.src = "https://upload.wikimedia.org/wikipedia/commons/5/5b/Eublepharis_macularius1.jpg";
      image.alt = "Leopard Gecko";
      
      const text = document.createElement('h3');
      text.textContent = 'Three Care Tips for Leopard Geckos';
      
      const orderedList = document.createElement('ol');

      // Item 1 - Leopard Gecko
      const listItem1 = document.createElement('li');
      listItem1.textContent = 'Feeding';
      const details1 = document.createElement('p');
      details1.textContent = 'These scaly pets love their insects. Their favorite ones to eat are crickets, dubia roaches, hornworms, mealworms and superworms. They do not need to eat very often, only once a day to once every other day.';
      details1.classList.add('details');

      // Item 2 - Leopard Gecko
      const listItem2 = document.createElement('li');
      listItem2.textContent = 'Environment';
      const details2 = document.createElement('p');
      details2.textContent = 'You\'ll want to keep your leopard gecko in a well-ventilated terrarium with a screened lid. Start with a 20 gallon (76 L) tank (30” x 12” x 12” or 76 x 31 x 31 cm). If you’re getting multiple geckos, think about increasing your tank size.';
      details2.classList.add('details');
     
      // Item 3 - Leopard Gecko
      const listItem3 = document.createElement('li');
      listItem3.textContent = 'Temperature';
      const details3 = document.createElement('p');
      details3.textContent = 'Keep their habitat like the warm climate they come from. You should have a warm side and a cool side of the tank. To do this, put a heat light on one side of the habitat, and measure the temperature with a thermometer at each end.';
      details3.classList.add('details');

      orderedList.appendChild(listItem1);
      listItem1.appendChild(details1);
      orderedList.appendChild(listItem2);
      listItem2.appendChild(details2);
      orderedList.appendChild(listItem3);
      listItem3.appendChild(details3); 

      // Leopard Gecko - Source
      const infoSource = document.createElement('a');
      infoSource.href = 'https://www.petsmart.com/learning-center/reptile-care/leopard-gecko-care-guide-tips-for-caring-for-your-pet-leopard-gecko/A0022.html';
      infoSource.textContent = 'Care Tips Source'

      contentDiv.appendChild(image);
      contentDiv.appendChild(text);
      contentDiv.appendChild(orderedList);
      contentDiv.appendChild(infoSource);
  } else if (choice === 'crestedGecko') {
      const image = document.createElement('img');
      image.src = "https://upload.wikimedia.org/wikipedia/commons/d/d9/Crested_gecko_-_1.jpg";
      image.alt = "Crested Gecko";
      
      const text = document.createElement('h3');
      text.textContent = 'Three Care Tips for Crested Geckos';
      
      const orderedList = document.createElement('ol');

      // Item 1 - Crested Gecko
      const listItem1 = document.createElement('li');
      listItem1.textContent = 'Feeding';
      const details1 = document.createElement('p');
      details1.textContent = 'The easiest and most convenient method of feeding Crested Geckos is to use the powdered Crested Gecko Diet. These diets have been formulated to contain all of the essential fats, proteins, minerals, and vitamins that cresteds need. Crested geckos can be maintained on this diet alone however for optimum condition and health we recommend also feeding dusted and gut loaded insects once or twice per week.';
      details1.classList.add('details');

      // Item 2 - Crested Gecko
      const listItem2 = document.createElement('li');
      listItem2.textContent = 'Handling';
      const details2 = document.createElement('p');
      details2.textContent = 'Crested Geckos are among the most handleable of all lizards. They tolerate moderate to heavy handling even when they are relatively young, however, you should not handle geckos that are less than two weeks old or geckos that have recently been purchased or moved. There is a recommended one to two week acclimation period for newly acquired geckos which allows them to settle in and get used to their new surroundings. Once they are settled in, you can introduce your gecko to handling a little at a time. Five minutes of handling per day for the first few weeks is sufficient to allow your gecko to become used to you and to become less jumpy. Once they are comfortable with you, you can begin to handle them more. We recommend no more than 15 to 20 minutes of handling per day so as not to stress the gecko too much.';
      details2.classList.add('details');
     
      // Item 3 - Crested Gecko
      const listItem3 = document.createElement('li');
      listItem3.textContent = 'Tail Loss';
      const details3 = document.createElement('p');
      details3.textContent = 'Crested Geckos can drop their tails if handled improperly, however most cresteds are reluctant to drop their tails unless the tail is pinched or squeezed somehow. Most tail loss occurs from aggressive cage mates or from accidentally closing the tail in a screen top or door. Careful handling does not usually result in tail loss. Tail loss is a normal defense mechanism and is not a medical emergency. The gecko will recover quickly and does not require any special care. Crested geckos are one of the few geckos that will not regenerate a new tail.';
      details3.classList.add('details');

      orderedList.appendChild(listItem1);
      listItem1.appendChild(details1);
      orderedList.appendChild(listItem2);
      listItem2.appendChild(details2);
      orderedList.appendChild(listItem3);
      listItem3.appendChild(details3); 

      // Crested Gecko - Source
      const infoSource = document.createElement('a');
      infoSource.href = 'https://www.pangeareptile.com/blogs/blog/crested-gecko-care?srsltid=AfmBOopafzirMXTUcfoWlOHlinDGkVY0GG7ueLdz-d9GKjoVqogkt83W';
      infoSource.textContent = 'Care Tips Source'

      contentDiv.appendChild(image);
      contentDiv.appendChild(text);
      contentDiv.appendChild(orderedList);
      contentDiv.appendChild(infoSource);
  } else if (choice === 'bettaFish') {
      const image = document.createElement('img');
      image.src = "https://upload.wikimedia.org/wikipedia/commons/b/b8/Kampffisch_betta_splendenscele4.jpg";
      image.alt = "Betta Fish";
      
      const text = document.createElement('h3');
      text.textContent = 'Three Care Tips for Betta Fish';
      
      const orderedList = document.createElement('ol');

      // Item 1 - Betta Fish
      const listItem1 = document.createElement('li');
      listItem1.textContent = 'Feeding';
      const details1 = document.createElement('p');
      details1.textContent = 'Betta fish are prone to obesity and bloating, so only feed them once a day.. Overfeeding can also cloud and foul tank water (especially in smaller, unfiltered aquariums). Uneaten food should be removed to prevent excess nitrite and ammonia in the water. ';
      details1.classList.add('details');

      // Item 2 - Betta Fish
      const listItem2 = document.createElement('li');
      listItem2.textContent = 'Environment';
      const details2 = document.createElement('p');
      details2.textContent = 'Single betta fish should be kept in an aquarium with at least a 1-gallon capacity. Bettas need to be able to breathe from the surface of the water. Keep in mind, betta like to jump out of aquariums, so there must be space at the top of the aquarium below the lid for them to surface and breathe.';
      details2.classList.add('details');
     
      // Item 3 - Betta Fish
      const listItem3 = document.createElement('li');
      listItem3.textContent = 'Water Temperature';
      const details3 = document.createElement('p');
      details3.textContent = 'To keep a betta fish healthy, ensure the water temperature is maintained at 72–82 F.';
      details3.classList.add('details');

      orderedList.appendChild(listItem1);
      listItem1.appendChild(details1);
      orderedList.appendChild(listItem2);
      listItem2.appendChild(details2);
      orderedList.appendChild(listItem3);
      listItem3.appendChild(details3); 

      // Betta Fish - Source
      const infoSource = document.createElement('a');
      infoSource.href = 'https://www.petmd.com/fish/betta-fish-care-sheet';
      infoSource.textContent = 'Care Tips Source'

      contentDiv.appendChild(image);
      contentDiv.appendChild(text);
      contentDiv.appendChild(orderedList);
      contentDiv.appendChild(infoSource);
  }
}
