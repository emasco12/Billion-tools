try {
  app.use("/api/market", marketRoutes);
  console.log("✓ market");
} catch (e) {
  console.error("market failed", e);
}

try {
  app.use("/api/ai", aiRoutes);
  console.log("✓ ai");
} catch (e) {
  console.error("ai failed", e);
}

try {
  app.use("/api/news", newsRoutes);
  console.log("✓ news");
} catch (e) {
  console.error("news failed", e);
}

try {
  app.use("/api/auth", authRoutes);
  console.log("✓ auth");
} catch (e) {
  console.error("auth failed", e);
}

try {
  app.use("/api/calendar", calendarRoutes);
  console.log("✓ calendar");
} catch (e) {
  console.error("calendar failed", e);
}
