import React from "react";

type GlobalFilterProps = {
  preGlobalFilteredRows: any;
  globalFilter: any;
  setGlobalFilter: any;
};

const GlobalFilter = ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}: GlobalFilterProps) => {
  const [value, setValue] = React.useState(globalFilter);
  const onChange = (value: any) => {
    setGlobalFilter(value || undefined);
  };

  return (
    <input
      className="px-5 py-2 rounded-lg shadow"
      value={value || ""}
      onChange={(e) => {
        setValue(e.target.value);
        onChange(e.target.value);
      }}
      placeholder={`Search...`}
      style={{
        fontSize: "1.1rem",
        border: "0",
      }}
    />
  );
};

export default GlobalFilter;
