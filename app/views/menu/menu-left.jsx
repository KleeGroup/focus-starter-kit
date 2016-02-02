import React from 'react';
import history from 'focus-core/history';
import Menu from 'focus-components/components/menu';
import {component as Modal} from 'focus-components/application/popin';

//custom web component
import QuickSearchView from '../search/quick';

export default React.createClass({
    displayName: 'DemoMenuLeft',
    getInitialState () {
        return {
            isQuickSearchModalOpen: false
        };
    },
    _getMenuItems() {
        return [
            { icon:'home', onClick:() => { this._onHomeClick(); } }, // route: 'home'
            { icon:'search', onClick:() => { this._onQuickSearchModalToggle() }}
        ];
    },

    _onHomeClick() {
        this._onMenuItemClick();
        history.navigate('#', true);
    },

    _onMenuItemClick() {
        this.setState({
            isQuickSearchModalOpen: false
        });
    },

    _onQuickSearchModalToggle() {
        const {isQuickSearchModalOpen} = this.state;
        this.setState({
            isQuickSearchModalOpen: !isQuickSearchModalOpen
        });
    },

    render() {
        const items = this._getMenuItems();
        const {isQuickSearchModalOpen} = this.state;
        return (
            <div>
                <Menu onPopinClose={this._onQuickSearchModalToggle} items={items} handleBrandClick={this._onHomeClick} />
                {isQuickSearchModalOpen &&
                    <Modal open={true} type='from-menu'>
                        <QuickSearchView />
                    </Modal>
                }
            </div>
        );
    }
});
