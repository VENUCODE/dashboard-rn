import { useMapsLibrary } from "@vis.gl/react-google-maps";
import { useEffect, useRef, useState } from "react";

const PlaceAutocomplete = ({ onPlaceSelect }) => {
  const [placeAutocomplete, setPlaceAutocomplete] = useState(null);
  const inputRef = useRef(null);
  const places = useMapsLibrary("places");

  useEffect(() => {
    if (!places || !inputRef.current) return;

    const options = {
      fields: ["geometry", "name", "formatted_address"],
    };

    setPlaceAutocomplete(new places.Autocomplete(inputRef.current, options));
  }, [places]);

  useEffect(() => {
    if (!placeAutocomplete) return;

    const handlePlaceChanged = () => {
      const place = placeAutocomplete.getPlace();
      if (place && place.geometry) {
        onPlaceSelect(place);
      }
    };

    placeAutocomplete.addListener("place_changed", handlePlaceChanged);


  }, [onPlaceSelect, placeAutocomplete]);

  return (
    <div
      className="p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.2)", borderRadius: "0.5rem" }}
    >
      <input
        className="form-control search-input h-100 w-100 fs-5"
        ref={inputRef}
      />
    </div>
  );
};

export default PlaceAutocomplete;
