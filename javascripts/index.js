// node
const mainDiv = () => document.getElementById("main");
const examplebtn = () => document.getElementById('chore-example');
const holidayExamplesbtn = () => document.getElementById('new-holiday');
const listchoresbtn = () => document.getElementById('new-chores');
const pageloadbtn = () => document.getElementById('home-page');
const choreURL = ' http://localhost:3000/chores'

// EventListeners
function attachExampleBtnEventListener(){
    examplebtn().addEventListener('click', fetchChoreList)
}

function attachListChoreBtnEventListener(){
    listchoresbtn().addEventListener('click', chorelist)
}

function attachHolidayExampleBtnEventListener(){
    holidayExamplesbtn().addEventListener('click', holidays)
}

function attachPageLoadBtnEventListener(){
    pageloadbtn().addEventListener('click', pageRefresh)
}




// EventHandlers

function pageRefresh(){
    //  HTML for the main page
    resetMainDiv();    
    
    
    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    h3.innerText = "Parental home page set up"
    p.innerText= "On the parental home page you have the option to create a list of age appropirate chores or you have access to a list of premade chores!"

    mainDiv().appendChild(h3)
    mainDiv().appendChild(p)
}

function examplepage(chores){
    // HTML for example chores
    resetMainDiv();

    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    h3.innerText = "Chore example"
    p.innerText= "These are some examples of pictures and names you can use!"

    mainDiv().appendChild(h3)
    mainDiv().appendChild(p)

}

function holidaypage(data){
    // HTML for holiday
    resetMainDiv();

    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const ul = document.createElement('ul');

    const div = document.createElement('div');
    div.classList.add('card')
   
    const h2 = document.createElement('h2')
    h2.textContent = data.name

    h3.innerText = "Holidays"
    p.innerText= "These are holidays throughout the year for your child to look forward to!"

    mainDiv().appendChild(h3)
    mainDiv().appendChild(p)
    div.appendChild(h2)
    ul.appendChild(div)
    mainDiv().append(ul)
}

function chorelist(){
    // HTML for Chore List 
    resetMainDiv();

    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const ul = document.createElement('lu');
    const div = document.createElement('div');

    h3.innerText = "List Chores"
    p.innerText = "Have fun making your list for your child!"
    div.innerHTML = ` 
    <div class="container">
    <form class="add-toy-form">
      <h3>Create a toy!</h3>

      <input
        type="text"
        name="name"
        value=""
        placeholder="Enter a toy's name..."
        class="input-text"
      />
      <br />
      <input
        type="text"
        name="image"
        value=""
        placeholder="Enter a toy's image URL..."
        class="input-text"
      />
      <br />
      <input
        type="submit"
        name="submit"
        value="Create Toy"
        class="submit"
      />
    </form>
  </div>`


    mainDiv().appendChild(h3);
    mainDiv().appendChild(p);
    ul.appendChild(div);
    mainDiv().appendChild(ul);
}

// fetches
function fetchChoreList() {
    fetch(choreURL) // returns promise
        .then(resp => resp.json()) // then runs the respons when it get a success then returns another promise
        .then(data => data.forEach(chores => examplepage(chores)))   
}

function holidays(){
    fetch("https://date.nager.at/api/v2/publicholidays/2020/US")
        .then(resp => resp.json())
        .then(data => data.forEach(data => holidaypage(data)))       
}


// helping functions

function resetMainDiv(){
    mainDiv().innerHTML = ""
}





// DOMContentLoaded


document.addEventListener("DOMContentLoaded", ()=>{
   pageRefresh();  
   attachExampleBtnEventListener();
   attachPageLoadBtnEventListener();
   attachHolidayExampleBtnEventListener();
   attachListChoreBtnEventListener();
})


