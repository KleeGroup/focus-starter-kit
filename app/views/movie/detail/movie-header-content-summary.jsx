//librairies
import React from 'react';
import FocusComponents from 'focus-components';
import i18n from 'i18next-client';

//web components
import {mixin as formPreset} from 'focus-components/common/form';

//stores
import movieStore from '../../../stores/movie';

//custom components
import Poster from '../../../components/poster';

export default React.createClass({
    displayName: 'MovieDetailHeaderSummary',
    mixins: [formPreset],
    definitionPath: 'movie',
    stores: [{store: movieStore, properties: ['movie']}],

    /** @inheritDoc */
    renderContent() {
        const {poster, title} = this.state;
        return (
            <div data-demo='header-content-summary'>
                <h4>{i18n.t('movie.keyConcept.name')}</h4>
                {poster &&
                    <Poster poster={poster} title={title} />
                }
                <h5>{this.textFor('title')}</h5>
                <h6>{this.textFor('productionYear')}</h6>
            </div>
        );
    }
})
