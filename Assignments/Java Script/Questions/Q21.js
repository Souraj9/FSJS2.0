// 21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.






let country = ["India", "Canada", "China", "Russia", "Germany"];

function chek(countryname) {
  for (let i = 0; i <= country.length - 1; i++) {
    if (country[i] == countryname) {
      return countryname.toUpperCase();
    }
    else {
      country.push(countryname);
      return country;
    }
  }
}

let output = chek("Ethiopia");
console.log(output);