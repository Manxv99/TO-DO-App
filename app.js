let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function(){
    let newli = document.createElement("li");
    newli.innerText = inp.value;
    ul.appendChild(newli);
    inp.value = "";

    delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.classList.add("del");
    newli.appendChild(delbtn);
    console.dir(delbtn)
})

// let delbtns = document.querySelectorAll(".del");
// for(let db of delbtns){
//     db.addEventListener("click", function(){
//         let par = db.parentElement;  //li
//         par.remove();  
//     })
// }  this isnt working for new elements(new todo tasks added), so instead we apply the function to its parent

ul = document.querySelector("ul");
ul.addEventListener("click", function(event){
    console.dir(event.target)
    console.dir(event.target.nodeName)
    if(event.target.nodeName == "BUTTON"){
        let delItem = event.target.parentElement;  //li delete
        delItem.remove();
    }
})