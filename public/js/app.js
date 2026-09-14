<!DOCTYPE html>
<html lang="en">

<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>ODERINDE GOLD INTELLIGENCE</title>

<link rel="preconnect" href="https://fonts.googleapis.com">

<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

<link rel="stylesheet" href="css/style.css">

<link rel="stylesheet"
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">

</head>

<body>

<div class="app">

<!-- ================= SIDEBAR ================= -->

<aside class="sidebar">

<div class="logo">

<div class="logo-icon">
<i class="fas fa-coins"></i>
</div>

<div>
<h2>ODERINDE</h2>
<span>Gold Intelligence</span>
</div>

</div>

<nav>

<a class="active">
<i class="fas fa-house"></i>
<span>Dashboard</span>
</a>

<a>
<i class="fas fa-chart-line"></i>
<span>Gold Intelligence</span>
</a>

<a>
<i class="fas fa-chart-area"></i>
<span>Gold Analysis</span>
</a>

<a>
<i class="fas fa-magnifying-glass-chart"></i>
<span>Gold Scanner</span>
</a>

<a>
<i class="fas fa-bullseye"></i>
<span>Gold Zones</span>
</a>

<a>
<i class="fas fa-newspaper"></i>
<span>Gold News</span>
</a>

<a>
<i class="fas fa-calendar-days"></i>
<span>Economic Calendar</span>
</a>

<a>
<i class="fas fa-calculator"></i>
<span>Gold Tools</span>
</a>

<a>
<i class="fas fa-robot"></i>
<span>AI Assistant</span>
</a>

<a>
<i class="fas fa-gear"></i>
<span>Settings</span>
</a>

</nav>

</aside>

<!-- ================= MAIN ================= -->

<main class="main">

<header class="topbar">

<div>

<h1>ODERINDE GOLD INTELLIGENCE</h1>

<p>Professional Gold Intelligence Platform</p>

</div>

<div class="actions">

<button>
<i class="fas fa-bell"></i>
</button>

<button>
<i class="fas fa-user"></i>
</button>

</div>

</header>

<section class="dashboard">

<!-- ================= Row 1 ================= -->

<div class="grid">

<div class="card gold-card">

<h3>
<i class="fas fa-coins"></i>
Live Gold Price
</h3>

<h1 id="goldPrice">Loading...</h1>

<p id="goldChange">Connecting...</p>

<small id="goldUpdated">
Waiting for live data...
</small>

</div>

<div class="card ai-card">

<h3>🤖 AI Gold Intelligence</h3>

<div class="signal">
<span id="signal">WAIT</span>
</div>

<p>

Confidence

<strong id="confidence">--</strong>

</p>

<p id="analysis">

Loading AI...

</p>

</div>

</div><!-- ================= Row 2 ================= -->

<div class="grid">

    <div class="card">

        <h3>📊 Market Sentiment</h3>

        <h2 id="sentiment">Loading...</h2>

    </div>

    <div class="card">

        <h3>📈 Trend</h3>

        <h2 id="trend">Loading...</h2>

    </div>

    <div class="card">

        <h3>⚡ Volatility</h3>

        <h2 id="volatility">Loading...</h2>

    </div>

</div>

<!-- ================= Row 3 ================= -->

<div class="grid">

    <div class="card">

        <h3>🎯 Support</h3>

        <h2 id="support">--</h2>

    </div>

    <div class="card">

        <h3>🚀 Resistance</h3>

        <h2 id="resistance">--</h2>

    </div>

    <div class="card">

        <h3>💰 Entry Zone</h3>

        <h2 id="entry">--</h2>

    </div>

</div>

<!-- ================= Row 4 ================= -->

<div class="grid">

    <div class="card news">

        <h3>📰 Gold News</h3>

        <div id="newsList">

            Loading...

        </div>

    </div>

    <div class="card calendar">

        <h3>📅 Economic Calendar</h3>

        <div id="calendarList">

            Loading...

        </div>

    </div>

</div>// ================= Gold Tools =================

function riskCalculator() {

    let balance = prompt("Account Balance ($)");
    let risk = prompt("Risk (%)");

    if (!balance || !risk) return;

    let amount = (Number(balance) * Number(risk)) / 100;

    document.getElementById("toolResult").innerHTML =
        `<b>Maximum Risk:</b> $${amount.toFixed(2)}`;
}

function positionCalculator() {

    let balance = prompt("Account Balance ($)");
    let risk = prompt("Risk (%)");
    let stopLoss = prompt("Stop Loss (pips)");

    if (!balance || !risk || !stopLoss) return;

    let riskMoney = (Number(balance) * Number(risk)) / 100;
    let lot = riskMoney / (Number(stopLoss) * 10);

    document.getElementById("toolResult").innerHTML =
        `<b>Suggested Lot Size:</b> ${lot.toFixed(2)} Lots`;
}

function profitCalculator() {

    let lots = prompt("Lot Size");
    let pips = prompt("Profit Target (pips)");

    if (!lots || !pips) return;

    let profit = Number(lots) * Number(pips) * 10;

    document.getElementById("toolResult").innerHTML =
        `<b>Estimated Profit:</b> $${profit.toFixed(2)}`;
}

function pipCalculator() {

    let entry = prompt("Entry Price");
    let exit = prompt("Exit Price");

    if (!entry || !exit) return;

    let pips = Math.abs(Number(exit) - Number(entry)) * 100;

    document.getElementById("toolResult").innerHTML =
        `<b>Pip Movement:</b> ${pips.toFixed(1)} pips`;
}
