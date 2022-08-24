import React, { useEffect, useState } from "react";
import axios from "axios";
import CardComponent from "../../Components/Card/card";

const Discover = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.facthunt.in/fostergem/v1/post/list/public")
      .then((response) => {
        setData(response.data.content);
      });
  }, []);

  return (
    <div style={{ flex: true }}>
      {data.map((article) => (
        <div style={{ width: "400px", display: "inline-block" }}>
          <CardComponent
            title={article.title}
            coverImageUrl={article.coverImageUrl}
          ></CardComponent>
        </div>
      ))}
    </div>
  );
};

export default Discover;
