import { ArrowPathIcon } from "@heroicons/react/24/outline";
import React from "react";
import Button from "./Button";

const RefetchButton = ({
  refetch,
  loading = false,
}: {
  refetch: () => void;
  loading?: boolean;
}) => {
  return (
    <Button disabled={loading}>
      {loading ? "Fetching data..." : "Refetch"}
      <span
        className={`w-6 ml-2
      ${loading && "spin"}`}
      >
        <ArrowPathIcon />
      </span>
    </Button>
  );
};

export default RefetchButton;
