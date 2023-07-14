const intervalArray=[400,200,100,50,1]

const randomInterval =(keyBar, speedOfVisualization)=> new Promise((res)=>{
    keyBar.style.backgroundColor="red"
    setTimeout(res, intervalArray[speedOfVisualization-1])})

const randomInterval2 =(greaterNode, speedOfVisualization)=> new Promise((res)=>{
        greaterNode.style.backgroundColor="blue"
        setTimeout(res, intervalArray[speedOfVisualization])})

async function Sort_by_Insertion(arr, arrayBar, speedOfVisualization) {
    for (let i = 1; i < arr.length; i++) {
        var key = arr[i];
        var keyBar=arrayBar.childNodes[i]
        await randomInterval(keyBar, speedOfVisualization)
        console.log(keyBar);
        j = i-1
        while (j>=0 && arr[j]> key){
            greaterNode=arrayBar.childNodes[j]
            await randomInterval2(greaterNode, speedOfVisualization)
            arr[j+1]=arr[j]
            arrayBar.insertBefore(keyBar, greaterNode)
            j-=1
            greaterNode.style.backgroundColor="#933dc9"
        }
        arr[j+1]=key
        keyBar.style.backgroundColor="#933dc9"
    }
    return arr
}

