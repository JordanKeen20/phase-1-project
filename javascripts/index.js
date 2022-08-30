//  // node
const mainDiv =  document.getElementById("main");
const examplebtn = document.getElementById('chore-example');
const holidayExamplesbtn =  document.getElementById('new-holiday');
const listchoresbtn =  document.getElementById('new-chores');
const pageloadbtn =  document.getElementById('home-page');
const holidayLists =  document.getElementById("add-holiday-form");
const exampleLists =  document.getElementById("example-chore");
const choreListContainer = document.getElementById("chore-list-container");
const submitchore = document.getElementById("sumbit-chore");


// URL short Cuts
const choreURL = 'http://localhost:3000/chores'

// EventListeners
function attachExampleBtnEventListener(){
    examplebtn.addEventListener('click', examplePageBtn)
}

function attachListChoreBtnEventListener(){
    listchoresbtn.addEventListener('click',  createChoreList)
}

function attachHolidayExampleBtnEventListener(){
    holidayExamplesbtn.addEventListener('click', holidaysfetch)
}

function attachPageLoadBtnEventListener(){
    pageloadbtn.addEventListener('click', pageRefresh)
}


// EventHandlers

function pageRefresh(){
    //  HTML for the main page
    resetMainDiv(); 
    resetholiday();
    resetExample();
    removesubmitHTML();
   
    
   
    
    
    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    h3.innerText = "Parental home page set up"
    p.innerText= "On the parental home page you have the option to create a list of age appropirate chores or you have access to a list of premade chores!"

    mainDiv.appendChild(h3)
    mainDiv.appendChild(p)
}

function examplepage(chores){
    // HTML for example chores
    resetMainDiv();
    resetholiday();
    


    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    
    
    const exampleChore = document.getElementById('example-chore');
    const div = document.createElement('div');
    const dname = document.createElement('h2');
    const img = document.createElement('img');


    h3.innerText = "Chore example"
    h3.style.marginTop = '0'
    div.classList.add('card')
    p.innerText= "These are some examples of pictures and names you can use!"

   
    dname.textContent = chores.name
    img.src = chores.image
    img.classList.add('chorepicture')

    
    mainDiv.appendChild(h3)
    mainDiv.appendChild(p)

    div.append(dname, img);
    exampleChore.append(div)

}

function holidaypage(holidays){
    // HTML for holiday
    resetMainDiv();
    resetExample();
    removechoreListContainer();
    
   
    

    const h3 = document.createElement("h3");
    const ul = document.createElement("ul");
    const li = document.createElement("li");

    const holidayList = document.getElementById('add-holiday-form');
    const div = document.createElement('div');
    const dname = document.createElement('h2');
    const ddate = document.createElement('h3');


    h3.innerText = "Get a holiday"
    h3.style.marginTop = "0"
    
    
    li.innerText = "This is were you can look up holidays that your child can look forward to."    
    
    div.classList.add('card')
    dname.textContent = holidays.name
    ddate.textContent = holidays.date

    ul.appendChild(li);

    mainDiv.appendChild(h3);
    mainDiv.appendChild(ul);

    div.appendChild(dname, ddate);
    holidayList.append(div);
   
   
}



function createChoreList(){
    resetMainDiv();
    resetExample();
    resetholiday();
    
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    
    h3.innerText = "List Chores"
    p.innerText = "Have fun making your list for your child!"

        mainDiv.appendChild(h3);
        mainDiv.appendChild(p);
        mainDiv.appendChild(submitchore);
}




    // fetches/POST/PATCHES/DELETE

function holidaysfetch(){
    fetch("https://date.nager.at/api/v2/publicholidays/2020/US") // returns a promise
        .then(resp => resp.json()) // success will make it return another promise
        .then(data =>data.forEach(data => holidaypage(data)))
        resetholiday();
}

function examplePageBtn(){
    fetch(choreURL) // returns promise
        .then(resp => resp.json()) // then runs the respons when it get a success then returns another promise
        .then(data => data.forEach(chores => examplepage(chores)))  
        resetExample();
}

// // helping functions

function resetMainDiv(){
    mainDiv.innerHTML = ""
}

function resetholiday(){
    holidayLists.innerHTML = ""
}

function resetExample(){
    exampleLists.innerText = ""
}

function removesubmitHTML(){
    submitchore.remove(submitchore)
}

function removechoreListContainer(){
    choreListContainer.remove(choreListContainer)
}



// DOMContentLoaded


document.addEventListener("DOMContentLoaded", ()=>{
   pageRefresh();  
   attachExampleBtnEventListener();
   attachPageLoadBtnEventListener();
   attachHolidayExampleBtnEventListener();
   attachListChoreBtnEventListener();
})


document.querySelector("#add-chore").addEventListener('submit', handlechores)

function handlechores(event){
    event.preventDefault()
    let choreObj = {
        name: event.target.name.value,
        image: event.target.image.value
    } 
    document.querySelector("#add-chore").reset()
    createchorelist(choreObj)
    chorecreationlist(choreObj)
}

function createchorelist(chores){

    //build chore
    let choreCard = document.createElement('li')
    choreCard.className = 'card'
    choreCard.innerHTML = `
        <div class="content">
            <h4> ${chores.name}</h4>
            <img src="${chores.image}">
        </div>
        <div>
            <button id="delete"> Delete </button>
        </div>
    `
    choreCard.querySelector("#delete").addEventListener('click', () =>{
        choreCard.innerHTML= ''
        deletechore(chores.id)
    })

    // add chore to dom
    document.getElementById("chores-list").appendChild(choreCard)
}


function starter(){
    fetch('http://localhost:3000/chores')
        .then(resp => resp.json())
        .then(data => data.forEach(chores => createchorelist(chores)))
}

function chorecreationlist(choreObj){
    fetch('http://localhost:3000/chores', {
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(choreObj)
    })
    .then(resp => resp.json())
    .then(chores => console.log(chores))
}

function deletechore(id){
    fetch(`http://localhost:3000/chores/id`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(resp => resp.json())
    .then(chores => console.log(chores))

}



function codeHolder(){
    starter();
}

