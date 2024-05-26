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
export default { calculateCentroid };
