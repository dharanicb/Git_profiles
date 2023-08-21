import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import List from "./Components/List";
import { CircularProgress } from "@mui/material";

const App = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const priorDate = moment().subtract(30, "days").format("YYYY-MM-DD");

  const loadRepositories = () => {
    axios
      .get(
        `https://api.github.com/search/repositories?q=created:>${priorDate}&sort=stars&order=desc&page=${page}`
      )
      .then((res) => {
        setData((prevData) => [...prevData, ...res.data.items]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadRepositories();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrolledToBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight;

    if (scrolledToBottom && !loading) {
      setPage((prevPage) => prevPage + 1);
      setLoading(true);
    }
  };

  return (
    <>
      <List data={data} />
      {loading && (
        <div style={{ textAlign: "center" }}>
          <CircularProgress style={{ color: "#36D7B7" }} size={60} />
        </div>
      )}
    </>
  );
};

export default App;
