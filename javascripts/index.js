// node
const mainDiv = () => document.getElementById("main");
const examplebtn = () => document.getElementById('chore-example');
const holidayExamplesbtn = () => document.getElementById('new-holiday');
const listchoresbtn = () => document.getElementById('new-chores');
const pageloadbtn = () => document.getElementById('home-page');
const holidayLists = () => document.getElementById("add-holiday-form");
const exampleLists = () => document.getElementById("example-chore");
const choreListContainer = document.getElementById("chore-list-container");
const newChoreForm = () => document.querySelector('form');
const choreURL = 'http://localhost:3000/chores'

// EventListeners
function attachExampleBtnEventListener(){
    examplebtn().addEventListener('click', examplePageBtn)
}

function attachListChoreBtnEventListener(){
    listchoresbtn().addEventListener('click', chorelist)
}

function attachHolidayExampleBtnEventListener(){
    holidayExamplesbtn().addEventListener('click', holidaysfetch)
}

function attachPageLoadBtnEventListener(){
    pageloadbtn().addEventListener('click', pageRefresh)
}

function attackNewChoreEventlistener(){
    newChoreForm().addEventListener('submit', eventobj)
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

    mainDiv().appendChild(h3)
    mainDiv().appendChild(p)
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

    
    mainDiv().appendChild(h3)
    mainDiv().appendChild(p)

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

    mainDiv().appendChild(h3);
    mainDiv().appendChild(ul);

    div.appendChild(dname, ddate);
    holidayList.append(div);
   
   
}

function chorelist(newChore){
    // HTML for Chore List 
    resetMainDiv();
    resetholiday();
    resetExample();

    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    
    const ul = document.createElement('ul');
    const div = document.createElement('div');

    h3.innerText = "List Chores"
    p.innerText = "Have fun making your list for your child!"
    div.innerHTML = ` 
    <div class="container">
    <form class="add-chore-form">
      <h3>Create a Chore!</h3>
      <input type="text" name="name" value="" placeholder="Enter a chores name..." class="input-text"/>
      <br />
      <input type="text" name="image" value="" placeholder="Enter a chore image URL..." class="input-text"/>
      <br />
      <input type="submit" name="submit" value="Create Chore" class="submit"/>
    </form>
  </div>`

  const dname = document.createElement('h2');
  const img = document.createElement('img');

  div.className ='card'
  dname.textContent = newChore.name
  img.src = newChore.image
  img.className = 'choreContainer'



  div.append(dname, img)
  choreListContainer.append(div)   

    mainDiv().appendChild(h3);
    mainDiv().appendChild(p);
    ul.appendChild(div);
    mainDiv().appendChild(ul);
}

// function newChore(newChores){
//     const div = document.createElement('div');
//     const dname = document.createElement('h2');
//     const img = document.createElement('img');

//     div.className ='card'
//     dname.textContent = newChores.name
//     img.src = newChores.image
//     img.className = 'choreContainer'

//     div.append(h2, img)
//     choreListContainer.append(div)   
     
// }

// function eventobj(){
    // eventobj.preventDefault();
    // // get info for the event

    // const newChores = {
    //     name: eventobj.target.name.value,
    //     image: eventobj.target.image.value
    // }

    // fetch(toysUrl,{
    //     method: 'POST',
    //     headers: {
    //         'content-Type': 'application/json'},
    //     body:JSON.stringify(newChores)
    // })
    // .then(resp = resp.json())
    // .then(newChores => {
    //     chorelist(newChores)
    // })
// }






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

// function submitBtn(){
//     const choreId = choreobj.div
//     fetch(`http://localhost:3000/chores/${choreId}`, {
//         method: 'PATCH',
//         hearders:{
//             'content-Type':'application/json'},
//     })
// }
// helping functions

function resetMainDiv(){
    mainDiv().innerHTML = ""
}

function resetholiday(){
    holidayLists().innerText = ""
}

function resetExample(){
    exampleLists().innerText = ""
}



// DOMContentLoaded


document.addEventListener("DOMContentLoaded", ()=>{
   pageRefresh();  
   attachExampleBtnEventListener();
   attachPageLoadBtnEventListener();
   attachHolidayExampleBtnEventListener();
   attachListChoreBtnEventListener();
})





// function showchore(){
//     const exampleChore = document.getElementById("'add-holiday-form'")
//     const div = document.createElement('div');
//     div.classList.add('card')
//     const h2 = document.createElement('h2')
//     h2.textContent = data.name
//     const h4 = document.createElement('h3')
//     h3.textContent = data.date

//     div.append(h2, h3);
//     exampleChore.append(div);
//     mainDiv().append(exampleChore);
// }
