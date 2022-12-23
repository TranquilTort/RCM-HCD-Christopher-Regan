import * as React from 'react';

declare var google: any;

interface Props {
  lat: number;
  lng: number;
}




class GoogleMap extends React.Component<Props> {
  map: any;

  componentDidMount() {
    this.map = new google.maps.Map(
      document.getElementById('map'),
      {
        
        center: { lat: this.props.lat, lng: this.props.lng },
        zoom: 8,

      }
    );
    const marker = new google.maps.Marker({
      position: { lat: this.props.lat, lng: this.props.lng },
      map: this.map,
      label: 'A',
      draggable: true
    });
  }

  render() {
    return <div id="map" style={{ width: '400px', height: '400px' }} />;
  }
}


export default GoogleMap;