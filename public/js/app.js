const API = "/api";

/* =====================================================
   ODERINDE GOLD INTELLIGENCE
   AI GOLD TRADING DASHBOARD
===================================================== */

const $ = (id) => document.getElementById(id);

function set(id, value) {
    const el = $(id);
    if (el) el.textContent = value;
}

function setHTML(id, value) {
    const el = $(id);
    if (el) el.innerHTML = value;
}

/* ===================== MARKET ===================== */

async function loadPrice() {

    try {

        const res = await fetch(`${API}/market`);
        const data = await res.json();

        set("goldPrice", data.price || "--");
        set("goldChange", data.change || "--");
        set("goldUpdated", "Updated " + (data.updated || "--"));

        set("entry", data.entry || "--");
        set("tradeEntry", data.entry || "--");

        set("dailyHigh", data.dailyHigh || "--");
        set("dailyLow", data.dailyLow || "--");

        set("weeklyHigh", data.weeklyHigh || "--");
        set("weeklyLow", data.weeklyLow || "--");

        set("monthlyHigh", data.monthlyHigh || "--");
        set("monthlyLow", data.monthlyLow || "--");

    }

    catch (err) {

        console.error("Market Error:", err);

    }

}

/* ===================== AI ===================== */

async function loadAI() {

    try {

        const res = await fetch(`${API}/ai`);
        const data = await res.json();

        set("signal", data.recommendation || "WAIT");
        set("confidence", data.confidence || "--");
       const circle = document.getElementById("confidenceCircle");

if (circle) {

    const value = parseInt(data.confidence) || 0;

    const circumference = 377;

    const offset = circumference - (value / 100) * circumference;

    circle.style.strokeDashoffset = offset;

}
        set("analysis", data.comment || "Waiting...");

        set("trend", data.trend || "Neutral");
        set("trendCard", data.trend || "Neutral");

        set("sentimentCard", data.sentiment || "Neutral");

        set("volatility", data.volatility || "Normal");

        set("stopLoss", data.stopLoss || "--");
        set("tradeSL", data.stopLoss || "--");

        set("tp1", data.takeProfit1 || data.takeProfit || "--");
        set("tp2", data.takeProfit2 || "--");
        set("tp3", data.takeProfit3 || "--");

        set("tradeTP1", data.takeProfit1 || data.takeProfit || "--");
        set("tradeTP2", data.takeProfit2 || "--");
        set("tradeTP3", data.takeProfit3 || "--");

        set("tradeSignal", data.recommendation || "WAIT");
        set("tradeConfidence", data.confidence || "--");
        set("tradeBias", data.trend || "Neutral");

        set("summaryTrend", data.trend || "--");
        set("summarySignal", data.recommendation || "--");
        set("summaryConfidence", data.confidence || "--");
        set("summaryMomentum", data.momentum || "--");
        set("summaryRisk", data.risk || "--");
        set("summaryMove", data.expectedMove || "--");
       // ===== NEW AI FIELDS =====

set("marketBias", data.marketBias || "--");
set("trendStrength", data.trendStrength || "--");
set("riskLevel", data.riskLevel || "--");

set("breakout", data.breakoutStatus || "--");
set("momentum", data.momentumStatus || "--");

set("scannerTrend", data.scannerTrend || "--");
set("scannerVolatility", data.scannerVolatility || "--");

set("strengthScore", data.strengthScore || "--");
set("buyProbability", data.buyProbability || "--");
set("sellProbability", data.sellProbability || "--");

set("overallSignal", data.overallSignal || "--");

set("smartMoney", data.smartMoney || "--");

set("marketSession", data.marketSession || "--");

set("analysis", data.comment || "--");
set("coach", data.comment || "--");

    }

    catch (err) {

        console.error("AI Error:", err);

    }

}/* ===================== SENTIMENT ===================== */

async function loadSentiment() {

    try {

        const res = await fetch(`${API}/sentiment`);
        const data = await res.json();

        set("sentiment", `${data.sentiment} (${data.score}%)`);
        set("sentimentCard", data.sentiment || "Neutral");

    } catch (err) {

        console.error("Sentiment Error:", err);

    }

}

/* ===================== TECHNICAL ANALYSIS ===================== */

