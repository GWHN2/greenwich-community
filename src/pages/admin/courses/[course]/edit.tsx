interface CourseProps {
  id: string;
  course: string;
  image: any;
  lecturer: string;
  value: number;
  url: string;
}

const Course = (props: CourseProps) => {
  const { id, course, image, lecturer, value, url } = props;

  return (
    <div className='flex flex-col items-center justify-center'>Edit Course Page</div>
  );
};

export default Course;
