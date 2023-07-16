async function Sort_by_Merging(arr, arrayBar, speedOfVisualization) {
    MergeSort(arr, 0, arr.length-1, arrayBar, speedOfVisualization);
    return arr
}

async function MergeSort(arr, start, end, arrayBar, speedOfVisualization) {
    if (start >= end){
         return
    }
    var mid = Math.floor((start + end)/2)
    var keyBar=arrayBar.childNodes[mid]
    await randomInterval(keyBar, speedOfVisualization)
    MergeSort(arr, start, mid, arrayBar, speedOfVisualization)
    MergeSort(arr, mid+1, end, arrayBar, speedOfVisualization)
    Merge(arr, start, mid, end, arrayBar, speedOfVisualization)

    
}
async function Merge(arr, start, mid, end, arrayBar, speedOfVisualization) {
    var size_of_left = mid-start+1
    var size_of_right = end-mid

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
    while(i < size_of_left && j < size_of_right){
        if (left_array[i]<=right_array[j]){
            arr[k]=left_array[i]
            i++;
            k++;
        }
        else{
            arr[k]=right_array[j]
            j++;
            k++;
        }
    }  
    while(i<size_of_left){
        arr[k]=left_array[i]
        i++;
        k++;
    }
    while(j<size_of_right){
        arr[k]=right_array[j]
        j++;
        k++;
    }
}
// console.log(Sort_by_Merging([10,2,5,4,3],"a","A"));