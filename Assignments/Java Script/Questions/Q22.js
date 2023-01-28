/* 22. The following is an array of 10 students ages:
    => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    - Sort the array and find the min and max age
    - Find the median age(one middle item or two middle items divided by two)
    - Find the average age(all items divided by number of items)
    - Find the range of the ages(max minus min)
    - Compare the value of (min - average) and (max - average), use abs() method. */




    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
    //sort:
    console.log(ages.sort());

    //min:
    console.log('Min-', Math.min(19, 22, 19, 24, 20, 25, 26, 24, 25, 24));

    //max:
    console.log('Max-', Math.max(19, 22, 19, 24, 20, 25, 26, 24, 25, 24));

   //average age:
   const average = ages.reduce((a, b) => a + b, 0) / ages.length;
   console.log('Average age-' , average);

  //Range of the ages:

function range(start, end) {
    if(start === end) return [start];
    return [start, ...range(start + 1, end)];
}
console.log(range(19,26)); 


// Compare the value of (min - average) and (max - average), use abs() method :

const minMinusAvg = Math.abs(ages[0] - average);
const maxMinusAvg = Math.abs(ages[ages.length - 1] - average);
if (minMinusAvg > maxMinusAvg) {
    console.log("min - average is greater than max - average")
} 
else if (minMinusAvg < maxMinusAvg) {
    console.log("max - average is greater than min - average");
} 
else {
    console.log("Both are equal");
}
  