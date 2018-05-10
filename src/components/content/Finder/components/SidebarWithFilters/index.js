import React from "react";
import PlacesAutocomplete from 'react-places-autocomplete'

const SidebarWithFilters = (props) => {
  const {source,destination,handleChange,handleSelect,getDirection}=props;
  return (
    <div>
      <div>
        <h5>Search Routes</h5>
      </div>
      <hr className="hr" />
      <div className="row">

              <label className="input-label">Source</label>
              <PlacesAutocomplete
                value={source}
                onChange={(searchText)=>{handleChange("source",searchText)}}
                onSelect={(searchedItem)=>{handleSelect("sourceLatLng",searchedItem)}}
               >
                  {({ getInputProps, suggestions, getSuggestionItemProps }) => (
                    <div>
                      <input
                        {...getInputProps({
                          placeholder: 'Search source ...',
                          className: 'col s12'
                        })}
                      />
                      <div className={suggestions.length>0?"collection":undefined}>
                        {suggestions.map(suggestion => {
                          const className = suggestion.active ? 'collection-item active' : 'collection-item';
                          // inline style for demonstration purpose
                          const style = suggestion.active
                                      ? { backgroundColor: '#26a69a', cursor: 'pointer' }
                                      : { backgroundColor: '#ffffff', cursor: 'pointer' };
                          return (
                            <div {...getSuggestionItemProps(suggestion, { className, style })}>
                              <span>{suggestion.description}</span>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </PlacesAutocomplete>

      </div>
      <div className="row">

        <label className="input-label">Destination</label>
        <PlacesAutocomplete
          value={destination}
          onChange={(searchText)=>{handleChange("destination",searchText)}}
          onSelect={(searchedItem)=>{handleSelect("destinationLatLng",searchedItem)}}
         >
            {({ getInputProps, suggestions, getSuggestionItemProps }) => (
              <div>
                <input
                  {...getInputProps({
                    placeholder: 'Search destination ...',
                    className: 'col s12'
                  })}
                />
                <div className={suggestions.length>0?"collection":undefined}>
                  {suggestions.map(suggestion => {
                    const className = suggestion.active ? 'collection-item active' : 'collection-item';
                    // inline style for demonstration purpose
                    const style = suggestion.active
                                ? { backgroundColor: '#26a69a', cursor: 'pointer' }
                                : { backgroundColor: '#ffffff', cursor: 'pointer' };
                    return (
                      <div {...getSuggestionItemProps(suggestion, { className, style })}>
                        <span>{suggestion.description}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>

      </div>

        <div className="center">
          <a className="waves-effect waves-light btn" onClick={(e)=>{getDirection()}}>Get Direction</a>
        </div>
    </div>
  );
};

export default SidebarWithFilters;
