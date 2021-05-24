import React from "react";
import "./explore.scss";
import { Helmet } from "react-helmet";

import space from "../assets/illustration.svg";
import cardImg1 from "../assets/Rectangle.svg";
import cardImg2 from "../assets/library.svg";
import cardImg3 from "../assets/Rectangle2.svg";
import cardImg4 from "../assets/blue.svg";
import cardImg5 from "../assets/Rectangle4.svg";
import cardImg6 from "../assets/flame.svg";

const Page = () => {
  return (
    <>
      <Helmet>
        {/* bootstrap */}
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        />
        <script
          src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
          integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <section class="explore">
        <img src={space} alt="" class="space" />
        {/* <div id="header">
          <h4>
            <span class="ducs">DUCS</span> <br />
            PlayBook
          </h4>
          <ul class="navigation nav-links">
            <li>
              <a class="middle" href="index.html">
                <span id="#home">Home</span>
              </a>
            </li>
            <li>
              <a class="middle" href="explore.html">
                Explore
              </a>
            </li>
            <li>
              <a class="middle" href="contact.html">
                Contact
              </a>
            </li>
            <li>
              <button
                type="button"
                class="btn btn-info btn-outline-primary"
                data-toggle="modal"
                data-target="#myModal"
              >
                Sign in
              </button>
            </li>
          </ul>
        </div> */}
        {/* <!--MODAL FORM--> */}
        {/* <!-- Modal --> */}
        <div class="modal fade" id="myModal" role="dialog">
          <div class="modal-dialog">
            {/* <!-- Modal content--> */}
            <div class="modal-content">
              <div class="modal-header text-center">
                <h4 class="col-11 modal-title text-center">Sign in</h4>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div class="modal-body text-center">
                <p>Sign in to your account for free access.</p>
                <form>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      class="form-control"
                      id="password"
                      placeholder="Password"
                    />
                  </div>
                  <div class="col-md-12 text-center">
                    <button
                      type="button"
                      class="btn btn-info btn-outline-primary2"
                      data-dismiss="modal"
                    >
                      Sign in
                    </button>
                    <p class="signText">
                      Don't have an account? <a href="#">Sign up</a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="content">
          <div class="textBox">
            <h3>Explore new things</h3>
            <p>
              Explore the campus, access high quality notes or level up skills
              with free resources.
            </p>
          </div>
        </div>
      </section>

      <div class="row">
        <div class="column">
          <div class="card" style={{ width: "18rem", height: "18rem" }}>
            <img
              class="card-img-top"
              src={cardImg1}
              alt="Card image cap"
              style={{ padding: "15px" }}
            />
            <img
              src={cardImg2}
              alt=""
              style={{ marginTop: "-11.2em", padding: "0 15px 0 15px" }}
            />
            <div class="card-body">
              <p class="card-text1">Study Material</p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card" style={{ width: "18rem", height: "18rem" }}>
            <img
              class="card-img-top"
              src={cardImg3}
              alt="Card image cap"
              style={{ padding: "15px" }}
            />
            <img
              src={cardImg4}
              alt=""
              style={{ marginTop: "-13.2em", padding: "0 15px 0 15px" }}
            />
            <div class="card-body">
              <p class="card-text2">Recreation</p>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="card" style={{ width: "18rem", height: "18rem" }}>
            <img
              class="card-img-top"
              src={cardImg5}
              alt="Card image cap"
              style={{ padding: "15px" }}
            />
            <img
              src={cardImg6}
              alt=""
              style={{
                marginTop: "-14.5em",
                padding: "0 15px 0 15px; width: 17em",
              }}
            />
            <div class="card-body">
              <p class="card-text3">Productivity</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
