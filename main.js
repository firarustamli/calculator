const number = document.querySelectorAll(".number");
const input=document.querySelector(".input span");
const operators=document.querySelectorAll(".operator");
const equals=document.querySelector(".equals")
const reset=document.querySelector('.reset');
const reverse=document.querySelector(".reverse");
const percentage=document.querySelector(".percentage");

let previousValue="";
let lastValue="";
let isPreviousValue=false;
let isLastValue=false;
let operator="";
let result=0;
 
for(let i=0;i<number.length;i++){
    number[i].addEventListener('click',(e)=>{
    let attribute=e.target.getAttribute("value");
        if(isPreviousValue===false){
            getPreviousValue(attribute);
        }
        if(isLastValue==false){
            getLastValue(attribute);
        }
    })
}

function getPreviousValue(element){
input.innerHTML="";
previousValue += element;
input.innerHTML=previousValue;
previousValue=+previousValue;
}
function getLastValue(element){
  if(previousValue!="" && operator!=""){
    lastValue += element;
    input.innerHTML=lastValue;
    lastValue=+lastValue;
  }
}

function getOperators(){
    for(let i=0;i<operators.length;i++){
        operators[i].addEventListener('click',(e) => {
        operator=e.target.getAttribute("value");
        isPreviousValue=true;}) 
    }
}
getOperators();

equals.addEventListener("click",() => {
    input.innerHTML="";
    if(operator=== "+"){
        result=previousValue+lastValue;
    }else if(operator==="-"){
        result=previousValue-lastValue;
    }
    else if(operator==="/"){
        result=previousValue/lastValue;
    }
    else if(operator==="x"){
        result=previousValue*lastValue;
    }
    input.innerHTML=result;
    previousValue=result;
})

reverse.addEventListener("click",()=>{
    input.innerHTML="";
    if(previousValue!=""){
        previousValue=-previousValue;
        previousValue=result;
    }
    if(previousValue!="" && lastValue!="" && operator!=""){
    result=-result;
    }
    input.innerHTML=result;
})

percentage.addEventListener("click",()=>{
    input.innerHTML="";
    if(previousValue!=""){
        result=previousValue/100;
        previousValue=result;
    }
    if(previousValue!="" && lastValue!="" && operator!=""){
        result=result/100;
        }
    input.innerHTML=result;
})

reset.addEventListener("click",()=>{
    input.innerHTML=0;
    previousValue="";
    lastValue="";
    isPreviousValue=false;
    isLastValue=false;
    operator="";
    result=0;
}
)