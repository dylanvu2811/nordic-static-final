import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Breadcrumbs from '../../components/Contact/Breadcrumbs/Breadcrumbs';
import Map from '../../components/Contact/Map/Map';
import FormContact from '../../components/Contact/FormContact/FormContact';

class Contact extends PureComponent {
    render() {
        return (
          <div className="container contact_container">
            {/* Breadcrumbs */}
            <Breadcrumbs />
            {/* Map Container */}
            <Map />
            {/* Contact Us */}
            <FormContact />
          </div>
        );
    }
}

Contact.propTypes = {

};

export default Contact;