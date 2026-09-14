const API = "/api";

/* ===================== MARKET ===================== */

async function loadPrice() {
    try {
        const res = await fetch(`${API}/market`);
        const data = await res.json();

        document.getElementById("goldPrice").textContent = data.price;
        document.getElementById("goldChange").textContent = data.change;
        document.getElementById("goldUpdated").textContent =
            "Updated " + data.updated;

    } catch (err) {
        console.error(err);
    }
}

/* ===================== AI ===================== */

async function loadAI() {

    try {

        const res = await fetch(`${API}/ai`);
        const data = await res.json();

        document.getElementById("signal").textContent =
            data.recommendation;

        document.getElementById("confidence").textContent =
            data.confidence + "%";

        document.getElementById("analysis").textContent =
            data.comment;

        document.getElementById("trend").textContent =
            data.trend;

        document.getElementById("volatility").textContent =
            data.volatility || "Normal";

        document.getElementById("support").textContent =
            data.stopLoss;

        document.getElementById("resistance").textContent =
            data.takeProfit;

        document.getElementById("entry").textContent =
            data.entry;

    } catch (err) {
        console.error(err);
    }
}

/* ===================== SENTIMENT ===================== */

async function loadSentiment() {

    try {

        const res = await fetch(`${API}/sentiment`);
        const data = await res.json();

        document.getElementById("sentiment").textContent =
            `${data.sentiment} (${data.score}%)`;

    } catch (err) {
        console.error(err);
    }
}

/* ===================== NEWS ===================== */

async function loadNews() {

    try {

        const res = await fetch(`${API}/news`);
        const news = await res.json();

        const container = document.getElementById("newsList");

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
        console.error(err);
    }
}

/* ===================== CALENDAR ===================== */

async function loadCalendar() {

    try {

        const res = await fetch(`${API}/calendar`);
        const events = await res.json();

        const container = document.getElementById("calendarList");

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
        console.error(err);
    }
}

/* ===================== AI ASSISTANT ===================== */

async function askAI() {

    const question =
        document.getElementById("aiQuestion").value.trim();

    if (!question) return;

    const response =
        document.getElementById("aiResponse");

    response.innerHTML = "Thinking...";

    try {

        const res = await fetch(`${API}/assistant`, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                question
            })

        });

        const data = await res.json();

        response.innerHTML =
            data.answer || "No response.";

    } catch (err) {

        response.innerHTML =
            "Unable to contact AI.";

    }
}

document
.getElementById("askAI")
.addEventListener("click", askAI);

/* ===================== LOAD ===================== */

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

setInterval(loadDashboard, 30000);
