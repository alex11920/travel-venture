import { useLoaderData } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { GiRoundStar } from "react-icons/gi";

const SelectedArea = () => {
  const list = useLoaderData();
  console.log(list);
  return (
    <div>
      <Navbar></Navbar>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-12">
        {/* list */}
        <span>
          <h2 className="text-4xl font-bold">Stay in Cox’s Bazar</h2>
          {list.map((data) => (
            <div
              key={data.id}
              data={data}
              className="flex flex-col md:flex-row lg:flex-row gap-10 my-8"
            >
              <div>
                <img className="w-80 rounded-md" src={data.hotel_image} />
              </div>
              <div className="flex flex-col gap-4">
                <h4 className="text-2xl font-bold">{data.hotel_name}</h4>
                <p className="text-lg font-medium yellow">
                  {data.guests} guests
                </p>
                <div className="flex gap-3">
                  <p>
                    <span className="text-xl">{data.rooms.bedrooms}</span>{" "}
                    bedrooms
                  </p>
                  <p>
                    <span className="text-xl">{data.rooms.beds}</span> beds
                  </p>
                  <p>
                    <span className="text-xl">{data.rooms.baths}</span> baths
                  </p>
                </div>
                <p>
                  Cancellation Availability:{" "}
                  <span
                    className={
                      data.cancellation_flexibility === "Yes"
                        ? "font-medium text-green-500"
                        : "font-medium text-red-500"
                    }
                  >
                    {data.cancellation_flexibility}
                  </span>
                </p>
                <div className="flex flex-col md:flex-row lg:flex-row items-center gap-8">
                  <p className="flex gap-2 items-center text-lg font-semibold">
                    <GiRoundStar className="yellow text-xl" /> {data.ratings} (
                    {data.total_users_given_ratings})
                  </p>
                  <p className="text-xl font-semibold">
                    ${data.cost_per_night}/
                    <span className="font-normal">night</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </span>

        {/* map */}
        <span>
          <p>section 2</p>
        </span>
      </div>
    </div>
  );
};

export default SelectedArea;
