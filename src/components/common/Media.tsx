import React, { FunctionComponent } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles(() => ({
    responsiveImage: {
        height: 'auto',
        maxWidth: '100%'
    }
}));

export const Image: FunctionComponent<ImageComponentModel> = (props) => {
    const classes = useStyles();
    return (<img style={props.style !== undefined ? props.style instanceof Object ? props.style : {} : {}} className={classes.responsiveImage} src={props.src} alt={props.alt !== undefined ? props.alt : String(props.src)} />);
};

interface ImageComponentModel {
    style?: React.CSSProperties; src?: string; alt?: string
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    style: PropTypes.objectOf(PropTypes.any),
    alt: PropTypes.string
};
