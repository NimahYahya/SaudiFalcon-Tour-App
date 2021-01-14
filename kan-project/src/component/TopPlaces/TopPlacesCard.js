import React from 'react';

import '../../style/TopPlaces.css';
import { Link } from 'react-router-dom';

function TopPlacesCard(props) {
  return (
    <section className="component_cards ">
      <main className="TopPlacesCont">
        <div className="cards_box">
          <figure className=" TopPlaces_cards--front">
            <div className="card_side--top">
              <img
                className="TopPlaces_img"
                src={props.data.img}
                alt="Card image cap"
              />
            </div>
            <div className="card_sside--bootom">
              <div className="TopPlaces_cards_body">
                <p className="city-title">{props.data.location}</p>
                <h3 className="TopPlaces_cards_title">{props.data.title}</h3>
              </div>
              <Link to={'/trips/' + props.data.id}>
                <section id="explore">
                  <button className="explore-btn">Explore this City</button>
                </section>
              </Link>
            </div>
          </figure>

          <figure className="TopPlaces_cards--back"></figure>
        </div>
      </main>
    </section>
  );
}

export default TopPlacesCard;
