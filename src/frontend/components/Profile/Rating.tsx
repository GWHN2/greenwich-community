import { StarIcon } from "@heroicons/react/outline";

interface Props {
  rating: number; //2.5
  showTitle?: boolean;
  baseWidth?: number;
}

const length = 5;
const Rating = ({ rating, showTitle = false, baseWidth = 32 }: Props) => {
  return (
    <div
      className={`relative p-4 ${showTitle && "bg-white shadow-lg"} rounded-lg`}
    >
      {showTitle && (
        <div className="text-lg font-semibold text-primary-400">
          <span>SU2022 Rating</span>
        </div>
      )}
      <div>
        <div className={`flex flex-row items-end justify-center w-full`}>
          {[...Array(length)].map((_, index) => {
            const width =
              baseWidth +
              4 * (-Math.pow(index - Math.floor(length / 2), 2) + length);

            return (
              <div key={index}>
                {index === Math.floor(rating) ? (
                  <div className="relative">
                    <div
                      className="absolute overflow-hidden"
                      style={{ width: width * (rating % 1) }}
                    >
                      <Star width={width} fill />
                    </div>
                    <Star width={width} />
                  </div>
                ) : (
                  <Star width={width} fill={index < Math.floor(rating)} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
const Star = ({ fill = false, width }: { fill?: boolean; width: number }) => {
  return (
    <StarIcon
      className="text-yellow-200"
      strokeWidth={1}
      fill={fill ? "rgb(250 204 21)" : "none"}
      style={{ width: width }}
    />
  );
};
export default Rating;
