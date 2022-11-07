import { useState, useEffect } from "react";
import { axiosClient } from "../../api/axios";
export const useGetTrends = (type) => {
  const typeCheck = ["movie", "person", "tv"];

  const check = typeCheck.some((value) => type === value);

  const [list, setList] = useState([]);
  useEffect(() => {
    if (!check) {
      console.error(`this : ${type} is wrong!!`);
      console.error("type should be *movie or *person or *tv");
    }

    axiosClient
      .get(`/trending/${type}/week`)
      .then((res) => setList(res.results))
      .catch(() => console.error("cant fetch data"));
  }, []);
  return list;
};
