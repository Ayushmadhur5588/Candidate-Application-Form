import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { url } from "../utils/constants";
import { addAllJob, addJob } from "../utils/jobsSlice";

const useFetchJobData = () => {
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(0);

  const getData = async () => {
    console.log("offset" + offset);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        limit: 10,
        offset: offset,
      }),
    });

    const data = await response.json();

    dispatch(addJob(data.jdList));
    dispatch(addAllJob(data.jdList));
  };

  useEffect(() => {
    getData();
  }, [offset]); 

const handleScroll = () => {
    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.body.offsetHeight;

    if (scrollPosition >= pageHeight) {
      setOffset((prevOffset) => prevOffset + 10);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return function cleanUp() {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};

export default useFetchJobData;
