const intervalArray=[1000,200,100,50,1]
const arrayBar=document.getElementById("arrayBar");
var randomArrayBar=[]
const randomInterval =(keyBar, speedOfVisualization)=> new Promise((res)=>{
    keyBar.style.backgroundColor="red"
    setTimeout(res, intervalArray[speedOfVisualization-1])})

const randomInterval2 =(greaterNode, speedOfVisualization)=> new Promise((res)=>{
        greaterNode.style.backgroundColor="blue"
        setTimeout(res, intervalArray[speedOfVisualization])})

const blankAwait=()=> new Promise((res)=>{
    setTimeout(res,10)
})

function renderAllBars(ArrayBar) {
    
    for (let index = 0; index < ArrayBar.length; index++) {
        arrayBar.appendChild(ArrayBar[index])
        
    }
}