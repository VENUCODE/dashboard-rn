import React from "react";
const calculateCentroid = (points) => {
  if (!points.length) return null;

  let sumLat = 0;
  let sumLng = 0;

  points.forEach((point) => {
    sumLat += point.latitude;
    sumLng += point.longitude;
  });

  const centroid = {
    lat: sumLat / points.length,
    lng: sumLng / points.length,
  };

  return centroid;
};
export const createIconDataUrl = async (IconComponent) => {
  const size = 32; // Adjust the size as needed
  const svgString = ReactDOMServer.renderToStaticMarkup(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="black"
    >
      <IconComponent />
    </svg>
  );

  const svgBlob = new Blob([svgString], {
    type: "image/svg+xml;charset=utf-8",
  });
  const url = URL.createObjectURL(svgBlob);
  return url;
};

export default { calculateCentroid };
