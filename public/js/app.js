const API = "https://billion-tools.onrender.com/api";

// -------- Gold Price --------

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

// -------- AI --------

async function loadAI() {

    const res = await fetch(`${API}/ai`);
    const data = await res.json();

    document.getElementById("signal").innerHTML = data.recommendation;
    document.getElementById("confidence").innerHTML = data.confidence;
    document.getElementById("analysis").innerHTML = data.comment;
    document.getElementById("trend").innerHTML = data.trend;
    document.getElementById("entry").innerHTML = data.entry;
    document.getElementById("support").innerHTML = data.stopLoss;
    document.getElementById("resistance").innerHTML = data.takeProfit;

}

// -------- Market Sentiment --------

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

// -------- News --------

async function loadNews() {

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

}

// -------- Calendar --------

async function loadCalendar() {

    const res = await fetch(`${API}/calendar`);
    const events = await res.json();

    let html = "";

    events.forEach(item => {

        html += `
        <div class="calendar-item">
            <strong>${item.currency}</strong>
            ${item.event}
            <br>
            ${item.time}
        </div>
        `;

    });

    document.getElementById("calendarList").innerHTML = html;

}

// -------- Initial Load --------

loadMarket();
loadAI();
loadSentiment();
loadNews();
loadCalendar();

// -------- Auto Refresh --------

setInterval(loadMarket, 30000);
setInterval(loadAI, 30000);
setInterval(loadSentiment, 30000);
setInterval(loadNews, 60000);
setInterval(loadCalendar, 60000);
