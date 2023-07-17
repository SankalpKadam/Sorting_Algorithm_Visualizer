async function Sort_by_Merging(arr, arrayBar, speedOfVisualization) {
    await MergeSort(arr, 0, arr.length-1, arrayBar, speedOfVisualization);
    console.log(arr);
}

async function MergeSort(arr, start, end, arrayBar, speedOfVisualization) {
    if (start >= end){
         return
    }
    var mid = Math.floor((start + end)/2)
    // var keyBar=arrayBar.childNodes[mid]
    // await randomInterval(keyBar, speedOfVisualization)
    await MergeSort(arr, start, mid, arrayBar, speedOfVisualization)
    await MergeSort(arr, mid+1, end, arrayBar, speedOfVisualization)
    await Merge(arr, start, mid, end, arrayBar, speedOfVisualization)

    
}
async function Merge(arr, start, mid, end, arrayBar, speedOfVisualization) {
    var size_of_left = mid-start+1
    var size_of_right = end-mid
    var left_node=arrayBar.childNodes[0]
    var right_node=arrayBar.childNodes[1]
    var left_array=[]
    var right_array=[]
    for (let i = 0; i < size_of_left; i++) {
        left_array.push(arr[start+i])
    }
    for (let j = 0; j < size_of_right; j++) {
        right_array.push(arr[mid+1+j])
    }
    var i=0;
    var j=0;
    var k=start;
    console.log("arrs", left_array, right_array);
    while(i < size_of_left && j < size_of_right){
        console.log("st", start);
        left_node=arrayBar.childNodes[start+i]
        await randomInterval(left_node, speedOfVisualization)
        right_node=arrayBar.childNodes[mid+1+j]
        await randomInterval2(right_node, speedOfVisualization)
        await blankAwait()
        
        if (left_array[i]<=right_array[j]){
            console.log("push l "+ (start+i)+" before "+k+" "+arrayBar.childNodes[k].id+arr);
            await arrayBar.insertBefore(left_node,arrayBar.childNodes[k])
            console.log("after l "+arrayBar.childNodes[k].id);

            arr[k]=left_array[i]
            i++;
            k++;
        }

        else{
            console.log("push r "+ (mid+1+j)+" before "+k+" "+arrayBar.childNodes[k].id);
            await arrayBar.insertBefore(right_node,arrayBar.childNodes[k])
            console.log("after r "+arrayBar.childNodes[k].id);
            
            arr[k]=right_array[j]
            j++;
            k++;
            
        }
        left_node.style.backgroundColor="#933dc9"
        right_node.style.backgroundColor="#933dc9"
    }
      
    while(i<size_of_left){
        await blankAwait()
        arrayBar.childNodes[start+i].style.backgroundColor="red"
        console.log("push rem l "+ (start+i)+" before "+k+" "+arrayBar.childNodes[k].id+" st "+start);
        console.log("abcd", arrayBar.childNodes[start+i].id);
        // await arrayBar.childNodes[k].after(arrayBar.childNodes[start+i])
        await k==(arr.length-1)?arrayBar.insertBefore(arrayBar.childNodes[k],arrayBar.childNodes[k]):arrayBar.insertBefore(arrayBar.childNodes[start+i],arrayBar.childNodes[k])
        console.log("after l "+arrayBar.childNodes[k].id);
        // await arrayBar.childNodes[k].after(arrayBar.childNodes[start+i])

        arrayBar.childNodes[start+i].style.backgroundColor="#933dc9"
        arr[k]=left_array[i]
        i++;
        k++;

    }
    while(j<size_of_right){
        await blankAwait()
        arrayBar.childNodes[mid+1+j].style.backgroundColor="blue"

        console.log("push rem r "+ (mid+1+j)+" before "+k+" "+arrayBar.childNodes[k].id);
        // await arrayBar.insertBefore(arrayBar.childNodes[mid+1+j],arrayBar.childNodes[k])
        // await arrayBar.childNodes[k].after(arrayBar.childNodes[mid+1+j])
        console.log("abcd", arrayBar.childNodes[mid+1+j].id);

        await arrayBar.insertBefore(arrayBar.childNodes[mid+1+j],arrayBar.childNodes[k])

        console.log("after r "+arrayBar.childNodes[k].id);
        arrayBar.childNodes[mid+1+j].style.backgroundColor="#933dc9"
        arr[k]=right_array[j]
        j++;
        k++;
    }
    left_node.style.backgroundColor="#933dc9"
    right_node.style.backgroundColor="#933dc9"
    // console.log("merge end", left_array, right_array);
}
// console.log(Sort_by_Merging([2,10,4,8,9],"a","A"));