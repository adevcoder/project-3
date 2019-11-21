import React from "react";
import "./styles.css";

function Jumbotron() {

    return (
        <div className="jumbotron">
            <h2 className="display-4">The Non-Profit Hub</h2>

            <p className="lead"> At The Non-Profit Hub, our goal is to connect
                people with organizations that provide meaningful
                change in the world. We do this by creating a space in which
                you can search for organizations of your
                interest and create long time relationships
                through monetary contributions.
          </p>

  <div id="carouselExampleInterval" className="carousel slide carousel-fade" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-interval="10000">
      <img src="../../../images/nonprofit1a.jpeg" className="d-block w-100" alt=""/>
     

    </div>
    <div className="carousel-item" data-interval="2000">
      <img src="../../../images/nonprofit2a.jpeg" className="d-block w-100" alt=""/>
      

    </div>
    <div className="carousel-item">
      <img src="../../../images/nonprofit3a.jpeg"className="d-block w-100" alt=""/>
    

    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
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
// ken//