// node
const mainDiv = () => document.getElementById("main")
const choreExample = () => document.getElementById("chore-example")
const specialAid = () => document.getElementById("home-page")
const addChore = ()=> document.getElementById("new-chore")
const choreContainer = () => document.getElementById('chore container')
const newChore = () => document.querySelector('#add-chore-form')
const choreformCon = () => document.querySelector(".new-chore-container")



// EventListeners

// Example Chore 
function attachExChoreClickEvent(){
    choreExample().addEventListener("click", fetchChoreList)
}
// Special Aid 
function attachSpecialAidClickEvent(){
    specialAid().addEventListener("click", pageRefresh)
}
// Add Chore 
function attachAddChoreClickEvent(){
    addChore().addEventListener('click', addingNewChore)
}




// EventHandlers
function renderAddChorePage(){
    //  HTML for adding Chore Page
    resetMainDiv();
    resetcontainer()

    const h3 = document.createElement("h3");
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    const div = document.createElement("div")
    

    h3.innerText = "Add A Chore"
    h3.style.marginTop = "0"

    li.innerText = "This is were you will make a chore list for your child. You must remember you will need a URL of a photo to help your child to visually see what they need to do!"
     

    ul.appendChild(li)
    
    mainDiv().appendChild(h3)
    mainDiv().appendChild(ul)
    div.append(newChore)
    
    

}

function pageRefresh(){
    //  HTML for the main page
    resetMainDiv();
    resetcontainer();
    resetmainpage();
     


    const h3 = document.createElement("h3")
    const p = document.createElement("p")

    h3.innerText = "Parental home page set up"
    p.innerText= "On the parental home page you have the option to create a list of age appropirate chores or you have access to a list of premade chores!"

    mainDiv().appendChild(h3)
    mainDiv().appendChild(p)

}

function renderChorePage(chores){
    //  HTML for Chore page
    resetMainDiv();

    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    const chorelist = document.getElementById('chore container')
    const div = document.createElement('div')
    const h4 = document.createElement('h4')
    const img = document.createElement('img')
    

    h3.innerText = "Chore Examples"
    h3.style.marginTop = "0"
    div.classList.add('card')
    p.innerText = 'Here are some chores you can use for examples of age appropriate chores.'
     h4.textContent = chores.name
     img.src = chores.image
     img.classList.add('Chore-picture')



    mainDiv().appendChild(h3)
    mainDiv().appendChild(p)
    div.append(h4, img)
    chorelist.append(div)
}

function fetchChoreList() {
    fetch("http://localhost:3000/chores") // returns promise
        .then(resp => resp.json()) // then runs the respons when it get a success then returns another promise
        .then(data => data.forEach(chores => renderChorePage(chores)))
        resetcontainer()
}

function addingNewChore() {
    
}






// helping functions

function resetMainDiv(){
    mainDiv().innerHTML = ""
}

function resetcontainer(){
    choreContainer().innerText = ""
}

function resetmainpage(){
    newChore().innerText= ""
}



// DOMContentLoaded
document.addEventListener("DOMContentLoaded", ()=>{
    pageRefresh();
    attachExChoreClickEvent();
    attachSpecialAidClickEvent();
    attachAddChoreClickEvent();
});