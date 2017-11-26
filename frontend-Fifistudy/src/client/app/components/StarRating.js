import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {postReviewFilm} from '../actions/api'
import {withCookies} from 'react-cookie';

class StarRating extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValue: this.props.initialValue,
            isClicked: false,
            currentClick: null,
            classStar1: "",
            classStar2: "",
            classStar3: "",
            classStar4: "",
            classStar5: "",
            classHalfStar1: "",
            classHalfStar2: "",
            classHalfStar3: "",
            classHalfStar4: "",
            classHalfStar5: "",
        };
    }

    isFloat = (value) => {
        return ((value / 0.5) % 2 !== 0)
    }

    onMouseEnter = (value) => {
        // alert('hi')
        this.setState({
            currentValue: value
        })
    }

    postReviewFilm = (score) => {
        let {data, cookies} = this.props;
        postReviewFilm({
            "score": parseFloat(score),
            "film_id": data.id
        }, cookies.get("token")).then(response => {
            console.log('resssssss', response);
            if (response.errors == null) alert('Thanh cong')
        })
    }

    componentDidMount = () => {

        var starClicked = false;
        if ((this.props.initialValue / 0.5) % 2 === 0) {
            setFullStarState($(`.full[data-value=${this.props.initialValue}]`));

        }
        else {
            setHalfStarState($(`.half[data-value="${this.props.initialValue}"]`));
        }
        // let {data, cookies} = this.props;
        if (this.props.disabled === true) {
            return
        }

        let instance = this;


        $('.star').click(function () {
            if (starClicked === false) {
                $(this).children('.selected').addClass('is-animated');
                $(this).children('.selected').addClass('pulse');

                var target = this;

                setTimeout(function () {
                    $(target).children('.selected').removeClass('is-animated');
                    $(target).children('.selected').removeClass('pulse');
                }, 1000);

                starClicked = true;
            }
        })

        $('.half').click(function () {
            if (starClicked == true) {
                setHalfStarState(this)
            }
            $(this).closest('.rating').find('.js-score').text($(this).data('value'));
            alert($(this).data('value'));
            instance.postReviewFilm($(this).data('value'));
            $(this).closest('.rating').data('vote', $(this).data('value'));
            calculateAverage()
            console.log(parseInt($(this).data('value')));

        })

        $('.full').click(function () {
            if (starClicked == true) {
                setFullStarState(this)
            }
            debugger
            $(this).closest('.rating').find('.js-score').text($(this).data('value'));
            instance.postReviewFilm($(this).data('value'));
            // alert();
            $(this).find('js-average').text(parseInt($(this).data('value')));

            $(this).closest('.rating').data('vote', $(this).data('value'));
            calculateAverage()

            console.log(parseInt($(this).data('value')));
        })

        $('.half').hover(function () {
            if (starClicked == false) {
                setHalfStarState(this)
            }

        })

        $('.full').hover(function () {
            if (starClicked == false) {
                setFullStarState(this)
            }
        })

        $('.rating').mouseleave(() => {
            if (starClicked === false) {
                if ((this.props.initialValue / 0.5) % 2 === 0) {
                    setFullStarState($(`.full[data-value=${this.props.initialValue}]`));

                }
                else {
                    setHalfStarState($(`.half[data-value="${this.props.initialValue}"]`));
                }
            }

        })


        function updateStarState(target) {
            $(target).parent().prevAll().addClass('animate');
            $(target).parent().prevAll().children().addClass('star-colour');

            $(target).parent().nextAll().removeClass('animate');
            $(target).parent().nextAll().children().removeClass('star-colour');
        }

        function setHalfStarState(target) {
            $(target).addClass('star-colour');
            $(target).siblings('.full').removeClass('star-colour');
            updateStarState(target)
        }

        function setFullStarState(target) {
            $(target).addClass('star-colour');
            $(target).parent().addClass('animate');
            $(target).siblings('.half').addClass('star-colour');

            updateStarState(target)
        }

        function calculateAverage() {
            var average = 0

            $('.rating').each(function () {
                average += $(this).data('vote')
            })

            $('.js-average').text((average / $('.rating').length).toFixed(1))
        }
    }


    render() {
        return (
            <div className="rating" data-vote="0">


                <div className="star">

                    <span className="full" data-value="1"></span>
                    <span className="half" data-value="0.5"></span>
                    <span className="selected"></span>

                </div>

                <div className="star">

                    <span className="full" data-value="2"></span>
                    <span className="half" data-value="1.5"></span>
                    <span className="selected"></span>

                </div>

                <div className="star">

                    <span className="full" data-value="3"></span>
                    <span className="half" data-value="2.5"></span>
                    <span className="selected"></span>

                </div>

                <div className="star">

                    <span className="full" data-value="4"></span>
                    <span className="half" data-value="3.5"></span>
                    <span className="selected"></span>

                </div>

                <div className="star">

                    <span className="full" data-value="5"></span>
                    <span className="half" data-value="4.5"></span>
                    <span className="selected"></span>

                </div>

            </div>


        )
    }
}

StarRating.propTypes = {
    disabled: PropTypes.bool.isRequired,
    initialValue: PropTypes.bool.isRequired
}

export default withCookies(StarRating)
