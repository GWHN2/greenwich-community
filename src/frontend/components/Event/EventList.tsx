import React from "react";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import API from "../../data/api";
import { UserDataState, UserRoleState } from "../../data/globalState";
import { importFolder } from "../../utils/importFolder";
import Course from "../Courses/Course";

const EventList = () => {
  const userRole = useRecoilValue(UserRoleState);
  const userData = useRecoilValue(UserDataState);
  const Images = importFolder(
    require.context(
      "../../../public/images/course",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  const {
    isLoading,
    data: events,
    isError,
    refetch,
  } = useQuery(["events"], async (): Promise<any> => {
    const response = await API.get(`/events/`, {
      headers: {
        "x-access-token": userData.access_token,
      },
    });

    return response.data?.data;
  });
  console.log(events);

  if (isLoading) {
    return;
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {events &&
          events.map((course, index) => {
            return (
              <div key={index}>
                <Course {...course} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default EventList;
