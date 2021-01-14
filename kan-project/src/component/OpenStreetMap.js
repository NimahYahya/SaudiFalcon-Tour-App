import React from 'react';
import {
  MapsComponent,
  LayersDirective,
  NavigationLineDirective,
  LayerDirective,
  MarkersDirective,
  NavigationLine,
  NavigationLinesDirective,
  MarkerDirective,
  Marker,
  Inject,
} from '@syncfusion/ej2-react-maps';

class OpenStreetMap extends React.Component {
  render() {
    return (
      <MapsComponent
        id="maps"
        zoomSettings={{ zoomFactor: 17 }}
        centerPosition={{ latitude: 24.7136, longitude: 46.6753 }}
      >
        <Inject services={[Marker, NavigationLine]} />
        <LayersDirective>
          <LayerDirective layerType="OSM">
            <MarkersDirective>
              <MarkerDirective
                visible={true}
                height={25}
                width={15}
                dataSource={[
                  {
                    latitude: 24.7136,
                    longitude: 46.6753,
                    name: 'Riyadh',
                  },
                ]}
              ></MarkerDirective>
            </MarkersDirective>
          </LayerDirective>
        </LayersDirective>
      </MapsComponent>
    );
  }
}

export default OpenStreetMap;
