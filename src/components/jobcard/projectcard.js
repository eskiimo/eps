import React from "react";

const ProjectCards = (props) => {
  return props.list.map((item, index) => (
    <div
      key={index}
      className=" w-2/4 md:w-1/4 flex flex-row justify-center p-0 m-0"
    >
      <img
        className="w-3/6 object-scale-down"
        alt="Card image "
        src={item.image}
      />
    </div>
  ));
};

export default ProjectCards;
