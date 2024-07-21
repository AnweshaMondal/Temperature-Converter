//TEMPERATURE CONVERSION PROGRAM


//storing the states of the HTML elements into js variables
//  cTof= document.getElementById("toFehrenheit");
//  cTof=Number(cTof);
//  fToc= document.getElementById("toCelsius");  //now take values of these inputs
//  fToc=Number(fToc);
//  let input;
//  let Fehrenheit;
//  let Celsius;

// document.getElementById("button").onclick = function(){
// if(input == cTof.checked()){
//     Fehrenheit = cTof.value*1.8 + 32;
//     document.getElementById("result").textContent= Fehrenheit;
// }

// else{
//     Celsius = ( fToc.value-32)*0.556;
//     document.getElementById("result").textContent= Celsius;
// }

// }


//BROCODE
const myTextbox=document.getElementById("myTextbox");
const toFehrenheit=document.getElementById("toFehrenheit");
const toCelsius=document.getElementById("toCelsius"); 
const button=document.getElementById("button"); 
const result=document.getElementById("result"); 
let temp;

button.onclick=function(){
if(toFehrenheit.checked){
    temp= Number(myTextbox.value);
    temp= temp*9/5+32;
    result.textContent=temp.toFixed(1) + " Fehrenheit";

}

else if(toCelsius.checked){
    temp= Number(myTextbox.value);
    temp=(temp-32)*5/9; 
    result.textContent=temp.toFixed(2) + " Celsius";
}

else{
    result.textContent="Please select a unit."
}
}