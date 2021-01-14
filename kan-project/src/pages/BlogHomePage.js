import React, { Component } from 'react';
import BlogHomeCard from '../component/BlogsHomePage/BlogHomeCard';
// import '../../style/BolgHomeCard.css';
import '../style/BlogHome.css';
import TDDB from '../TDDB';

class BlogHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: TDDB.blogs,
    };
  }

  render() {

    // let blogs = this.state.blogs.map(blog => {
    //   return <BlogHomeCard key={blog.id} data={blog} />;
    // });

    let latestBlog = [];
    latestBlog = this.state.blogs.sort((a, b) => a.datecreated > b.datecreated ? -1 : 1);
    latestBlog = latestBlog.slice(0, 6);
    latestBlog = latestBlog.map((item, i,) => <BlogHomeCard key={item.id} data={item} />);

    return (
      <section className="section">
        <div className="section-head style1 text-center ">
          <h2 className="box-title">Our Latest Blogs</h2>
          <div className="heading_line"></div>
          <p>
            Our latest blog abouts Saudi Arabi, it's time to read. I beilve you will like it.
          </p>
        </div>
        <div className="component_container">{latestBlog}</div>
      </section>
    );
  }
}

export default BlogHomePage;
