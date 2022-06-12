import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

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

export const getMarkerPositions = () => {
  const data = [{ lat: 55.3781, lng: 3.4360 }, { lat: 52.3555, lng: 1.1743 }, { lat: 52.63087, lng: 1.27937 }]
  return data
}
