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

// -------- AI Assistant --------

document.getElementById("askAI").addEventListener("click", async () => {

    const question = document.getElementById("aiQuestion").value.trim();

    if (!question) {
        document.getElementById("aiResponse").innerHTML =
            "Please enter a question.";
        return;
    }

    document.getElementById("aiResponse").innerHTML =
        "🤖 AI is analysing the market...";

    try {

        const res = await fetch(`${API}/ai`);
        const data = await res.json();

        document.getElementById("aiResponse").innerHTML = `
            <h3>${data.recommendation}</h3>
            <p>${data.comment}</p>
            <hr>
            <p><strong>Confidence:</strong> ${data.confidence}</p>
            <p><strong>Trend:</strong> ${data.trend}</p>
            <p><strong>Entry:</strong> ${data.entry}</p>
            <p><strong>Stop Loss:</strong> ${data.stopLoss}</p>
            <p><strong>Take Profit:</strong> ${data.takeProfit}</p>
            <p><strong>Risk Reward:</strong> ${data.riskReward}</p>
        `;

    } catch (err) {

        document.getElementById("aiResponse").innerHTML =
            "Unable to contact AI server.";

        console.log(err);

    }

});
