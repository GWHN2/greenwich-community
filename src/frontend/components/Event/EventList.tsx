import React from "react";
import { useQuery } from "react-query";
import { useRecoilValue, useSetRecoilState } from "recoil";
import API from "../../data/api";
import {
  EditingItemIdState,
  ShowingModalState,
  UserDataState,
  UserRoleState,
} from "../../data/globalState";
import { getHeaders } from "../../utils/getHeaders";
import { importFolder } from "../../utils/importFolder";
import Button from "../common/Button";
import RefetchButton from "../common/RefetchButton";
import Course from "../Courses/Course";

const EventList = () => {
  const userRole = useRecoilValue(UserRoleState);
  const userData = useRecoilValue(UserDataState);
  const setShowingModal = useSetRecoilState(ShowingModalState);
  const setEditingItem = useSetRecoilState(EditingItemIdState);

  const {
    isLoading,
    data: events,
    isError,
    refetch,
  } = useQuery(["events"], async (): Promise<any> => {
    const headers = getHeaders();
    const response = await API.get(`/events/`, {
      headers,
    });

    return response.data?.data;
  });

  if (isLoading || isError) {
    return (
      <div className="flex">
        <RefetchButton refetch={refetch} loading={isLoading} />
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-center">
        {userRole === "Admin" && (
          <Button
            onClick={() => {
              setEditingItem(null);
              setShowingModal("ManageCourse");
            }}
          >
            Add
          </Button>
        )}
      </div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {events &&
          events.map((course: any, index: number) => {
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
