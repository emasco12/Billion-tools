import { useEffect, useState } from "react";

export default function NewsPanel() {

  const [news, setNews] = useState([]);

  useEffect(() => {

    fetch("/api/news")
      .then(res => res.json())
      .then(setNews)
      .catch(console.error);

  }, []);

  return (

    <div className="panel">

      <h2>Market News</h2>

      <ul>

        {news.map((item, index) => (

          <li key={index}>

            {item.title}

          </li>

        ))}

      </ul>

    </div>

  );

}
