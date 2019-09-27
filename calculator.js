function addition() {
    let a=document.getElementById("in1").value;
    let b=document.getElementById("in2").value;
    let c=parseInt(a)+parseInt(b);
    document.getElementById("result").innerHTML=c;
}
function subtraction() {
    let a=document.getElementById("in1").value;
    let b=document.getElementById("in2").value;
    let c=parseInt(a)-parseInt(b);
    document.getElementById("result").innerHTML=c;
}
function multiplication() {
    let a=document.getElementById("in1").value;
    let b=document.getElementById("in2").value;
    let c=parseInt(a)*parseInt(b);
    document.getElementById("result").innerHTML=c;
}
function division() {
    let a=document.getElementById("in1").value;
    let b=document.getElementById("in2").value;
    let c=parseInt(a)/parseInt(b);
    document.getElementById("result").innerHTML=c;
}