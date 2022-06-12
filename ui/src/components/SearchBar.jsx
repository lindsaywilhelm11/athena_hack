import PlacesAutocomplete from 'react-places-autocomplete';
import { handleSelect } from './functions/map';
import "./map.scss"

export function SearchBar({ addressText, setAddressText, setLatLng }) {
  return <PlacesAutocomplete
    value={addressText}
    onChange={setAddressText}
    onSelect={address => handleSelect(address, setAddressText, setLatLng)}
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
