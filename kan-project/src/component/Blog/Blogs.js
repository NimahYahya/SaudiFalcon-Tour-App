import React from 'react';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/Blog.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Blogs extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bolgs_cards">
        <div className="blogs_box">
          <div className="img-container">
            <img src={this.props.data.img} />
          </div>

          <div className="blog-container">
            <h6 className="date-created">{this.props.data.datecreated}</h6>
            <h1 className="blog-title">{this.props.data.title}</h1>
            <p className="blog-content">
              {this.props.data.body.substring(0, 200) + '...'}
            </p>
            <Link to={'/blogs/' + this.props.data.id}>
              <Button className="filter-button ">Read more</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Blogs;
