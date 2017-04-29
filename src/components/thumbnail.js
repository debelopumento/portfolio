import React, { Component } from 'react';
import reactCSS from 'reactcss';

const styles = reactCSS({
    default: {
        thumbnailContainer: {
            marginTop: 0,
            position: 'absolute',
            width: '100%',
            //zIndex: 1,
        },
    },
});

class Thumbnail extends React.PureComponent {
    render() {
        if (this.props.display === true) {
            return (
                <div style={styles.thumbnailContainer}>
                    <img src={this.props.imgUrl} />
                </div>
            );
        }
        return <div />;
    }
}

export default Thumbnail;
