import { Card, CardActionArea } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./About.css";

export function About() {
  const [apiData, setApiData] = useState([]);
  const getData = async () => {
    let resp = await axios.get(
      "https://im-community.insightmonk.com/v1/posts?page=1&limit=10&sort=date"
    );
    setApiData(resp?.data?.results);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      
        <Card>
          <CardActionArea>
      {apiData?.map((list) => {
        console.log(list, "lisrt");
        return (
          <div className="MainCard">
            <p>
              {list?.id} {list.slug} {list.anscount}
            </p>
           </div>
        );

      })}
      </CardActionArea>
      </Card>
    </div>
  );
}

export default About;
