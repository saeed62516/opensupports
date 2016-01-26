import React from 'react';

let Icon = React.createClass({

    propTypes: {
        name: React.PropTypes.string.isRequired
    },

    render() {
        return (
            <img className="language-icon" src={`../images/icons/${this.props.name}.png`} />
        );
    }

});

export default Icon;
