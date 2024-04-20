import MapBoxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { useControl } from "react-map-gl";
const Geocoder = ({ setLocation }) => {
  const REACT_APP_MAPBOX_TOKEN =
    "pk.eyJ1IjoidmVudTY3OSIsImEiOiJjbHV6OTh5YjcxODd2MmtvM2Z6amdzdzN3In0._c7gUKHPj667Iv1MApWAQw";
  const ctrl = new MapBoxGeocoder({
    accessToken: REACT_APP_MAPBOX_TOKEN,
    marker: false,
    collapsed: true,
  });
  useControl(() => ctrl);
  ctrl.on("result", (e) => {
    // console.log(e);
    setLocation({
      place: e.result.place_name,
      long: e.result.center[0],
      lat: e.result.center[1],
    });
  });
  return null;
};

export default Geocoder;
