async function  Partition(arr, start, end, speedOfVisualization) {
    var pivot = arr[end]
    var pivotBar = randomArrayBar[end]
    await randomInterval(pivotBar, speedOfVisualization)
    var i=start-1
    for (let j = start; j < end; j++) {
        var comparision_bar=randomArrayBar[j]
        await randomInterval2(comparision_bar, speedOfVisualization)
        if (arr[j] <= pivot) {
            i=i+1
            var comparision_bar2=randomArrayBar[i]
            await randomInterval2(comparision_bar2, speedOfVisualization)
            var temp_bar=randomArrayBar[j]
            randomArrayBar[j]=randomArrayBar[i]
            randomArrayBar[i]=temp_bar
            renderAllBars(randomArrayBar)
            comparision_bar2.style.backgroundColor="#933dc9"
            var temp=arr[j]
            arr[j]=arr[i] 
            arr[i]=temp
        } 
        comparision_bar.style.backgroundColor="#933dc9"
    }
    var temp_bar=randomArrayBar[end]
    randomArrayBar[end]=randomArrayBar[i+1]
    randomArrayBar[i+1]=temp_bar
    renderAllBars(randomArrayBar)
    pivotBar.style.backgroundColor="#933dc9"
    var temp=arr[end]
    arr[end]=arr[i+1]
    arr[i+1]=temp
    return i+1
}


async function QuickSort(arr, start, end, speedOfVisualization) {
    if (start >= end){
        return arr
    }
    var partition_index = await Partition(arr, start, end, speedOfVisualization)
    await QuickSort(arr, start, partition_index-1, speedOfVisualization)
    await QuickSort(arr, partition_index+1, end, speedOfVisualization)
}

async function Sort_by_Quick(arr, speedOfVisualization) {
    await QuickSort(arr, 0 ,arr.length-1, speedOfVisualization)
    console.log(arr);
}
// console.log(Sort_by_Quick([10,5,1,4,9],"a"));