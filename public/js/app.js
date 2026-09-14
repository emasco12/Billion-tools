const API = "https://billion-tools.onrender.com/api";

// --------------------
// Live Gold Price
// --------------------

async function loadMarket() {

    try {

        const res = await fetch(`${API}/market`);
        const data = await res.json();

        if (data.commodities && data.commodities.length > 0) {

            document.getElementById("goldPrice").innerHTML =
                data.commodities[0].close || data.commodities[0].price;

            document.getElementById("goldChange").innerHTML =
                (data.commodities[0].percent_change || "0") + "%";

            document.getElementById("goldUpdated").innerHTML =
                "Updated " + new Date().toLocaleTimeString();

        }

    } catch (e) {
        console.log(e);
    }

}

// --------------------
// AI Intelligence
// --------------------

async function loadAI() {

    try {

        const res = await fetch(`${API}/ai`);
        const data = await res.json();

        // AI Signal
        document.getElementById("signal").innerHTML = data.recommendation;
        document.getElementById("confidence").innerHTML = data.confidence;
        document.getElementById("analysis").innerHTML = data.comment;

        // Gold Analysis
        document.getElementById("trend").innerHTML = data.trend;
        document.getElementById("marketBias").innerHTML = data.marketBias;
        document.getElementById("trendStrength").innerHTML = data.trendStrength;
        document.getElementById("riskLevel").innerHTML = data.riskLevel;
        document.getElementById("marketSession").innerHTML = data.marketSession;
        document.getElementById("riskReward").innerHTML = data.riskReward;

        // Gold Scanner
        document.getElementById("breakoutStatus").innerHTML = data.breakoutStatus;
        document.getElementById("momentumStatus").innerHTML = data.momentumStatus;
        document.getElementById("scannerTrend").innerHTML = data.scannerTrend;
        document.getElementById("scannerVolatility").innerHTML = data.scannerVolatility;

        // Gold Strength
        document.getElementById("strengthScore").innerHTML = data.strengthScore + "/100";
        document.getElementById("buyProbability").innerHTML = data.buyProbability;
        document.getElementById("sellProbability").innerHTML = data.sellProbability;
        document.getElementById("overallSignal").innerHTML = data.overallSignal;

        // Trading Levels
        document.getElementById("entry").innerHTML = data.entry;
        document.getElementById("support").innerHTML = data.stopLoss;
        document.getElementById("resistance").innerHTML = data.takeProfit;

    } catch (e) {
        console.log(e);
    }

}

// --------------------
// Market Sentiment
// --------------------

async function loadSentiment() {

    try {

        const res = await fetch(`${API}/sentiment`);
        const data = await res.json();

        document.getElementById("sentiment").innerHTML =
            `${data.sentiment} (${data.score}%)`;

    } catch (e) {
        console.log(e);
    }

}

// --------------------
// News
// --------------------

async function loadNews() {

    try {

        const res = await fetch(`${API}/news`);
        const news = await res.json();

        let html = "";

        news.forEach(item => {

            html += `
            <div class="news-item">
                <div class="news-title">${item.title}</div>
                <div class="news-source">${item.source}</div>
            </div>
            `;

        });

        document.getElementById("newsList").innerHTML = html;

    } catch (e) {
        console.log(e);
    }

}

// --------------------
// Economic Calendar
// --------------------

async function loadCalendar() {

    try {

        const res = await fetch(`${API}/calendar`);
        const events = await res.json();

        let html = "";

        events.forEach(item => {

            html += `
            <div class="calendar-item">
                <strong>${item.currency}</strong><br>
                ${item.event}<br>
                ${item.time}
            </div>
            `;

        });

        document.getElementById("calendarList").innerHTML = html;

    } catch (e) {
        console.log(e);
    }

}

// --------------------
// Initial Load
// --------------------

loadMarket();
loadAI();
loadSentiment();
loadNews();
loadCalendar();

// --------------------
// Auto Refresh
// --------------------

setInterval(loadMarket, 30000);
setInterval(loadAI, 30000);
setInterval(loadSentiment, 30000);
setInterval(loadNews, 60000);
setInterval(loadCalendar, 60000);
