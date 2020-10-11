import React, {Component} from 'react';
import List from '../../components/List.js';
import Form from '../../components/Form.js';
import './review-page.css';

class Reviewpage extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
          reviews: [],
          validation: ''
        }
    }
    renderList = () =>
    {
        return <List reviews={this.state.reviews}/>;
    }

    renderForm = () =>
    {
        return <Form submitForm={this.submitForm} validation={this.state.validation}/>;
    }

    submitForm = (event) =>
    {
        event.preventDefault();
        const reviews = this.state.reviews.slice();

        if(event.target.rating.value === '' || event.target.name.value === '' || event.target.review.value === '') {
            this.setState({
                ...this.state,
                validation: <div className="validation"></div>
            });

            return;
        }

        this.setState({
            ...this.state,
            validation: ''
        });

        reviews.push({
            rating: parseInt(event.target.rating.value),
            name: event.target.name.value,
            review: event.target.review.value,
            date: new Date()
        });

        this.setState({
            ...this.state,
            reviews: reviews,
            validation: ''
        });
    }

    render()
    {
        return (
            <div className="bg-light-gray global-padding-bottom" id='reviews'>
                <section >

                    <header className="hero bg-black text-color-white global-padding-vertical">
                        <div className="area align-center text-center row">
                            <h1 className="small-12 medium-6 columns">
                                <span className="font-weight-regular">Review</span><br />
                                <span className="font-size-xxlarge text-uppercase">OGSL</span>
                            </h1>
                        </div>
                    </header>

                    <div className="row align-center content-margin-top-negative">
                        <div className="small-12 medium-8 large-6 columns">
                            <div className="content-padding bg-white area">
                                {this.renderList()}
                            </div>
                            {this.renderForm()}
                        </div>
                    </div>


                </section>
            </div>

        );
    }
}

export default Reviewpage;
