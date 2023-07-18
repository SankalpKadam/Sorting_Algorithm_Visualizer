const visualizationSpeedSlider=document.getElementById("visualizationSpeedSlider");
const arraySizeSlider=document.getElementById("arraySizeSlider");
const Randomize=document.getElementById("Randomize");
const Start = document.getElementById("startSorting")
const MergeSortButton = document.getElementById("mergeSortButton")
const QuickSortButton = document.getElementById("quickSortButton")
const InsertionSortButton = document.getElementById("insertionSortButton")
const BubbleSortButton = document.getElementById("bubbleSortButton")
const SelectionSortButton = document.getElementById("selectionSortButton")


var speedOfVisualization=visualizationSpeedSlider.value
var randomArray=[];
var setSizeOfArray=arraySizeSlider.value
var algorithm=null


MergeSortButton.addEventListener("click",()=>{
    algorithm="MergeSort"
})
QuickSortButton.addEventListener("click",()=>{
    algorithm="QuickSort"
})
BubbleSortButton.addEventListener("click",()=>{
    algorithm="BubbleSort"
})
SelectionSortButton.addEventListener("click",()=>{
    algorithm="SelectionSort"
})
InsertionSortButton.addEventListener("click",()=>{
    algorithm="InsertionSort"
})


arraySizeSlider.addEventListener('change',()=>{
    setSizeOfArray=arraySizeSlider.value
    removeAllChild()
    randomArray=createRandomArray(randomArray,setSizeOfArray);
    randomArrayBar=addArrayBars(setSizeOfArray)
    renderAllBars(randomArrayBar)
})

visualizationSpeedSlider.addEventListener('change',()=>{
    speedOfVisualization=visualizationSpeedSlider.value
})

function disableClicks() {
    Randomize.classList.add("disable");
    Start.classList.add("disable");
    visualizationSpeedSlider.classList.add("disable")
    arraySizeSlider.classList.add("disable")
    document.getElementById("myDropDown").classList.add("disable")

}

function enableClicks() {
    Randomize.classList.remove("disable");
    Start.classList.remove("disable");
    visualizationSpeedSlider.classList.remove("disable")
    arraySizeSlider.classList.remove("disable")
    document.getElementById("myDropDown").classList.remove("disable")
    algorithm=""

}

function createRandomArray(randomArray, sizeOfArray) {
    randomArray=[]
    for (let index = 0; index < sizeOfArray; index++) {
        let x = Math.floor((Math.random()*65)+1)
        randomArray.push(x)    
    }
    return randomArray
}

function addArrayBars(setSize) {
    var ArrayBar=[]
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
        ArrayBar.push(newBar)
    }
    return ArrayBar
    
}


function removeAllChild() {
    while (arrayBar.hasChildNodes()) {
        arrayBar.removeChild(arrayBar.firstChild)
    }
}


Randomize.addEventListener("click",()=>{
    removeAllChild()
    setSizeOfArray=Math.floor((Math.random()*53)+100)
    document.getElementById("valueOfSize").innerHTML=`Size of the array is ${setSizeOfArray}`
    arraySizeSlider.value=setSizeOfArray
    speedOfVisualization=Math.floor((Math.random()*5)+1)
    document.getElementById("valueOfSpeed").innerHTML=`Speed of the visualization is ${speedOfVisualization}`
    visualizationSpeedSlider.value = speedOfVisualization
    randomArray=createRandomArray(randomArray,setSizeOfArray)
    randomArrayBar=addArrayBars(setSizeOfArray)
    renderAllBars(randomArrayBar)
})

Start.addEventListener("click",async ()=>{
    switch (algorithm) {
        case "MergeSort":
            disableClicks()
            await Sort_by_Merging(randomArray, speedOfVisualization)
            enableClicks()
            break;
        case "QuickSort":
            disableClicks()
            await Sort_by_Quick(randomArray, speedOfVisualization)
            enableClicks()
            break;
        case "BubbleSort":
            disableClicks()
            await Sort_by_Bubbling(randomArray, speedOfVisualization)
            enableClicks()
            break;
        case "SelectionSort":
            disableClicks()
            await Sort_by_Selection(randomArray, speedOfVisualization)
            enableClicks()
            break;
        case "InsertionSort":
            disableClicks()
            await Sort_by_Insertion(randomArray, speedOfVisualization)
            enableClicks()
            break
        default:
            var alertUser = document.getElementById("DivAlert")
            alertUser.classList.remove("alertDiv")
            alertUser.classList.add("showAlertDiv")
            alertUser.innerText="Please select a SORTING ALGORITHM from the dropdown menu and click START"
            setTimeout(() => {
                alertUser.innerText=""
                alertUser.classList.remove("showAlertDiv")
                alertUser.classList.add("alertDiv")
            }, 5000);
            // window.alert("Select a sorting alogrithm from the dropdown menu and click START")
            break;
    }
})


randomArray=createRandomArray(randomArray,setSizeOfArray);
randomArrayBar=addArrayBars(setSizeOfArray)
renderAllBars(randomArrayBar)
document.getElementById("valueOfSize").innerHTML=`Size of the array is ${setSizeOfArray}`
document.getElementById("valueOfSpeed").innerHTML=`Speed of the visualization is ${speedOfVisualization}`
