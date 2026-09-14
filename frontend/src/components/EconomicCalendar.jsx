export default function EconomicCalendar() {

  const events = [
    {
      time: "08:30",
      currency: "USD",
      event: "Non-Farm Payroll",
      impact: "High"
    },
    {
      time: "10:00",
      currency: "EUR",
      event: "ECB Interest Rate",
      impact: "High"
    },
    {
      time: "13:30",
      currency: "GBP",
      event: "CPI",
      impact: "Medium"
    }
  ];

  return (
    <div className="panel">

      <h2>Economic Calendar</h2>

      {events.map((event, index) => (

        <div
          key={index}
          style={{
            marginBottom: "12px",
            borderBottom: "1px solid #333",
            paddingBottom: "10px"
          }}
        >
          <strong>{event.time}</strong>

          <p>{event.currency}</p>

          <p>{event.event}</p>

          <p>
            Impact:
            <span
              style={{
                color:
                  event.impact === "High"
                    ? "#ff5252"
                    : "#ffd600"
              }}
            >
              {" "}
              {event.impact}
            </span>
          </p>

        </div>

      ))}

    </div>
  );
}
