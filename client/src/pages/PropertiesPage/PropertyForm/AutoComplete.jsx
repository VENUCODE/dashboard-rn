import { useEffect, useRef } from "react";

const AutoComplete = ({ onPlaceSelect }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      const autocomplete = new window.google.maps.places.Autocomplete(
        inputRef.current
      );

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        onPlaceSelect(place);
      });
    }
  }, []);

  return (
    <input ref={inputRef} type="text" placeholder="Search for places..." />
  );
};

export default AutoComplete;
