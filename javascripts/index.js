// node
const mainDiv = () => document.getElementById("main")
const choreExample = () => document.getElementById("chore-example")
const specialAid = () => document.getElementById("home-page")
const lookUpHoliday = ()=> document.getElementById("new-holiday")
const choreContainer = () => document.getElementById('chore container')


// EventListeners

// Example Chore 
function attachExChoreClickEvent(){
    choreExample().addEventListener("click", fetchChoreList)
}

// Add Chore 
function attachholidaysClickEvent(){
    lookUpHoliday().addEventListener('click', holidays)
}

// Special Aid 
function attachSpecialAidClickEvent(){
    specialAid().addEventListener("click", pageRefresh)
}



// EventHandlers
function renderNewHolidays(data){
    //  HTML for adding Chore Page
    resetMainDiv();
    resetcontainer();
   

    const h3 = document.createElement("h3");
    const ul = document.createElement("ul");
    const li = document.createElement("li");

    const chorelist = document.getElementById('add-holiday-form')
    const div = document.createElement('div')
    const h2 = document.createElement('h2')
    const h4 = document.createElement('h4')
    
   

    h3.innerText = "Get a holiday"
    h3.style.marginTop = "0"

    li.innerText = "This is were you will get ideas to take your child for a 'job well done' when they have completed their tasks."
     

    ul.appendChild(li)
    
    mainDiv().appendChild(h3)
    mainDiv().appendChild(ul)
   
    
    

}

function pageRefresh(){
    //  HTML for the main page
    resetMainDiv();
    resetcontainer();
    
   
    
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

function holidays(){
    fetch("https://date.nager.at/api/v2/publicholidays/2020/US")
        .then(resp => resp.json())
        .then(data =>{ 
            // renderNewHolidays(data.name);
            console.log('event', data)
        })
}





// helping functions

function resetMainDiv(){
    mainDiv().innerHTML = ""
}

function resetcontainer(){
    choreContainer().innerText = ""
}




// DOMContentLoaded


document.addEventListener("DOMContentLoaded", ()=>{
    attachExChoreClickEvent();
    attachSpecialAidClickEvent();
    attachholidaysClickEvent();
    pageRefresh();
})


