import React, {Component} from 'react';
import List from '../../components/List.js';
import Form from '../../components/Form.js';
import './review-page.css';


class Reviewpage extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
          reviews: [],
          validation: ''
        }
    }

    componentDidMount() {
      fetch('http://api.ogsl.in/api/review')
      .then(response => response.json())
      .then(data => this.setState({reviews: data.response.data}))
      .catch(error => console.log('I have errored'));
    }

    refreshPage = () => {
    		window.location.reload(false);
    	};

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

        const templist = {
            rating: parseInt(event.target.rating.value),
            name: event.target.name.value,
            review: event.target.review.value
        };


        fetch('http://api.ogsl.in/api/review',{
          method:'POST',
          headers : {'Content-Type':'application/json'},
          body: JSON.stringify(templist)
        }).then(function(response) {
          return response.json();
        });
        event.preventDefault();

      this.refreshPage();
}


    render()

    {
      const style_component = {
        paddingTop : '40px'
      }
        return (
            <div className="bg-light-gray global-padding-bottom" id='reviews' style={style_component}>
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
