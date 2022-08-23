import React from "react";
import { useRecoilValue } from "recoil";
import { UserRoleState } from "../../data/globalState";
import { importFolder } from "../../utils/importFolder";
import Course from "../Courses/Course";

const EventList = () => {
  const userRole = useRecoilValue(UserRoleState);

  const Images = importFolder(
    require.context(
      "../../../public/images/course",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  const events = [
    {
      id: "events-1",
      course: "events-",
      image: Images["1.png"],
      lecturer: "events-",
      value: 10,
      url: `${userRole === "Admin" ? "/admin/events" : "/events"}/events-1`,
      editUrl: `${
        userRole === "Admin" ? "/admin/events" : "/events"
      }/events-1/edit`,
    },
    {
      id: "events-2",
      course: "events-",
      image: Images["2.png"],
      lecturer: "events-",
      value: 10,
      url: `${userRole === "Admin" ? "/admin/events" : "/events"}/events-2`,
      editUrl: `${
        userRole === "Admin" ? "/admin/events" : "/events"
      }/events-2/edit`,
    },
    {
      id: "events-3",
      course: "events-",
      image: Images["3.jpg"],
      lecturer: "events-",
      value: 10,
      url: `${userRole === "Admin" ? "/admin/events" : "/events"}/events-3`,
      editUrl: `${
        userRole === "Admin" ? "/admin/events" : "/events"
      }/events-3/edit`,
    },
    {
      id: "events-4",
      course: "events-",
      image: Images["4.jpg"],
      lecturer: "events-",
      value: 10,
      url: `${userRole === "Admin" ? "/admin/events" : "/events"}/events-4`,
      editUrl: `${
        userRole === "Admin" ? "/admin/events" : "/events"
      }/events-4/edit`,
    },
    {
      id: "events-5",
      course: "events-",
      image: Images["5.png"],
      lecturer: "events-",
      value: 10,
      url: `${userRole === "Admin" ? "/admin/events" : "/events"}/events-5`,
      editUrl: `${
        userRole === "Admin" ? "/admin/events" : "/events"
      }/events-5/edit`,
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {events.map((course, index) => {
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
