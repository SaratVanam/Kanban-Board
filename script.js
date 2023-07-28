let addbtn=document.querySelector(".plus-button");
let check=true;
let plus=document.querySelector(".new-container");
let r=false;
let b=false;
let g=false;
let bl=false;

let rbutton=document.querySelector(".activer");
let bbutton=document.querySelector(".activeb");
let gbutton=document.querySelector(".activeg");
let blbutton=document.querySelector(".activebl");
let textfield=document.querySelector(".task-content");
let cardarea=document.querySelector(".card-area");

let choose=document.querySelector(".choose-priority");

let list=choose.querySelectorAll(".priority-color");

let trashcheck=false;
let tbtn=document.querySelector(".trash-button");
var uid = new ShortUniqueId();


tbtn.addEventListener("click",function(){
    if(trashcheck){
        tbtn.style.color="black";
    }
    else{
        tbtn.style.color="red";
    }
    trashcheck=!trashcheck;
    
})

addbtn.addEventListener("click", function(){
    if(check){
        plus.style.display="flex";
    }
    else{
        plus.style.display="none";
    }
    check=!check;
})


let cardColor;

for(let j=0;j<list.length;j++){
    list[j].addEventListener("click",function(){
        for(let i=0;i<list.length;i++){
            if(list[i].classList.contains("active")){
                list[i].classList.remove("active");
            }
        }
        list[j].classList.add("active");
        cardColor=list[j].classList[1];
    })
}






textfield.addEventListener("keydown", function(e){
    if(e.key=="Enter"){
        plus.style.display="none";
        check=!check;
        let textContent=textfield.value;
        textfield.value="";
        

        createTicket(textContent);
    }
})




function createTicket(textContent){
    // <div class="card-area">
    //     <div class="card">
    //         <div class="card-color"></div>
    //         <div class="card-id"> #403</div>
    //         <div class="card-text">hello this is a task</div>
    //     </div>
    // </div>
    let ticketarea=document.createElement("div");
    ticketarea.setAttribute("class","card");
    ticketarea.innerHTML=`<div class="card-color ${cardColor}"></div>
                          <div class="card-id"> #${uid()}</div>
                          <div class="card-text">${textContent}</div>
                          <div class="lock-unlock"><i class="fa-solid fa-lock"></i></div>`
    console.log(ticketarea);
    cardarea.appendChild(ticketarea);

    let lockunlock=document.querySelector(".lock-unlock i");
    let cardtext=document.querySelector(".card-text");
    lockunlock.addEventListener("click",function(){
        if(lockunlock.classList.contains("fa-lock")){
            lockunlock.classList.remove("fa-lock");
            lockunlock.classList.add("fa-lock-open");
            cardtext.setAttribute("contenteditable", "true");
        }
        else{
            lockunlock.classList.remove("fa-lock-open");
            lockunlock.classList.add("fa-lock");
            cardtext.setAttribute("contenteditable", "false");
        }
        
    })

    ticketarea.addEventListener("click", function(){
        if(trashcheck){
            ticketarea.remove();
        }
    })
}
