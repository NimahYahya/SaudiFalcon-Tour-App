import './App.css';
import Home from './pages/Home';
import Packages from './pages/Packages';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';
import Header from './pages/Header';
import Footer from './pages/Footer';
import { Redirect, Route, Switch } from 'react-router-dom';
import BlogSample from './component/Blog/BlogSample';
import { Component } from 'react';
import TDDB from './TDDB';
import TripDescription from './component/TripPlan/TripDescription';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: TDDB.blogs,
      trips: TDDB.trips,
    };
  }

  render() {
    return (
      <div>
        <main>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/packages">
              <Packages />
            </Route>

            <Route exact path="/blog">
              <Blog />
            </Route>
            <Route
              path="/blogs/:id"
              exact
              render={props => {
                console.log(props);
                if (this.state.blogs) {
                  const { match } = props;
                  const blogId = match.params.id;
                  console.log(blogId);
                  const blog = this.state.blogs.find(blog => blog.id == blogId);
                  return <BlogSample blog={blog} />;
                } else {
                  return <Home />;
                }
              }}
            />
            <Route
              path="/trips/:id"
              exact
              render={props => {
                console.log(props);
                if (this.state.trips) {
                  const { match } = props;
                  const tripId = match.params.id;
                  console.log(tripId);
                  const trip = this.state.trips.find(trip => trip.id == tripId);
                  return <TripDescription data={trip} />;
                } else {
                  return <Home />;
                }
              }}
            />

            <Route path="/contactus">
              <ContactUs />
            </Route>

            <Route path="/not-found" component={() => <h1>Not found!</h1>} />
            <Redirect path="*" to="/not-found" />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
export default App;
