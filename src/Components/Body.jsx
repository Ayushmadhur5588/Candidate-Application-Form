import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addJob } from "../utils/jobsSlice";
const Body = () => {
  const dispatch = useDispatch();

  const getData = async () => {
    const response = await fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          limit: 10,
          offset: 0,
        }),
      }
    );

    const data = await response.json();

    console.log(data);
    dispatch(addJob(data.jdList));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="job-container"></div>
      <h2>Hello</h2>
    </div>
  );
};

export default Body;
