/* 25. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
    - The same groups apply to both men and women.
    - Underweight: BMI is less than 18.5
    - Normal weight: BMI is 18.5 to 24.9
    - Overweight: BMI is 25 to 29.9
    - Obese: BMI is 30 or more */





    function checkBmi(weight, height) {
        const bmi = (Math.round((weight / height ** 2) * 10)) / 10;
        console.log(`Your BMI is ${bmi}`)
    
        if (bmi < 18.5) {
            console.log("Underweight!");
        } else if (bmi >= 18.5 , bmi <= 24.9) {
            console.log("Normal Weight!");
        } else if (bmi >= 25 , bmi <= 29.9) {
            console.log(" Overweight!");
        } else {
            console.log("Obese!");
        }
    
    }
    
    // Please enter weight- in kg & height- in m^2
    const personsWeight = 75;
    const personsHeight = 1.82;
    checkBmi(personsWeight, personsHeight);