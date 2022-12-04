function minimumSwaps(arr) {
	let counter = 0;
	for (let i = 0; i < arr.length; i++) {
		let min = i
		for (let j = i; j < arr.length; j++) {
			if (arr[min] > arr[j]) {
				min = j
			}
		}

		if (i!== min) {
			let temp = arr[i]
			arr[i] = arr[min]
			arr[min] = temp
			counter++
		}
	}
	console.log(counter)
	return counter++
	
}
minimumSwaps([4, 3, 1, 2])
minimumSwaps([2, 3, 4, 1, 5])
minimumSwaps([1, 3, 5, 2, 4, 6, 7])