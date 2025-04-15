import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import { AppDataContext } from "./context/AppDataContext";

function App() {
  const [watchlist, setWatchlist] = useState([]);
  const handleAddToWatchList = (movie) => {
    let newWatchlist = [...watchlist, movie];
    localStorage.setItem("moviesAppData", JSON.stringify(newWatchlist));
    setWatchlist(newWatchlist);
  };

  const handleDeleteFromWatchlist = (movieObj) => {
    let newWatchlist = watchlist.filter((movie) => {
      return movie.title !== movieObj.title;
    });
    setWatchlist(newWatchlist);
    localStorage.setItem("moviesAppData", JSON.stringify(newWatchlist));
  };

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("moviesAppData");
    if (!moviesFromLocalStorage) {
      return;
    }
    setWatchlist(JSON.parse(moviesFromLocalStorage));
  }, []);

  return (
    <>
      <AppDataContext.Provider
        value={{
          watchlist,
          setWatchlist,
          handleAddToWatchList,
          handleDeleteFromWatchlist,
        }}
      >
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Banner />
                  <Movies />
                </>
              }
            />
            <Route path="/watchlist" element={<WatchList />} />
          </Routes>
        </BrowserRouter>
      </AppDataContext.Provider>
    </>
  );
}

export default App;
