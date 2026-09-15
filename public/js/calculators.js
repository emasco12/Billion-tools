function showResult(html) {
    document.getElementById("toolResult").innerHTML = html;
}

function riskCalculator() {

    const balance = Number(document.getElementById("balance").value);

    const risk = Number(document.getElementById("riskPercent").value);

    const amount = balance * risk / 100;

    showResult(`
        <h3>Risk Amount</h3>
        <h2>$${amount.toFixed(2)}</h2>
    `);

}

function positionCalculator() {

    const balance = Number(document.getElementById("balance").value);

    const stop = Number(document.getElementById("stopValue").value);

    const risk = Number(document.getElementById("riskPercent").value);

    const lots = ((balance * risk / 100) / stop).toFixed(2);

    showResult(`
        <h3>Recommended Position Size</h3>
        <h2>${lots} Lots</h2>
    `);

}

function profitCalculator() {

    const entry = Number(document.getElementById("entryPrice").value);

    const exit = Number(document.getElementById("exitPrice").value);

    const profit = ((exit - entry) * 100).toFixed(2);

    showResult(`
        <h3>Estimated Profit</h3>
        <h2>$${profit}</h2>
    `);

}

function pipCalculator() {

    const entry = Number(document.getElementById("entryPrice").value);

    const exit = Number(document.getElementById("exitPrice").value);

    const pips = Math.abs(exit - entry).toFixed(2);

    showResult(`
        <h3>Price Movement</h3>
        <h2>${pips} USD</h2>
    `);

}
