
async function Sort_by_Selection(arr, speedOfVisualization) {
    for (let i = 0; i < arr.length; i++) {
        var key = arr[i]
        var min_element = arr[i]
        var min_index=i
        var keyBar=randomArrayBar[i]
        await randomInterval(keyBar, speedOfVisualization)
        
        for (let j = i+1; j < arr.length; j++) {
            change_color=randomArrayBar[j]
            change_color.style.backgroundColor="blue"
            await blankAwait()
            if (min_element>arr[j]) {
                min_element=arr[j]
                min_index=j
            }
            change_color.style.backgroundColor="#933dc9"
            
        }
        
        temp=key
        arr[i]=min_element
        arr[min_index]=temp
        smallerNode=randomArrayBar[min_index]
        temp=keyBar
        randomArrayBar[i]=smallerNode
        randomArrayBar[min_index]=keyBar
        renderAllBars(randomArrayBar)
        await randomInterval2(smallerNode, speedOfVisualization)
        // arrayBar.insertBefore(keyBar,arrayBar.children[min_index])
        // i==0?arrayBar.insertBefore(smallerNode,arrayBar.firstChild):arrayBar.childNodes[i-1].after(smallerNode)

        smallerNode.style.backgroundColor="#933dc9"
        keyBar.style.backgroundColor="#933dc9"
        console.log(arr);
    }
    return arr
}

// console.log(Sort_by_Selection([10,4,1,3,2],"a","a"));

