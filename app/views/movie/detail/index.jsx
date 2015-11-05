import React, {PropTypes} from 'react';
import FocusComponents from 'focus-components';

//Focus components
const {ScrollspyContainer} = FocusComponents.components;
const BackButton = FocusComponents.common.button.back.component;
const {cartridgeBehaviour} = FocusComponents.page.mixin;
const {storeBehaviour} = FocusComponents.common.mixin;

//Project views
import HeaderExpanded from './movie-header-content-expanded';
import HeaderSummary from './movie-header-content-summary';
import MovieActors from './movie-actors';
import MoviesCaracteristics from './movie-caracteristics';
import MoviePosters from './movie-posters';
import MovieSynopsis from './movie-synospis';

//Services
import movieAction from '../.././../action/movie';

export default React.createClass({
    displayName: 'MovieDetailView',
    propTypes: {
        id: PropTypes.number
    },
    mixins: [cartridgeBehaviour],

    /** @inheritDoc */
    componentWillMount() {
        const {id} = this.props;
        movieAction.movie.load(id);
    },

    /**
    * Related to the CartridgeBehaviour.
    * Define the cartridge configuration.
    * @return {[type]} [description]
    */
    cartridgeConfiguration() {
        const props = { hasLoad: false }; //{id: this.props.id};
        return {
            barLeft: { component: BackButton },
            cartridge: { component: HeaderExpanded, props },
            summary: {component: HeaderSummary, props},
            actions: {
                primary: [],
                secondary: []
            }
        };
    },

    /** @inheritDoc */
    render() {
        return (
            <ScrollspyContainer gridContentSize={10} gridMenuSize={2}>
                <MovieSynopsis hasLoad={false} />
                <MoviesCaracteristics hasLoad={false} />
                <MoviePosters />
                <MovieActors />
            </ScrollspyContainer>
        );
    }
});