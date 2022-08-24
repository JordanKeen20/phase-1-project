// node
const mainDiv = () => document.getElementById("main");
const examplebtn = () => document.getElementById('chore-example');
const holidayExamplesbtn = () => document.getElementById('new-holiday');
const listchoresbtn = () => document.getElementById('new-chores');
const pageloadbtn = () => document.getElementById('home-page');
// EventListeners
function attachExampleBtnEventListener(){
    examplebtn().addEventListener('click', examplepage )
}

function attachListChoreBtnEventListener(){
    listchoresbtn().addEventListener('click', chorelist)
}

function attachHolidayExampleBtnEventListener(){
    holidayExamplesbtn().addEventListener('click', holidaypage)
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

function examplepage(){
    resetMainDiv();

    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    h3.innerText = "Chore example"
    p.innerText= "These are some examples of pictures and names you can use!"

    mainDiv().appendChild(h3)
    mainDiv().appendChild(p)

}

function holidaypage(){
    resetMainDiv();

    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    h3.innerText = "Holidays"
    p.innerText= "These are holidays throughout the year for your child to look forward to!"

    mainDiv().appendChild(h3)
    mainDiv().appendChild(p)
}

function chorelist(){
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


