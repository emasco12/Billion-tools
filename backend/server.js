// Middleware
app.use(cors());
app.use(express.json());

// Serve Frontend
app.use(express.static(path.join(__dirname, "../public")));

// API Routes
app.use("/api/market", marketRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/calendar", calendarRoutes);

// Home Page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
});
