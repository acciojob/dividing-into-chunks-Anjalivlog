const arr = [1, 2, 3, 4, 1, 0, 2, 2];
const arr1 = [];
const divide = (arr, n) => {
  // Write your code here
	for (let start = 0; start < arr.length; start++) {
		let subarr = "";
		let sum = 0;
		for (let end = 0; end < arr.length; end++) {
			sum = sum + arr[end];
            subarr = subarr + arr[end] + "";
			if (sum <= n) {
				arr1.push(subarr);
			}
		}
	}
	return arr1;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
 