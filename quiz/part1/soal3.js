function cariMedian(arr) {
    let result = 0 
    let jarak = arr.length
    let tengah = Math.floor(jarak / 2)
    arr.sort((a, b) => a - b )

    if(arr.length % 2 !== 0){
        result = arr[tengah]
    }else {
        jarak = arr.length  / 2
        result = (arr[jarak - 1] + arr[jarak]) / 2

    }
    return result
}
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 6
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5
  
