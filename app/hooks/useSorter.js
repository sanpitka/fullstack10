import { useState } from "react";

const useSorter = () => {
  const [sorter, setSorter] = useState("latest");

  let orderBy = "CREATED_AT";
  let orderDirection = "DESC";

  if (sorter === "latest") {
    orderBy = "CREATED_AT";
    orderDirection = "DESC";
  } else if (sorter === "highest") {
    orderBy = "RATING_AVERAGE";
    orderDirection = "DESC";
  } else if (sorter === "lowest") {
    orderBy = "RATING_AVERAGE";
    orderDirection = "ASC";
  }

  return { orderBy, orderDirection, sorter, setSorter };
};

export default useSorter;