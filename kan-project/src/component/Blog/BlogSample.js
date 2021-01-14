import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/BlogSample.css';
import ReviewComments from '../../pages/ReviewComments';

class BlogSample extends Component {
  render() {
    return (
      <section className="section">
        <article className="row m-5">
          <div className="col-12">
            <div className="blog-post">
              <img
                className="card-img-right"
                src={this.props.blog.img}
                alt="Card image cap"
              />
            </div>
          </div>
          <div className="col-md-8">
            <h2 className="blog-post-title">{this.props.blog.title}</h2>
            <h4>
              <span className="badge bg-secondary my-3 text-light text">
                {this.props.blog.category}
              </span>
            </h4>
            <div className="d-flex .justify-content-sm-between">
              <p className="blog-post-meta">
                {this.props.blog.datecreated}
                <a href="#"></a>
              </p>
            </div>
            <p className="bodyDiscription">{this.props.blog.body}</p>
          </div>
          <ReviewComments blog={this.props.blog.comments} />
        </article>
      </section>
    );
  }
}

export default BlogSample;
