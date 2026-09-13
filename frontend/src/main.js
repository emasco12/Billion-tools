import "./style.css";

document.getElementById("app").innerHTML = `
<div class="app">
    <aside class="sidebar">
        <h2>ODERINDE GOLD</h2>

        <button>Dashboard</button>
        <button>Markets</button>
        <button>Smart Money</button>
        <button>Signals</button>
        <button>AI Assistant</button>
        <button>Journal</button>
        <button>Settings</button>
    </aside>

    <main class="content">

        <h1>Professional Trading Terminal</h1>

        <div class="cards">

            <div class="card">
                <h3>EUR/USD</h3>
                <p>Loading...</p>
            </div>

            <div class="card">
                <h3>BTC/USD</h3>
                <p>Loading...</p>
            </div>

            <div class="card">
                <h3>Gold</h3>
                <p>Loading...</p>
            </div>

        </div>

        <div class="chart">

            TradingView Chart Coming Next

        </div>

    </main>

</div>
`;
