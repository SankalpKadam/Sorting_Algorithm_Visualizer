function movechildren(insertAt,insertFrom) {
    var temp_div=randomArrayBar[insertFrom]
    for (let index = insertFrom; index >insertAt; index--) {
        randomArrayBar[index]=randomArrayBar[index-1]
    }
    randomArrayBar[insertAt]=temp_div
}


async function Sort_by_Merging(arr, speedOfVisualization) {
    await MergeSort(arr, 0, arr.length-1, speedOfVisualization);
}

async function MergeSort(arr, start, end, speedOfVisualization) {
    if (start >= end){
         return
    }
    var mid = Math.floor((start + end)/2)
    await MergeSort(arr, start, mid, speedOfVisualization)
    await MergeSort(arr, mid+1, end, speedOfVisualization)
    await Merge(arr, start, mid, end, speedOfVisualization)

    
}
async function Merge(arr, start, mid, end, speedOfVisualization) {
    var size_of_left = mid-start+1
    var size_of_right = end-mid
    var left_array=[]
    var left_array_bar=[]
    var right_array=[]
    var right_array_bar=[]
    
    for (let i = 0; i < size_of_left; i++) {
        left_array.push(arr[start+i])
        left_array_bar.push(randomArrayBar[start+i])
    }
    for (let j = 0; j < size_of_right; j++) {
        right_array.push(arr[mid+1+j])
        right_array_bar.push(randomArrayBar[mid+1+j])
    }
    var i=0;
    var j=0;
    var k=start;
    while(i < size_of_left && j < size_of_right){
        var left_node=left_array_bar[i]
        await randomInterval(left_node, speedOfVisualization)
        var right_node = right_array_bar[j]
        await randomInterval2(right_node,speedOfVisualization)

        if (left_array[i]<=right_array[j]){
            var index_of=randomArrayBar.indexOf(left_node)
            movechildren(k,index_of)
            await renderAllBars(randomArrayBar)
            arr[k]=left_array[i]
            i++;
            k++;
        }

        else{
            var index_of=randomArrayBar.indexOf(right_node)
            movechildren(k,index_of)
            await renderAllBars(randomArrayBar)
            arr[k]=right_array[j]
            j++;
            k++;
            
        }
        left_node.style.backgroundColor="#933dc9"
        right_node.style.backgroundColor="#933dc9"
    }

    while(i<size_of_left){
        var left_Node=left_array_bar[i]
        await randomInterval(left_Node, speedOfVisualization)
        var index_of=randomArrayBar.indexOf(left_Node)
        movechildren(k,index_of)
        await renderAllBars(randomArrayBar)
        left_Node.style.backgroundColor="#933dc9"
        
        arr[k]=left_array[i]
        i++;
        k++;

    }
    while(j<size_of_right){
        var right_Node=right_array_bar[j]
        await randomInterval2(right_Node, speedOfVisualization)
        var index_of=randomArrayBar.indexOf(right_Node)
        movechildren(k,index_of)
        await renderAllBars(randomArrayBar)
        right_Node.style.backgroundColor="#933dc9"

        arr[k]=right_array[j]
        j++;
        k++;
    }
}
