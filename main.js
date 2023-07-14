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
var setSizeOfArray=arraySizeSlider.value


arraySizeSlider.addEventListener('change',()=>{
    setSizeOfArray=arraySizeSlider.value
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
    return randomArray
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

Start.addEventListener("click",()=>{
    sorted_arry=Sort_by_Insertion(randomArray, arrayBar, speedOfVisualization)
})


randomArray=createRandomArray(randomArray,setSizeOfArray);
addArrayBars(setSizeOfArray)