import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button } from 'react-bootstrap';
import '../../style/Blog.css';
import Blogs from '../Blog/Blogs';
import Pagination from './Pagination';

class FilterBlogs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      FilteredData: this.props.data,
      cuurentPage: 1,
      blogPerPage: 5,
    };
  }
  handleFilterBlog = e => {
    let category = e.target.value;
    if (category !== 'All') {
      let arrayOfFilteredData = this.props.data.filter(
        blog => category === blog.category
      );
      this.setState({
        FilteredData: arrayOfFilteredData,
        cuurentPage: 1,
      });
    } else if (category === 'All') {
      this.setState({
        FilteredData: this.props.data,
        cuurentPage: 1,
      });
    }
  };

  // Change page
  paginate = pageNumber => {
    this.setState({ cuurentPage: pageNumber });
  };

  render() {
    const indexLastBlog = this.state.cuurentPage * this.state.blogPerPage;
    const indexFirstBlog = indexLastBlog - this.state.blogPerPage;
    const blogsData = this.state.FilteredData.slice(
      indexFirstBlog,
      indexLastBlog
    );
    let blogs = blogsData.map(blog => {
      return <Blogs key={blog.id} data={blog} />;
    });

    return (
      <section className="section">
        <header className="filter-conainer">
          <ul className="blog-category">
            <li>
              <Button
                className="filter-button"
                variant="default"
                onClick={this.handleFilterBlog}
                value="All"
              >
                All
              </Button>
            </li>
            <li>
              <Button
                className="filter-button"
                variant="default"
                onClick={this.handleFilterBlog}
                value="Shopping"
              >
                Shopping
              </Button>
            </li>
            <li>
              <Button
                className="filter-button"
                variant="default"
                onClick={this.handleFilterBlog}
                value="Nature"
              >
                Nature
              </Button>
            </li>
            <li>
              <Button
                className="filter-button"
                variant="default"
                onClick={this.handleFilterBlog}
                value="Culture"
              >
                Culture
              </Button>
            </li>
          </ul>
        </header>
        {blogs}
        <Pagination
          blogPerPage={this.state.blogPerPage}
          totalBlogs={this.state.FilteredData.length}
          paginate={this.paginate}
          className="paging-container"
        />
      </section>
    );
  }
}

export default FilterBlogs;
