import { useLoaderData } from "react-router-dom";
import Navbar from "../shared/Navbar";
import { GiRoundStar } from "react-icons/gi";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

const SelectedArea = () => {
  const list = useLoaderData();
  const [dataClick, setDataClick] = useState(null);

  useEffect(() => {
    if (list.length > 0 && !dataClick) {
      setDataClick(list[0]);
    }
  }, [list, dataClick]);

  const handleDataClick = (data) => {
    setDataClick(data);
  };

  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <h2 className="text-4xl font-bold pt-8">Stay in Cox’s Bazar</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-24 mt-4">
        {/* list */}
        <span className="col-span-1">
          {list.map((data) => (
            <div
              onClick={() => handleDataClick(data)}
              key={data.id}
              data={data}
              className="flex flex-col md:flex-row lg:flex-row gap-10 my-8 cursor-pointer hover:back-yellow"
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
        {dataClick && (
          <>
            <span>
              <MapContainer
                center={[
                  dataClick.location.latitude,
                  dataClick.location.longitude,
                ]}
                zoom={20}
                style={{ height: "800px", borderRadius: "12px" }}
              >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker
                  position={[
                    dataClick.location.latitude,
                    dataClick.location.longitude,
                  ]}
                ></Marker>
              </MapContainer>
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default SelectedArea;
