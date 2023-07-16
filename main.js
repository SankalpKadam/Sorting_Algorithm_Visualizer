// var msb=document.getElementById("mergeSortButton")
// msb.addEventListener("click",()=>{
//     console.log("clicked msb");
//     msb.classList.add("sortButtonClicked")
// })

const visualizationSpeedSlider=document.getElementById("visualizationSpeedSlider");
const arraySizeSlider=document.getElementById("arraySizeSlider");
const arrayBar=document.getElementById("arrayBar");
const Randomize=document.getElementById("Randomize");
const Start = document.getElementById("startSorting")

var speedOfVisualization=visualizationSpeedSlider.value
var randomArray=[];
var setSizeOfArray=10


arraySizeSlider.addEventListener('change',()=>{
    setSizeOfArray=10
    removeAllChild()
    randomArray=createRandomArray(randomArray,setSizeOfArray);
    addArrayBars(setSizeOfArray)

})

visualizationSpeedSlider.addEventListener('change',()=>{
    speedOfVisualization=visualizationSpeedSlider.value
})



function createRandomArray(randomArray, sizeOfArray) {
    randomArray=[]
    for (let index = 0; index < sizeOfArray; index++) {
        let x = Math.floor((Math.random()*65)+1)
        randomArray.push(x)    
    }
    return [10,3,2,7,4,5,9,1,8,6]
}

function addArrayBars(setSize) {
    barWidth=100/setSize;
    for (let index = 0; index < setSize; index++) {
        barHeight=randomArray[index];
        var newBar = document.createElement("div")
        newBar.id=`${index}`
        newBar.style.height=`${barHeight}vh`;
        newBar.style.width=`${barWidth}%`;
        newBar.style.borderLeft="1px solid white"
        newBar.style.backgroundColor="#933dc9"
        newBar.style.display="inline-block"
        arrayBar.appendChild(newBar);
    }
    
}


function removeAllChild() {
    while (arrayBar.hasChildNodes()) {
        arrayBar.removeChild(arrayBar.firstChild)
    }
}


Randomize.addEventListener("click",()=>{
    removeAllChild()
    setSizeOfArray=Math.floor((Math.random()*53)+100)
    speedOfVisualization=Math.floor((Math.random()*5)+1)
    randomArray=createRandomArray(randomArray,setSizeOfArray)
    addArrayBars(setSizeOfArray)
})

function swapDivs(strm) {
    div1=arrayBar.childNodes[1]
    div1.style.backgroundColor="black"
    div2=arrayBar.childNodes[9]
    div2.style.backgroundColor="green"
}

Start.addEventListener("click",()=>{
    Sort_by_Merging(randomArray, arrayBar, speedOfVisualization)
    // arrayBar.insertBefore(div1,arrayBar.children[9])    
    // console.log(div1.isEqualNode(arrayBar.childNodes[6]));
    // // arrayBar.childNodes[2].after(div2)
    // // arrayBar.insertBefore(div2, arrayBar.firstChild)  
    // arrayBar.childNodes[0].after(div2)  
})


randomArray=createRandomArray(randomArray,setSizeOfArray);
addArrayBars(setSizeOfArray)
// swapDivs("wait")