import { useRecoilValue } from "recoil";
import { UserRuleState } from "../../data/globalState";
import { importFolder } from "../../utils/importFolder";
import Course from "./Course";

const CourseList = () => {
  const userRule = useRecoilValue(UserRuleState);

  const Images = importFolder(
    require.context(
      "../../../public/images/course",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  const courses = [
    {
      id: "courses-1",
      course: "courses-",
      image: Images["1.png"],
      lecturer: "courses-",
      value: 10,
      url: `${userRule === "Admin" ? "/admin/courses" : "/courses"}/courses-1`,
      editUrl: `${
        userRule === "Admin" ? "/admin/courses" : "/courses"
      }/courses-1/edit`,
    },
    {
      id: "courses-2",
      course: "courses-",
      image: Images["2.png"],
      lecturer: "courses-",
      value: 10,
      url: `${userRule === "Admin" ? "/admin/courses" : "/courses"}/courses-2`,
      editUrl: `${
        userRule === "Admin" ? "/admin/courses" : "/courses"
      }/courses-2/edit`,
    },
    {
      id: "courses-3",
      course: "courses-",
      image: Images["3.jpg"],
      lecturer: "courses-",
      value: 10,
      url: `${userRule === "Admin" ? "/admin/courses" : "/courses"}/courses-3`,
      editUrl: `${
        userRule === "Admin" ? "/admin/courses" : "/courses"
      }/courses-3/edit`,
    },
    {
      id: "courses-4",
      course: "courses-",
      image: Images["4.jpg"],
      lecturer: "courses-",
      value: 10,
      url: `${userRule === "Admin" ? "/admin/courses" : "/courses"}/courses-4`,
      editUrl: `${
        userRule === "Admin" ? "/admin/courses" : "/courses"
      }/courses-4/edit`,
    },
    {
      id: "courses-5",
      course: "courses-",
      image: Images["5.png"],
      lecturer: "courses-",
      value: 10,
      url: `${userRule === "Admin" ? "/admin/courses" : "/courses"}/courses-5`,
      editUrl: `${
        userRule === "Admin" ? "/admin/courses" : "/courses"
      }/courses-5/edit`,
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
      {courses.map((course, index) => {
        return (
          <div key={index}>
            <Course {...course} />
          </div>
        );
      })}
    </div>
  );
};

export default CourseList;
