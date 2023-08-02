
let input = document.getElementById("input");
let text = document.querySelector(".text");


function Add(){
        if(input.value ===""){
            alert("Please! Enter Your Task");
        }
        else{
             let newElement = document.createElement("ul");
             newElement.innerHTML =`${input.value} <i class="fa fa-trash-o" style="font-size:19px"></i>`;
             text.appendChild(newElement);
             input.value = "";   
             newElement.querySelector("i").addEventListener("click",remove);
             function remove(){
                newElement.remove()
             }   
        }
}