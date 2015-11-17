//librairies
import React, {PropTypes} from 'react';
import FocusComponents from 'focus-components';

// web components
import Panel from 'focus-components/components/panel';

export default React.createClass({
    displayName: 'PersonMovie',
    propTypes: {
        id: PropTypes.number
    },

    /** @inheritDoc */
    render() {
        return (
            <Panel title='person.detail.movies'>
                Ici les films.
            </Panel>
        );
    }
});