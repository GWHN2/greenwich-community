import { useState } from "react";
import Spinner from "../common/Spinner";
import CellLayout from "./CellLayout";
import Table from "./Table";

const TableSection = ({ data }: { data: any[] }) => {
  const [loaded, setLoaded] = useState(true);
  const columns = [
    {
      Header: "Lecturer",
      accessor: "lecturer",
    },
    {
      Header: "Course",
      accessor: "course",
    },
    {
      Header: "Rating",
      accessor: "rating",
      Cell: CellLayout,
    },
  ];

  return (
    <div className="">
      <div className="container">
        {loaded ? (
          <Table columns={columns} data={data} />
        ) : (
          <div className="flex flex-row items-center justify-center">
            <Spinner />
            Loading
          </div>
        )}
      </div>
    </div>
  );
};

export default TableSection;
