import React from "react";
import Button from "./Button";

const RefetchButton = ({
  refetch,
  loading = false,
}: {
  refetch: () => void;
  loading?: boolean;
}) => {
  return <Button>Refresh</Button>;
};

export default RefetchButton;
