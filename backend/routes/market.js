router.get("/", async (req, res) => {
    try {
        const market = await getMarketData();
        const gold = market.gold;

        res.json({
            price: gold.close || gold.price,
            change: gold.percent_change || "0%",
            updated: new Date().toLocaleTimeString()
        });

    } catch (err) {
        res.status(500).json({
            price: "--",
            change: "--",
            updated: "--"
        });
    }
});
