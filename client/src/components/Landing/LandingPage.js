import React from "react";
import "./styles.css";

function Jumbotron() {

    return (
        <div className="jumbotron">
            <h2 className="display-4">The Non-Profit Hub</h2>

            <p className="lead"> At The Non-Profit Hub, our goal is to connect
                people with organizations that provide meaningful
                change in the world. We do this by creating a space in which
                you can search for an organizations of your
                interest and create long time relationships with them
                through monetary contributions.
          </p>
          <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      {/* <img src="https://images.unsplash.com/photo-1516222338250-863216ce01ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80" className="d-block w-100" alt="..."/> */}
      <img src="../../../images/nonprofit1a.jpeg" alt="..."/>
    </div>
    <div className="carousel-item">
    <img src="../../../images/nonprofit2a.jpeg" alt="..."/>
    </div>
    <div className="carousel-item">
    <img src="../../../images/nonprofit3a.jpeg" alt="..."/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>





          <hr className="my-4"></hr>

          <p>Please login or register if you do not have an account.</p>
          <a className="btn btn-primary btn-lg" href="/login" role="button">Login</a>

          <a className="btn btn-primary btn-lg" href="/register" role="button">Register</a>

     

        </div>
    );
}

export default Jumbotron;