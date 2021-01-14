import React from 'react';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TDDB from '../TDDB';
import FilterBlogs from '../component/Blog/FilterBlogs';
class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogs: TDDB.blogs,
        };
    }
    render() {
        return (
            <>
                <div className="section-head style1 text-center  ">
                    <h2 className="box-title">Our Touring Blogs </h2>
                    <div className="heading_line"></div>
                    <p>
                        Can not decide where to go? No problem we have a variety of blogs about Saudi Arabi,
                        have fun!
          </p>
                </div>
                <FilterBlogs data={this.state.blogs} />
            </>
        );
    }
}

export default Blog;
