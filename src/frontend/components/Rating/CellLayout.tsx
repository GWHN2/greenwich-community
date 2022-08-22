import Button from "../common/Button";
import { Rating } from "../Profile";

const CellLayout = (props: any) => {
  const rating = props?.cell?.value || 0;
  return (
    <div className="cursor-pointer">
      <Rating rating={rating} baseWidth={15} />
    </div>
  );
};

export default CellLayout;
