
        const form = document.getElementById('bmiForm');
        const result = document.querySelector('.result');

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const height = parseFloat(document.getElementById('height').value);
            const weight = parseFloat(document.getElementById('weight').value);

            if (isNaN(height) || height <= 0) {
                result.innerHTML = "Please enter a valid height.";
                result.style.color = "red";
                return;
            }

            if (isNaN(weight) || weight <= 0) {
                result.innerHTML = "Please enter a valid weight.";
                result.style.color = "red";
                return;
            }

            const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

            let status = '';
            if (bmi < 18.6) {
                status = "Underweight";
            } else if (bmi < 25) {
                status = "Normal";
            } else {
                status = "Overweight";
            }

            result.style.color = "black";
            result.innerHTML = `<strong>BMI: ${bmi}</strong> (${status})`;
            console.log(result.innerHTML = `<strong>BMI: ${bmi}</strong> (${status})`)
        });

