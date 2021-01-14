import React from 'react';
import '../../style/BlogHome.css';
import { Link } from 'react-router-dom';

function BlogHomeCard(props) {
  return (
    <div className="component_cards">
      <div className="blog_box">
        <Link to={'/blogs/' + props.data.id}>
          <div className="blog_img_cont">
            <img
              className="blog_img"
              src={props.data.img}
              alt="Card image cap"
            />
          </div>
          <div className="blog_cards_body">
            <h3 className="blog_cards_title">{props.data.title}</h3>
            <div className="heading_line"></div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default BlogHomeCard;
