import React from "react";

const Foto1 = ({
  src,
  alt,
  grayscale = true,
  blur = "none",
  className = "",
}) => {
  let kelas = className;
  if (grayscale) kelas += " grayscale";
  if (blur && blur !== "none") kelas += ` ${blur}`;

  return <img src={src} alt={alt} className={kelas} />;
};

export default Foto1;
