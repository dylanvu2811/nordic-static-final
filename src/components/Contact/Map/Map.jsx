import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Map.scss'; 
class Map extends PureComponent {
    render() {
        return (
          <div className="row">
            <div className="col">
              <div id="google_map">
                <div className="map_container">
                  <div id="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.543641492938!2d106.70042331428701!3d10.769611262265567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4053872271%3A0xf2c978baf4ca340e!2zOTIgTmd1eeG7hW4gQ8O0bmcgVHLhu6ksIFBoxrDhu51uZyBOZ3V54buFbiBUaMOhaSBCw6xuaCwgUXXhuq1uIDEsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1565276906325!5m2!1svi!2s" width="100%" height="100%" frameBorder={0} style={{border: 0}} allowFullScreen />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

Map.propTypes = {

};

export default Map;