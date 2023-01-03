import React from "react";

const ProjectCards = (props) => {
  return props.list.map((item) => (
    <div
      key={item.title}
      className=" max-w-xs xs:w-1/6 md:w-1/4 flex flex row justify-center p-0 m-0"
    >
      <img
        className="xs:w-2/6 object-scale-down"
        alt="Card image "
        src={item.image}
      />
    </div>
  ));
};

export default ProjectCards;
