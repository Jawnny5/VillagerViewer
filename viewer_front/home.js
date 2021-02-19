console.log("I like ya cut g")
const backendURL = "http://localhost:5000/villagers"
let dreamies 
fetch(backendURL)
  .then(response => response.json())
  .then(villagers => handleVillagers(villagers))


function handleVillagers(villagers){
  dreamies = villagers
  villagers.forEach(villager => {
    //select dom nodes and create elements
    const $personalities = document.getElementById("#personalityList")
    const $hobbies = document.getElementById("#hobbyList")
    const $species = document.getElementById("#speciesList")
    const $dreamyForm = document.getElementById("#dreamyForm")
    const hobbyOptions = document.createElement("option")
    const speciesOptions = document.createElement("option")
    const personalityOptions = document.createElement("option")
    //set properties of created elements
    personalityOptions.innerText = villager.Personality
    speciesOptions.textContent = villager.Species
    hobbyOptions.textContent = villager.Hobby
    //create event listeners on menus and button
    $dreamyForm.addEventListener("submit", handleSubmit)

    $personalities.append(personalityOptions)
    $hobbies.append(hobbyOptions)
    $species.append(speciesOptions)
    
  })
  // handleData(data)
}

function handleSubmit(event){
  event.preventDefault()
  const dreamyFormData = new FormData(event.target)
  const species = dreamyFormData.get("species")
  const hobby = dreamyFormData.get("hobbies")
  const personality = dreamyFormData.get("personality")

  dreamies.filter(dreamy =>{
    if(
      dreamy.Species == species ||
      dreamy.Personality == personality ||
      dreamy.Hobby == hobby
    ){
      renderDreamy(dreamy)
    }
  })
}

function renderDreamy(dreamy){
  const $dreamySection = document.querySelector(".card-container")
  const cardFront = document.createElement('div')
  const cardBack = document.createElement('div')
  const dreamyImg = document.createElement('img')
  const dreamyName = document.createElement('h1')
  const dreamySpecies = document.createElement('p')
  const dreamyPersonality = document.createElement('p')
  const dreamyHobby = document.createElement('p')

  
  dreamyImg.src = `https://animalcrossing.fandom.com/wiki/${dreamy.Name}?file=${dreamy.Name}_NH.png`
  dreamyName.textContent = dreamy.Name
  dreamySpecies.textContent = dreamy.Species
  dreamyPersonality.textContent = dreamy.Personality
  dreamyHobby.textContent = dreamy.Hobby

  cardFront.append(dreamyImg)
  cardBack.append(dreamyName, dreamySpecies, dreamyPersonality, dreamyHobby)  
  $dreamySection.append(cardFront, cardBack)
}




