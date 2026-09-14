async function loadAI() {

    try {

        const res = await fetch(`${API}/ai`);
        const data = await res.json();

        document.getElementById("signal").innerHTML = data.recommendation;
        document.getElementById("confidence").innerHTML = data.confidence;
        document.getElementById("analysis").innerHTML = data.comment;

        document.getElementById("trend").innerHTML = data.trend;
        document.getElementById("marketSession").innerHTML = data.marketSession;
        document.getElementById("marketBias").innerHTML = data.marketBias;
        document.getElementById("trendStrength").innerHTML = data.trendStrength;
        document.getElementById("riskLevel").innerHTML = data.riskLevel;
        document.getElementById("riskReward").innerHTML = data.riskReward;

        document.getElementById("entry").innerHTML = data.entry;
        document.getElementById("support").innerHTML = data.stopLoss;
        document.getElementById("resistance").innerHTML = data.takeProfit;

    } catch (e) {
        console.log(e);
    }

}
