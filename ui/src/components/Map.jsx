import { useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import { handleSelect } from './functions/map';
import "./map.scss"

export function Map() {
  // HOOKS
  const [addressText, setAddress] = useState("");
  const [latLng, setLatLng] = useState({});

  console.log("DATA", addressText, latLng)
  return <PlacesAutocomplete
    value={addressText}
    onChange={setAddress}
    onSelect={address => handleSelect(address, setAddress, setLatLng)}
  >
    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
      <div>
        <input
          {...getInputProps({
            placeholder: 'Search Places ...',
            className: 'location-search-input',
          })}
        />
        <div className="autocomplete-dropdown-container">
          {loading && <div>Loading...</div>}
          {suggestions.map(suggestion => {
            const className = suggestion.active
              ? 'suggestion-item--active'
              : 'suggestion-item';
            // inline style for demonstration purpose
            return (
              <div
                key={Math.random()}
                {...getSuggestionItemProps(suggestion, {
                  className,
                })}
              >
                <span>{suggestion.description}</span>
              </div>
            );
          })}
        </div>
      </div>
    )}
  </PlacesAutocomplete>

}
