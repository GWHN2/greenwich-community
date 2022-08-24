import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import RefetchButton from "../../frontend/components/common/RefetchButton";
import { getHeaders } from "../../frontend/utils/getHeaders";
import { useQuery } from "react-query";
import API from "../../frontend/data/api";

const Event = () => {
  const router = useRouter();
  const asPath = router.asPath; // asPath is the path of the page that is currently being rendered
  const { slug } = router.query; //slug is the id of the event
  const { isLoading, data, isError, refetch } = useQuery(
    [slug, slug],
    async (): Promise<any> => {
      const headers = getHeaders();
      const response = await API.get(`${asPath}`, {
        headers,
      });

      return response.data?.data;
    }
  );

  console.log(data);

  if (isLoading || isError) {
    return <RefetchButton refetch={refetch} loading={isLoading} />;
  }

  return <div>{slug}</div>;
};

export default Event;
