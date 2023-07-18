// var msb=document.getElementById("mergeSortButton")
// msb.addEventListener("click",()=>{
//     console.log("clicked msb");
//     msb.classList.add("sortButtonClicked")
// })

const visualizationSpeedSlider=document.getElementById("visualizationSpeedSlider");
const arraySizeSlider=document.getElementById("arraySizeSlider");
// const arrayBar=document.getElementById("arrayBar");
const Randomize=document.getElementById("Randomize");
const Start = document.getElementById("startSorting")

var speedOfVisualization=visualizationSpeedSlider.value
var randomArray=[];
var setSizeOfArray=arraySizeSlider.value
// var randomArrayBar=[]

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
        // arrayBar.appendChild(newBar);
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
    speedOfVisualization=Math.floor((Math.random()*5)+1)
    randomArray=createRandomArray(randomArray,setSizeOfArray)
    addArrayBars(setSizeOfArray)
})

function swapDivs(strm) {
    div1=arrayBar.childNodes[0]
    div1.style.backgroundColor="black"
    div2=arrayBar.childNodes[7]
    div2.style.backgroundColor="green"
}

divtemp=arrayBar.childNodes[1]
Start.addEventListener("click",()=>{
    // arrayBar.insertBefore(arrayBar.childNodes[1],arrayBar.firstChild)
    // arrayBar.insertBefore(arrayBar.childNodes[4],arrayBar.lastChild)
    // arrayBar.children[2].after(div2)
    console.log(Sort_by_Quick(randomArray, speedOfVisualization));
    // arrayBar.insertBefore(div1,arrayBar.children[3])    
    // console.log(div1.isEqualNode(arrayBar.childNodes[6]));
    // // arrayBar.childNodes[2].after(div2)
    // arrayBar.insertBefore(div2, arrayBar.firstChild)  
    // arrayBar.childNodes[0].after(div2)
    // arrayBar.replaceChild(newBar,arrayBar.childNodes[0])

    // movechildren(arrayBar, 2,1)
    // movechildren(arrayBar, 0,1)
    // move2(arrayBar,0,1)
    // move2(arrayBar,1,0)

})


randomArray=createRandomArray(randomArray,setSizeOfArray);
randomArrayBar=addArrayBars(setSizeOfArray)
renderAllBars(randomArrayBar)
// swapDivs("wait")

// function movechildren(arrayBar,insertAt,insertFrom) {
//     var initial_div=arrayBar.childNodes[insertFrom]
//     for (let index = insertFrom; index > insertAt; index--) {
//         var newBar = document.createElement("div")
//         if (index == 0) {
//             newBar.id=arrayBar.childNodes[index].id
//             newBar.style.height=arrayBar.childNodes[index].style.height;
//             newBar.style.width=arrayBar.childNodes[index].style.width;
        
//         } else {
//             newBar.id=arrayBar.childNodes[index-1].id
//             newBar.style.height=arrayBar.childNodes[index-1].style.height;
//             newBar.style.width=arrayBar.childNodes[index-1].style.width;
            
//         }
//         newBar.style.borderLeft="1px solid white"
//         newBar.style.backgroundColor="#933dc9"
//         newBar.style.display="inline-block"
    
//         arrayBar.replaceChild(newBar,arrayBar.childNodes[index])
        
//     }
//     var newBar = document.createElement("div")
//         newBar.id=initial_div.id
//         newBar.style.height=initial_div.style.height;
//         newBar.style.width=initial_div.style.width;
//         newBar.style.borderLeft="1px solid white"
//         newBar.style.backgroundColor="#933dc9"
//         newBar.style.display="inline-block"
//     arrayBar.replaceChild(newBar,arrayBar.childNodes[insertAt])

// }

