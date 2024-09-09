const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // this prevents the form from submitting to the server

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector("#results");

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please provide a valid height`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please provide a valid weight`;
    } else {
        const BMI = (weight / ((height * height) / 10000)).toFixed(1); // Calculate BMI and fix to 1 decimal point
        let category = '';

        // Determine the BMI category
        if (BMI < 18.6) {
            category = 'Underweight';
        } else if (BMI >= 18.6 && BMI <= 24.9) {
            category = 'Normal Range';
        } else {
            category = 'Overweight';
        }

        // Show the result with the BMI value and category
        result.innerHTML = `
            <span>Your BMI is: ${BMI}</span><br>
            <span>You are in the <strong>${category}</strong> category.</span>
        `;
    }
});
