import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

export const handleSelect = async (address, setAddress, setLatLng) => {
  try {
    const res = await geocodeByAddress(address);
    setAddress(res[0].formatted_address)

    const latLng = await getLatLng(res[0]);
    setLatLng(latLng)
  } catch (e) {
    console.warn("ERROR", e)
  }
};
