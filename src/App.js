import React, { useState, useEffect } from "react";
import "./App.css";
import Tmbd from "./Tmbd";
import Header from "./components/Header";


export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);
  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmbd.getHomeList();
      console.log(list);
      setMovieList(list);

      let originals = list.filter((i) => i.slug === "originals");
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmbd.getMovieInfo(chosen.id, "tv");
      console.log(chosenInfo);
      setFeatureData(chosenInfo);
    };
    loadAll();
  }, []);

  return( 
    <div className="page">
      <Header black={blackHeader} />
    </div>
  );
};
