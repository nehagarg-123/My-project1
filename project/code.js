document.addEventListener("DOMContentLoaded", function () {
    // Find the button and add a click event listener
    document.getElementById("calculate-btn").addEventListener("click", calculateFare);
});

function calculateFare() {
    // Get distance and rate values from input fields
    let distance = parseFloat(document.getElementById("distance").value);
    let rate = parseFloat(document.getElementById("rate").value);

    // Check if inputs are valid numbers
    if (isNaN(distance) || distance <= 0) {
        alert("Please enter a valid distance.");
        return;
    }
    if (isNaN(rate) || rate <= 0) {
        alert("Please enter a valid rate per km.");
        return;
    }

    // Calculate fare
    let totalFare = distance * rate;

    // Display the calculated fare
    document.getElementById("fare-result").innerText = totalFare.toFixed(2);
}
