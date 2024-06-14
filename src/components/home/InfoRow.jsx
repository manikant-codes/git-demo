import React from "react";

function InfoRow(props) {
  console.log("props", props);
  if (props.imageFirst) {
    return (
      <div className="p-8">
        <h2 className="text-4xl font-bold text-center text-indigo-600 mb-8">
          {props.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-[400px] rounded-lg overflow-hidden ">
            <img
              src={props.img}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-xl mb-8">{props.desc}</p>
            <button className="bg-indigo-600 px-6 py-3 rounded-full text-white hover:bg-indigo-800">
              Know More
            </button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="p-8">
      <h2 className="text-4xl font-bold text-center text-indigo-600 mb-8">
        {props.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="order-2 md:order-1">
          <p className="text-xl mb-8">{props.desc}</p>
          <button className="bg-indigo-600 px-6 py-3 rounded-full text-white hover:bg-indigo-800">
            Know More
          </button>
        </div>
        <div className="h-[400px] rounded-lg overflow-hidden order-1 md:order-2">
          <img src={props.img} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default InfoRow;