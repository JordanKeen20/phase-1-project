// node
const mainDiv = () => document.getElementById("main");
const mainDiv2 = () => document.getElementById("main2")
const choreExample = () => document.getElementById("chore-example");
const specialAid = () => document.getElementById("home-page");
const lookUpHoliday = ()=> document.getElementById("new-holiday");
const choreContainer = () => document.getElementById('chore container');
const holidayreset = () => document.getElementById("add-holiday-form");
const choreURL = 'http://localhost:3000/chores'


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

    const holidaylist = document.getElementById('add-holiday-form')
    const div = document.createElement('div')
    const h2 = document.createElement('h2')
    const h4 = document.createElement('h4')


    h3.innerText = "Get a holiday"
    h3.style.marginTop = "0"

    div.classList.add('card')
    h2.textContent = data.name
    h4.textContent = data.date
    

    li.innerText = "This is were you can look up holidays that your child can look forward to."
     

    ul.appendChild(li)
    
    mainDiv().appendChild(h3)
    mainDiv().appendChild(ul)
   
    div.append(h2, h4)
    holidaylist.append(div)
}

function pageRefresh(){
    //  HTML for the main page
    resetMainDiv();
    resetcontainer();
    resetHoliday();

    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const div = document.createElement("div");

    h3.innerText = "Parental home page set up"
    p.innerText= "On the parental home page you have the option to create a list of age appropirate chores or you have access to a list of premade chores!"


    mainDiv().appendChild(h3)
    mainDiv().appendChild(p)
}

function renderChorePage(chores){
    //  HTML for Chore page
    resetMainDiv();
    resetHoliday()


    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    const chorelist = document.getElementById('chore container')

    const div = document.createElement('div')
    div.className ='card'
    const h4 = document.createElement('h4')
    h4.textContent = newChore.name
    const img = document.createElement('img')
    img.src = newchore.image
    img.className = 'chore-picture'
    

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
    fetch(choreURL) // returns promise
        .then(resp => resp.json()) // then runs the respons when it get a success then returns another promise
        .then(data => data.forEach(chores => renderChorePage(chores)))
        resetcontainer();     
}

function holidays(){
    fetch("https://date.nager.at/api/v2/publicholidays/2020/US")
        .then(resp => resp.json())
        .then(data => data.forEach(data => renderNewHolidays(data)))
        resetHoliday();       
}






// helping functions

function resetMainDiv(){
    mainDiv().innerHTML = ""
}

function resetcontainer(){
    choreContainer().innerText = ""
}

function resetHoliday(){
    holidayreset().innerText = ""
}



// DOMContentLoaded


document.addEventListener("DOMContentLoaded", ()=>{
    attachExChoreClickEvent();
    attachSpecialAidClickEvent();
    attachholidaysClickEvent();
    pageRefresh();  
})