async function loadAnalysis() {
   /* ===================== GOLD ZONES ===================== */

async function loadZones() {

    try {

        const res = await fetch(`${API}/zones`);
        const data = await res.json();

        set("zoneEntry", data.zoneEntry);
        set("buyZone", data.buyZone);
        set("sellZone", data.sellZone);

        set("supportZone", data.supportZone);
        set("resistanceZone", data.resistanceZone);

        set("institutionOB", data.institutionOB);

        set("demandZone", data.demandZone);
        set("supplyZone", data.supplyZone);

        set("liquidityZone", data.liquidityZone);
        set("breakoutZone", data.breakoutZone);

    } catch (err) {

        console.error("Zones Error:", err);

    }

}

    try {

        const res = await fetch(`${API}/analysis`);
        const data = await res.json();

        set("tf1m", data.tf1m || "--");
        set("tf5m", data.tf5m || "--");
        set("tf15m", data.tf15m || "--");
        set("tf30m", data.tf30m || "--");
        set("tf1h", data.tf1h || "--");
        set("tf4h", data.tf4h || "--");
        set("tf1d", data.tf1d || "--");

        set("rsi", data.rsi || "--");
        set("macd", data.macd || "--");
        set("ema20", data.ema20 || "--");
        set("ema50", data.ema50 || "--");
        set("ema200", data.ema200 || "--");
        set("atr", data.atr || "--");

        set("buyLiquidity", data.buyLiquidity || "--");
        set("sellLiquidity", data.sellLiquidity || "--");
        set("nearestLiquidity", data.nearestLiquidity || "--");
        set("liquiditySweep", data.liquiditySweep || "--");

        set("orderFlow", data.orderFlow || "--");
        set("liquidityStatus", data.liquidityStatus || "--");
        set("structure", data.structure || "--");
        set("institutions", data.institutions || "--");
        set("recommendation", data.recommendation || "--");

        set("liquidity", data.liquiditySweep || "--");
        set("bos", data.bos || "--");
        set("choch", data.choch || "--");
        set("ob", data.orderBlock || "--");
        set("fvg", data.fvg || "--");

        setHTML(
            "coach",
            data.coach ||
            "AI is analysing today's market conditions..."
        );

        setHTML(
            "marketReason",
            data.marketReason ||
            "Waiting for AI reasoning..."
        );

    } catch (err) {

        console.error("Analysis Error:", err);

    }

}/* ===================== NEWS ===================== */

async function loadNews() {

    try {

        const res = await fetch(`${API}/news`);
        const news = await res.json();

        const container = $("newsList");

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

        console.error("News Error:", err);

    }

}

/* ===================== ECONOMIC CALENDAR ===================== */

async function loadCalendar() {

    try {

        const res = await fetch(`${API}/calendar`);
        const events = await res.json();

        const container = $("calendarList");

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

        console.error("Calendar Error:", err);

    }

}

/* ===================== DASHBOARD ===================== */

async function loadDashboard() {

    await Promise.all([
    loadPrice(),
    loadAI(),
    loadSentiment(),
    loadAnalysis(),
    loadZones(),
    loadNews(),
    loadCalendar()
]);

    ]);

}

/* ===================== LIVE CLOCK ===================== */

function updateClock() {

    const now = new Date();

    set("lastUpdate", now.toLocaleTimeString());

    const hour = now.getUTCHours();

    let session = "Sydney";
    let status = "Closed";

    if (hour >= 0 && hour < 7) {

        session = "Tokyo";
        status = "Open";

    } else if (hour >= 7 && hour < 13) {

        session = "London";
        status = "Open";

    } else if (hour >= 13 && hour < 22) {

        session = "New York";
        status = "Open";

    }

    set("marketSession", session);
    set("marketStatus", status);

}

/* ===================== START APP ===================== */

window.addEventListener("DOMContentLoaded", () => {

    loadDashboard();

    updateClock();

    setInterval(loadDashboard, 30000);

    setInterval(updateClock, 1000);

});/* =====================================================
   UI HELPERS
===================================================== */

function updateSignalColors() {

    const ids = [
        "signal",
        "tradeSignal",
        "summarySignal"
    ];

    ids.forEach(id => {

        const el = document.getElementById(id);

        if (!el) return;

        const value = el.textContent.toUpperCase();

        el.classList.remove("buy", "sell", "wait");

        if (value.includes("BUY")) {

            el.classList.add("buy");

        } else if (value.includes("SELL")) {

            el.classList.add("sell");

        } else {

            el.classList.add("wait");

        }

    });

}

/* =====================================================
   API STATUS
===================================================== */

function apiConnected() {

    const api = document.getElementById("apiStatus");

    if (api) {

        api.textContent = "Connected";
        api.style.color = "#00d26a";

    }

}

function apiDisconnected() {

    const api = document.getElementById("apiStatus");

    if (api) {

        api.textContent = "Disconnected";
        api.style.color = "#ff4d4d";

    }

}

/* =====================================================
   LOADER
===================================================== */

function showLoader() {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.display = "flex";

    }

}

function hideLoader() {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.display = "none";

    }

}

/* =====================================================
   REFRESH
===================================================== */

async function refreshDashboard() {

    try {

        showLoader();

        await loadDashboard();

        apiConnected();

        updateSignalColors();

    } catch (err) {

        console.error(err);

        apiDisconnected();

    } finally {

        hideLoader();

    }

}

/* =====================================================
   AUTO START
===================================================== */

window.addEventListener("load", () => {

    refreshDashboard();

    setInterval(refreshDashboard, 30000);

});
