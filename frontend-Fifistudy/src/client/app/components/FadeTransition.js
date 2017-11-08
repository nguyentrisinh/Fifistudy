import React from 'react';

import {CSSTransition, TransitionGroup} from 'react-transition-group'

const FadeTransition = ({shouldShow, timeout, classNames, children}) => {
    return (
        <CSSTransition
            timeout={timeout}
            classNames={classNames}
            in={shouldShow}>
            {children}
        </CSSTransition>
    )
}
export default  FadeTransition