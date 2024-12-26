let boxes=document.querySelectorAll(".box");
let turnX=true;
const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
let reset=document.querySelector(".reset");
reset.addEventListener("click",()=>{
    turnX=true;
    document.querySelector(".winner").innerText=`All the best!`;
    document.querySelector(".turn").innerText="Its turn of Player 1";
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
        box.style.backgroundColor="#2a9d8f";        
    })
});
let count=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnX==true){
            document.querySelector(".turn").innerText="Its turn of Player 1";
            box.innerText="X";
            box.style.display="flex";
            box.style.justifyContent="center";
            box.style.alignItems="center";
            box.style.backgroundColor="pink";
            box.style.fontSize="40px";
            box.style.color="white";
            turnX=false;
        }
        else{
            document.querySelector(".turn").innerText="Its turn of Player 2";
            box.innerText="O";
            box.style.display="flex";
            box.style.justifyContent="center";
            box.style.alignItems="center";
            box.style.backgroundColor="blue";
            box.style.fontSize="40px";
            box.style.color="white";
            turnX=true;
        }
        box.disabled=true;
        check();
        count++;
        if(count==9){
            document.querySelector(".winner").innerText=`Draw match`;
        }
    });
});
let check=()=>{
    for(let w of win){
        // console.log(w[0],w[1],w[2]);
        // console.log(boxes[w[0]].innerText,boxes[w[1]].innerText,boxes[w[2]].innerText);
        let a=boxes[w[0]].innerText;
        let b=boxes[w[1]].innerText;
        let c=boxes[w[2]].innerText;
        if(a!="" && b!="" && c!=""){
            if(a===b && b===c){
                document.querySelector(".winner").innerText=`Winner is ${a}`;
                document.querySelector(".turn").innerText="";
                for(let box of boxes){
                    box.disabled=true;            
                }
                break;
            }
        }
    }
}
