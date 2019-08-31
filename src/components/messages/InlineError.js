import React from 'react';
import PropTypes from 'prop-types';

/**
 * Inline Error Component
 * 
 * @param text error message
 * @returns {*}
 * @author ngoclq91<ngocsonqs@gmail.com>
 */
const InlineError = ({ text }) => (
    <span style={{ color: '#ae5856'}}>{text}</span>
);

/**
 * Define đầu vào (props) của InlineError Component
 * 
 * @type {{text: shim}}
 */
InlineError.propTypes = {
    text: PropTypes.string.isRequired
};
    
export default InlineError;
