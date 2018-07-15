let b="X"


function printx(p) {
    let a=document.getElementById("r"+p);
    console.log(a);
    a.innerHTML=b;
    checksign();

    
}
function checksign() {
    if(b=="X")
    b="O";
    else 
    b="X";
    
}