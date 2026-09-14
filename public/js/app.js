const API = "";

async function loadPrice() {
    try {
        const res = await fetch(`${API}/market`);
        const data = await res.json();

        document.getElementById("price").textContent = data.price;
        document.getElementById("change").textContent = data.change;
        document.getElementById("updated").textContent =
            "Updated " + data.updated;

    } catch (err) {
        console.log(err);
    }
}

async function loadAI() {

    try {

        const res = await fetch(`${API}/ai`);
        const data = await res.json();

        document.getElementById("signal").textContent = data.recommendation;
        document.getElementById("confidence").textContent = data.confidence;
        document.getElementById("analysis").textContent = data.comment;

        document.getElementById("trend").textContent = data.trend;
        document.getElementById("marketBias").textContent = data.marketBias;
        document.getElementById("trendStrength").textContent = data.trendStrength;
        document.getElementById("riskLevel").textContent = data.riskLevel;
        document.getElementById("marketSession").textContent = data.marketSession;
        document.getElementById("riskReward").textContent = data.riskReward;

        document.getElementById("breakoutStatus").textContent = data.breakoutStatus;
        document.getElementById("momentumStatus").textContent = data.momentumStatus;
        document.getElementById("scannerTrend").textContent = data.scannerTrend;
        document.getElementById("scannerVolatility").textContent = data.scannerVolatility;

        document.getElementById("strengthScore").textContent =
            data.strengthScore + "/100";

        document.getElementById("buyProbability").textContent =
            data.buyProbability;

        document.getElementById("sellProbability").textContent =
            data.sellProbability;

        document.getElementById("overallSignal").textContent =
            data.overallSignal;

        document.getElementById("entry").textContent = data.entry;
        document.getElementById("support").textContent = data.stopLoss;
        document.getElementById("resistance").textContent = data.takeProfit;

    } catch (err) {
        console.log(err);
    }

}async function loadSentiment() {
    try {
        const res = await fetch(`${API}/sentiment`);
        const data = await res.json();

        document.getElementById("sentiment").textContent =
            `${data.sentiment} (${data.score}%)`;

    } catch (err) {
        console.log(err);
    }
}

async function loadNews() {
    try {
        const res = await fetch(`${API}/news`);
        const news = await res.json();

        const container = document.getElementById("news");

        if (!container) return;

        container.innerHTML = "";

        news.forEach(item => {
            container.innerHTML += `
                <div class="news-card">
                    <h4>${item.title}</h4>
                    <small>${item.source}</small>
                </div>
            `;
        });

    } catch (err) {
        console.log(err);
    }
}

async function loadCalendar() {
    try {
        const res = await fetch(`${API}/calendar`);
        const events = await res.json();

        const container = document.getElementById("calendar");

        if (!container) return;

        container.innerHTML = "";

        events.forEach(event => {
            container.innerHTML += `
                <div class="calendar-card">
                    <strong>${event.currency}</strong><br>
                    ${event.event}<br>
                    <small>${event.time}</small>
                </div>
            `;
        });

    } catch (err) {
        console.log(err);
    }
}async function askAI() {
    const question = document.getElementById("aiQuestion").value.trim();

    if (!question) return;

    const responseBox = document.getElementById("aiResponse");
    responseBox.innerHTML = "Thinking...";

    try {
        const res = await fetch(`${API}/assistant`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                question: question
            })
        });

        const data = await res.json();

        responseBox.innerHTML = data.answer || "No response.";

    } catch (err) {
        responseBox.innerHTML = "Unable to contact AI assistant.";
        console.log(err);
    }
}

const askButton = document.getElementById("askAI");

if (askButton) {
    askButton.addEventListener("click", askAI);
}

async function loadDashboard() {
    await Promise.all([
        loadPrice(),
        loadAI(),
        loadSentiment(),
        loadNews(),
        loadCalendar()
    ]);
}

loadDashboard();

// Refresh every 30 seconds
setInterval(loadDashboard, 30000);
