function riskCalculator() {

    const balance = parseFloat(prompt("Account Balance ($):"));

    const risk = parseFloat(prompt("Risk Percentage (%):"));

    const entry = parseFloat(prompt("Entry Price:"));

    const stop = parseFloat(prompt("Stop Loss Price:"));

    if (
        isNaN(balance) ||
        isNaN(risk) ||
        isNaN(entry) ||
        isNaN(stop)
    ) {
        return;
    }

    const riskAmount = balance * (risk / 100);

    const stopDistance = Math.abs(entry - stop);

    const lotSize = (riskAmount / stopDistance).toFixed(2);

    document.getElementById("toolResult").innerHTML = `
        <h3>Risk Calculation</h3>

        <p><strong>Risk Amount:</strong> $${riskAmount.toFixed(2)}</p>

        <p><strong>Stop Distance:</strong> ${stopDistance.toFixed(2)}</p>

        <p><strong>Suggested Lot Size:</strong> ${lotSize}</p>
    `;
}
