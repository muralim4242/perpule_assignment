import React from "react";
import Map from "../../uiComponents/Map";
import SidebarWithFilters from "./components/SidebarWithFilters";
import "./index.css";
import isEmpty from "lodash/isEmpty";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import sourceIcon from "assets/images/source.png";
import destinationIcon from "assets/images/destination.png";

class Finder extends React.Component {
  state = {
    source: "",
    destination: "",
    sourceLatLng: {},
    destinationLatLng: {},
    isDirectionShown: false,
    isEntityTypeShown: false,
    data: {},
    entityTypes: []
  };

  handleChange = (property, value) => {
    this.setState({ [property]: value });
  };

  handleSelect = (property, value) => {
    let self = this;
    geocodeByAddress(value)
      .then(results => getLatLng(results[0]))
      .then(latLng => self.setState({ [property]: latLng }))
      .catch(error => console.error("Error", error));
  };

  handleInfoBoxToggle = index => {
    let { entityTypes } = this.state;
    this.setState({
      entityTypes: entityTypes.map(
        (entity, i) =>
          index === i ? { ...entity, labelStatus: !entity.labelStatus } : entity
      )
    });
  };

  getDirection = () => {
    let { source, destination, sourceLatLng, destinationLatLng } = this.state;
    if (!isEmpty(sourceLatLng) && !isEmpty(destinationLatLng)) {
      let entityTypes = [
        {
          isLabelShown: true,
          icon: sourceIcon,
          position: sourceLatLng,
          address: source
        },
        {
          isLabelShown: true,
          icon: destinationIcon,
          position: destinationLatLng,
          address: destination
        }
      ];
      this.setState({
        isDirectionShown: true,
        isEntityTypeShown: true,
        entityTypes
      });
    }
  };

  render() {
    let {
      entityTypes,
      source,
      destination,
      sourceLatLng,
      destinationLatLng,
      isDirectionShown,
      isEntityTypeShown
    } = this.state;
    let {
      handleInfoBoxToggle,
      handleChange,
      handleSelect,
      getDirection
    } = this;
    return (
      <div>
        <div className="flex-container">
          <div className="filter-box">
            <SidebarWithFilters
              {...{
                source,
                destination,
                handleChange,
                handleSelect,
                getDirection
              }}
            />
          </div>

          <div className="map-box">
            <Map
              onInfoBoxToggle={handleInfoBoxToggle}
              isEntityTypeShown={isEntityTypeShown}
              isDirectionShown={isDirectionShown}
              source={sourceLatLng}
              destination={destinationLatLng}
              entityTypes={entityTypes}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Finder;
