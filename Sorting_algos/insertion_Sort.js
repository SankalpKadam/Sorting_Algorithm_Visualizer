
async function Sort_by_Insertion(arr, speedOfVisualization) {
    for (let i = 1; i < arr.length; i++) {
        var key = arr[i];
        var keyBar=randomArrayBar[i]
        await randomInterval(keyBar, speedOfVisualization)
        // console.log(keyBar);
        j = i-1
        while (j>=0 && arr[j]> key){
            greaterNode=randomArrayBar[j]
            await randomInterval2(greaterNode, speedOfVisualization)
            arr[j+1]=arr[j]
            randomArrayBar[j+1]=randomArrayBar[j]
            randomArrayBar[j]=keyBar
            renderAllBars(randomArrayBar)
            // arrayBar.insertBefore(keyBar, greaterNode)
            j-=1
            greaterNode.style.backgroundColor="#933dc9"
        }
        arr[j+1]=key
        keyBar.style.backgroundColor="#933dc9"
    }
    return arr
}

