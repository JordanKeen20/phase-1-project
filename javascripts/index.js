// node
const mainDiv =  document.getElementById("main");
const examplebtn = document.getElementById('chore-example');
const holidayExamplesbtn =  document.getElementById('new-holiday');
const listchoresbtn =  document.getElementById('new-chores');
const pageloadbtn =  document.getElementById('home-page');
const holidayLists =  document.getElementById("add-holiday-form");
const exampleLists =  document.getElementById("example-chore");
const choreListContainer = document.getElementById("chore-list-container");
const newChoreForm =  document.querySelector('form');
const createChorebtn = document.getElementById("submit")
// URL short Cuts
const choreURL = 'http://localhost:3000/chores'

// EventListeners
function attachExampleBtnEventListener(){
    examplebtn.addEventListener('click', examplePageBtn)
}

function attachListChoreBtnEventListener(){
    listchoresbtn.addEventListener('click', chorelist)
}

function attachHolidayExampleBtnEventListener(){
    holidayExamplesbtn.addEventListener('click', holidaysfetch)
}

function attachPageLoadBtnEventListener(){
    pageloadbtn.addEventListener('click', pageRefresh)
}

function attackNewChoreEventlistener(){
    createChorebtn.addEventListener('submit', newChores)
}




// EventHandlers

function pageRefresh(){
    //  HTML for the main page
    resetMainDiv(); 
    resetholiday();
    resetExample(); 
   
    
    
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

function chorelist(){
    // HTML for Chore List 
    resetMainDiv();
    resetholiday();
    resetExample();

    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    let li = document.createElement('div');
   

    h3.innerText = "List Chores"
    p.innerText = "Have fun making your list for your child!"

    li.className = 'card'
    li.innerHTML = `
    <div id="chorecontainer" class="container"> 
    <form class="add-chore-form"> 
    <h3>Create a chore!</h3>
        <input type="text" name="name" value="" placeholder="Enter a chore here..." class="input-text"/>
        <br />
        <input type="text" name="image" value="" placeholder="Enter a chores image URL..." class="input-text"/>
        <br />
        <input type="submit" id="submit" name="submit" value= "Create chore" class="submit"/>
      </form>
    </div>
    `
     
    mainDiv.appendChild(h3);
    mainDiv.appendChild(p);
    mainDiv.appendChild(li)
    }

    function newChores(createNewChore){

    }


// fetches

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

//Patches/Post


// helping functions

function resetMainDiv(){
    mainDiv.innerHTML = ""
}

function resetholiday(){
    holidayLists.innerHTML = ""
}

function resetExample(){
    exampleLists.innerText = ""
}



// DOMContentLoaded


document.addEventListener("DOMContentLoaded", ()=>{
   pageRefresh();  
   attachExampleBtnEventListener();
   attachPageLoadBtnEventListener();
   attachHolidayExampleBtnEventListener();
   attachListChoreBtnEventListener();
})






