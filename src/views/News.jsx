import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useFetchStore } from "../lib/fetchContext";

import Breadcrumb from "../common/Breadcrumb";
import NewCard from "./sections/new/NewCard";
import Newsletter from "./sections/new/Newsletter";

const News = () => {
  const { getData } = useFetchStore();
  const [newsData, setNewsData] = useState([]);

  const location = useLocation();
  const pathName = location.pathname;

  useEffect(() => {
    const getNews = async () => {
      const data = await getData("/news");
      setNewsData(data);
    };

    getNews();
  }, [getData]);

  return (
    <main>
      <section id="news">
        <div className="header">
          <Breadcrumb pathName={pathName} />
          <h1>Our News</h1>
        </div>
        <div className="container">
          {newsData.map((news) => (
            <NewCard key={news.id} data={news} />
          ))}
        </div>
      </section>
      <Newsletter />
    </main>
  );
};

export default News;
