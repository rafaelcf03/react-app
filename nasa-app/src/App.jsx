import { useState, useEffect } from "react";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import LoadingPage from "./components/LoadingPage";

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // sourcery skip: avoid-function-declarations-in-blocks
  function handleToggleModal() {
    setShowModal(!showModal);
  }

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.NASA_API_KEY;
      const url =
        "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`;

      const today = new Date().toDateString();
      const localKey = `NASA-${today}`;

      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        return;
      }

      localStorage.clear();

      try {
        const response = await fetch(url);
        const apiData = await response.json();
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAPIData();
  }, []);

  return (
    <>
      {data ? <Main data={data} /> : <LoadingPage />}
      {showModal && (
        <SideBar handleToggleModal={handleToggleModal} data={data} />
      )}
      {data && <Footer handleToggleModal={handleToggleModal} data={data} />}
    </>
  );
}
