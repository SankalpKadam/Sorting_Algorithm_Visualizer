
async function bubbleSort(arr, speedOfVisualization)
{
	var i, j, temp;
	// var swapped;
	for (i = 0; i < arr.length-1; i++)
	{
		// swapped = false;
		for (j = 0; j < (arr.length - i-1); j++)
		{
            await blankAwait(speedOfVisualization)
            var comparision_bar_1 = randomArrayBar[j]
            await randomInterval(comparision_bar_1, speedOfVisualization)
            var comparision_bar_2 = randomArrayBar[j+1]
            await randomInterval2(comparision_bar_2, speedOfVisualization)
			if (arr[j] > arr[j + 1])
			{
				// Swap arr[j] and arr[j+1]
                var temp_bar = randomArrayBar[j]
                randomArrayBar[j] = randomArrayBar[j+1]
                randomArrayBar[j+1] = temp_bar
                renderAllBars(randomArrayBar)
                comparision_bar_1.style.backgroundColor="#933dc9"
                comparision_bar_2.style.backgroundColor="#933dc9"
				temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
				// swapped = true;
			}
            else{
                comparision_bar_1.style.backgroundColor="#933dc9"
                comparision_bar_2.style.backgroundColor="#933dc9"
				   
            }
		}

		// if (swapped == false)
		// break;
	}
}
async function Sort_by_Bubbling(arr, speedOfVisualization) {
    await bubbleSort(arr, speedOfVisualization)
}

// Sort_by_Bubbling([10,1,7,11,2],"a")