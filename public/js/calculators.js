/* =====================================================
   ODERINDE GOLD INTELLIGENCE TOOLS
===================================================== */

function showResult(text) {
    const result = document.getElementById("toolResult");
    if (result) result.innerHTML = text;
}

/* ================= RISK ================= */

function riskCalculator() {

    const balance = Number(prompt("Account Balance ($)", "1000"));

    const risk = Number(prompt("Risk %", "2"));

    if (!balance || !risk) return;

    const amount = (balance * risk) / 100;

    showResult(`
        <h3>Risk Calculator</h3>
        <p>Account: <b>$${balance}</b></p>
        <p>Risk: <b>${risk}%</b></p>
        <p>You should risk <b>$${amount.toFixed(2)}</b></p>
    `);

}

/* ================= POSITION SIZE ================= */

function positionCalculator() {

    const balance = Number(prompt("Account Balance ($)", "1000"));

    const stop = Number(prompt("Stop Loss (USD)", "10"));

    const risk = Number(prompt("Risk %", "2"));

    if (!balance || !stop || !risk) return;

    const lot = ((balance * risk / 100) / stop).toFixed(2);

    showResult(`
        <h3>Position Size</h3>
        <p>Recommended Position:</p>
        <h2>${lot} Lots</h2>
    `);

}

/* ================= PROFIT ================= */

function profitCalculator() {

    const entry = Number(prompt("Entry Price", "3600"));

    const exit = Number(prompt("Exit Price", "3620"));

    const lots = Number(prompt("Lot Size", "1"));

    if (!entry || !exit || !lots) return;

    const profit = ((exit - entry) * lots * 100).toFixed(2);

    showResult(`
        <h3>Profit Calculator</h3>
        <h2>$${profit}</h2>
    `);

}

/* ================= PIPS ================= */

function pipCalculator() {

    const entry = Number(prompt("Entry Price", "3600"));

    const exit = Number(prompt("Exit Price", "3615"));

    if (!entry || !exit) return;

    const pips = Math.abs(exit - entry).toFixed(2);

    showResult(`
        <h3>Pip Calculator</h3>
        <h2>${pips} USD Move</h2>
    `);

}
