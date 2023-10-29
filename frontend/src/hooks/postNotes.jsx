import { useEffect, useState } from "react";
import backend from "../api/backend";
import axios from "axios";
export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const postAPI = async (name, date, transcript) => {
    const json = JSON.stringify({
      name: name,
      date: date,
      text: transcript,
    });

    try {
      const response = await axios.post("https://10.0.2.2:8080/transcripts", json, {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          'Content-Type': 'application/json'
        }
      });
      console.log("test") 
      setResults(response.data);
      console.log(response.config)
    } catch (err) {
      console.log(err);
      setErrorMessage("Something went wrong");
    }
  };
  
  return [postAPI, results, errorMessage];
};
