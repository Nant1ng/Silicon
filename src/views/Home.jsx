import { useState, useEffect } from "react";
import Showcase from "./sections/homepage/Showcase";

const Home = () => {
  // const url = "https://kyhnet23-assignment.azurewebsites.net/api/specialists";
  // const [specialists, setSpecialists] = useState([]);

  /*   useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSpecialists(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, [url]); */

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await fetch(url);
  //       const data = await result.json();
  //       setSpecialists(data);
  //     } catch (error) {
  //       console.error("Error fetching data: ", error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  {
    /* {specialists.map((specialist, idx) => (
        <h1 key={idx}>
          {idx}: {specialist?.firstName}
        </h1>
      ))} */
  }
  return (
    <main>
      <Showcase />
    </main>
  );
};

export default Home;
