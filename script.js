const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let chunks = [];
    let chunk = [];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (sum + arr[i] > n) {
            // start a new chunk
            chunks.push(chunk);
            chunk = [arr[i]];
            sum = arr[i];
        } else {
            // add to the current chunk
            chunk.push(arr[i]);
            sum += arr[i];
        }
    }

    // add the last chunk
    if (chunk.length > 0) {
        chunks.push(chunk);
    }

    return chunks;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
 