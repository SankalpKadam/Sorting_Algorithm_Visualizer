const intervalArray=[1000,200,100,50,1]

const randomInterval =(keyBar, speedOfVisualization)=> new Promise((res)=>{
    keyBar.style.backgroundColor="red"
    setTimeout(res, intervalArray[speedOfVisualization-1])})

const randomInterval2 =(greaterNode, speedOfVisualization)=> new Promise((res)=>{
        greaterNode.style.backgroundColor="blue"
        setTimeout(res, intervalArray[speedOfVisualization])})

const blankAwait=()=> new Promise((res)=>{
    setTimeout(res,10)
})