"use client";
import Image from "next/image";

const InfoCard = ({ info }) => {
  return (
    <div className="prompt_card">
      <Image
        src={info.image_url}
        alt="vehicle_image"
        width={320}
        height={180}
        className="rounded-md w-full"
      />
      <h2 className="my-4 font-inter font-semibold text-lg text-gray-900">
        Running Red Light
      </h2>
      <p className="font-satoshi text-sm text-gray-900 ">Plate Number: {info.plate_number}</p>
      <p className="font-satoshi text-sm  text-gray-900">Location: {info.location}</p>

      <div className="mt-4 flex justify-between items-center">
        <p className="font-satoshi text-sm  text-gray-900">
          {new Date(info.created_at).toLocaleString("en-US", {
            dateStyle: "medium",
            timeStyle: "short",
          })}
        </p>
        <button className="black_btn">view more</button>
      </div>
    </div>
  );
};

export default InfoCard;
