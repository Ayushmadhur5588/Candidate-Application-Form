import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { url } from "../utils/constants";
import { addFilteredJob, addJob } from "../utils/jobsSlice";

const useFetchJobData = () => {
  const dispatch = useDispatch();
  const getData = async () => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        limit: 10,
        offset: 0,
      }),
    });

    const data = await response.json();

    dispatch(addJob(data.jdList));
    dispatch(addFilteredJob(data.jdList));
  };

  useEffect(() => {
    getData();
  }, []);
};

export default useFetchJobData;
