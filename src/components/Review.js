import React, {Component} from 'react';
import Moment from 'react-moment';

class Review extends Component {
    render()
    {
        return (
            <li key={this.props.index} className="reviews__list-item reset-list block-padding-vertical">
                <div className="review area">
                    <h3 className="review__title">{this.props.review.name}</h3>

                    <div className="review__rating">
                        {this.getStar(1)}
                        {this.getStar(2)}
                        {this.getStar(3)}
                        {this.getStar(4)}
                        {this.getStar(5)}
                    </div>

                    <div className="review__content">
                        {this.props.review.review}
                    </div><br/>
                    <div className='timestamp'>
                        <Moment className='review__date' format="D MMM YYYY HH:MM:SS" date={this.props.review.createdDate} />
                    </div>
                </div>
            </li>
        );
    }

    getStar(rating)
    {
        return (
            <svg height="25" width="23" className="star" data-rating={rating}
                 data-active={parseInt(this.props.review.rating) === parseInt(rating)}>
                <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"/>
            </svg>
        );
    }
}

export default Review;
