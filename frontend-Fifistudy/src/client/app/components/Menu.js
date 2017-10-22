import React from 'react';
import classNames from 'classnames'
import onClickOutside from 'react-onclickoutside'

class Logo extends React.Component {
    handleClickOutside = evt => {
        this.props.closeMenu();
    }

    render() {
        return (
            <div className={classNames("menu", {"menu--open": this.props.isOpen})}>
                <div className="menu__item">
                    Phim theo cấp
                </div>
                <div className="menu__item">
                    Phim mới nhất
                </div>
                <div className="menu__item">
                    Phim quan tâm nhiều
                </div>
            </div>
        )
    }
}
export default onClickOutside(Logo)