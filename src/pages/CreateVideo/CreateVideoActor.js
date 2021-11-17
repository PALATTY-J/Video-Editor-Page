import React from "react";
import classes from "./CreateVideoActor.module.scss";

const imagesArray = [
  {
    src: "https://raw.githubusercontent.com/PALATTY-J/Video-Editor-Page/main/assets/Rectangle%203.png",
    alt: "Actor 1",
    name: "Anna",
  },
  {
    src: "https://raw.githubusercontent.com/PALATTY-J/Video-Editor-Page/main/assets/Rectangle%204.png",
    alt: "Actor 1",
    name: "YoYo",
  },
  {
    src: "https://raw.githubusercontent.com/PALATTY-J/Video-Editor-Page/main/assets/Rectangle%205.png",
    alt: "Actor 1",
    name: "Skye",
  },
  {
    src: "https://raw.githubusercontent.com/PALATTY-J/Video-Editor-Page/main/assets/Rectangle%206.png",
    alt: "Actor 1",
    name: "Mike",
  },
  {
    src: "https://raw.githubusercontent.com/PALATTY-J/Video-Editor-Page/main/assets/Rectangle%207.png",
    alt: "Actor 1",
    name: "Vincent",
  },
  {
    src: "https://raw.githubusercontent.com/PALATTY-J/Video-Editor-Page/main/assets/Rectangle%208.png",
    alt: "Actor 1",
    name: "Peter",
  },
  {
    src: "https://raw.githubusercontent.com/PALATTY-J/Video-Editor-Page/main/assets/Rectangle%209.png",
    alt: "Actor 1",
    name: "May",
  },
];

const CreateVideoActor = () => {
  return (
    <div className={classes["actor-container"]}>
      {imagesArray.map((imagesData) => (
        <div>
          <img src={imagesData.src} alt={imagesData.alt} />
          <p>{imagesData.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CreateVideoActor;
