import React, { useEffect, useState } from "react";
import { getPublicMatches } from "../data/matches";
import { matchStatus } from "../constants";

const CustomMatches = () => {
  const [matches, setMatches] = useState([]);

  const fetchMatches = async () => {
    try {
      const data = await getPublicMatches();
      setMatches(data);
      console.log(
        "ON-GOINH MATCHES: " +
          data.filter((data) => data?.status === matchStatus.SCHEDULED)
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMatches();
  }, []);

  return <div>CustomMatches</div>;
};

export default CustomMatches;
