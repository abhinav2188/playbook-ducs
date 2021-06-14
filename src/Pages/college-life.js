import React, { useState, useEffect } from "react";
import "./college-life.scss";
import page1Bg from "../assets/college-life-page1-bg.svg";
import page2Bg from "../assets/space-outline-illustration.svg";
import page3Bg1 from "../assets/explorePlant.svg";
import page3Bg2 from "../assets/exploring-man.svg";
import page4Bg from "../assets/goals-illustration.svg";
import page5Bg from "../assets/graduation-illustration.svg";
import page6Bg from "../assets/polaroid-illustration.svg";
import cloudsPage2 from "../assets/clouds-page1.svg";
import cloudsPage3 from "../assets/orangeCloud.svg";
import cloudsPage4 from "../assets/clouds-page4.svg";
import cloudsPage5 from "../assets/clouds-page5.svg";
import cloudsPage6 from "../assets/clouds-page6.svg";
import WithAnimationLoad from "../HOC/WithAnimationLoad";

import Marquee from "../UI/marquee";

const cardsP2 = [
  <div class="cards cards-page4">
    <div class="card-title">
      <div class="dp2"></div>
      <span class="display-name">Abraham</span>
    </div>
    <span class="review-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit
      dolorem quia id. Autem laborum ipsa
    </span>
  </div>,
  <div class="cards cards-page4">
    <div class="card-title">
      <div class="dp2"></div>
      <span class="display-name">Desmond</span>
    </div>
    <span class="review-text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis qui
      saepe nisi expedita inventore facere quae dicta?
    </span>
  </div>,
  <div class="cards cards-page4">
    <div class="card-title">
      <div class="dp2"></div>
      <span class="display-name">Alan Fresco</span>
    </div>
    <span class="review-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit
      dolorem quia id. Autem laborum ipsa
    </span>
  </div>,
  <div class="cards cards-page4">
    <div class="card-title">
      <div class="dp2"></div>
      <span class="display-name">Hans Down</span>
    </div>
    <span class="review-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit
      dolorem quia id. Autem laborum ipsa
    </span>
  </div>,
  <div class="cards cards-page4">
    <div class="card-title">
      <div class="dp2"></div>
      <span class="display-name">Indigo Violet</span>
    </div>
    <span class="review-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit
      dolorem quia id. Autem laborum ipsa
    </span>
  </div>,
];
const cardsP3 = [
  <div class="cards cards-page4">
    <div class="card-title">
      <div class="dp3"></div>
      <span class="display-name">Abraham</span>
    </div>
    <span class="review-text">
      Lorem ipsum dolor sit amet cnponsectetur adipisicing elit. Nulla odit
      dolorem quia id. Autem laborum ipsa
    </span>
  </div>,
  <div class="cards cards-page4">
    <div class="card-title">
      <div class="dp3"></div>
      <span class="display-name">Desmond</span>
    </div>
    <span class="review-text">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis qui
      saepe nisi expedita inventore facere quae dicta?
    </span>
  </div>,
  <div class="cards cards-page4">
    <div class="card-title">
      <div class="dp3"></div>
      <span class="display-name">Alan Fresco</span>
    </div>
    <span class="review-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit
      dolorem quia id. Autem laborum ipsa
    </span>
  </div>,
  <div class="cards cards-page4">
    <div class="card-title">
      <div class="dp3"></div>
      <span class="display-name">Hans Down</span>
    </div>
    <span class="review-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit
      dolorem quia id. Autem laborum ipsa
    </span>
  </div>,
  <div class="cards cards-page4">
    <div class="card-title">
      <div class="dp3"></div>
      <span class="display-name">Indigo Violet</span>
    </div>
    <span class="review-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit
      dolorem quia id. Autem laborum ipsa
    </span>
  </div>,
];

const Page = () => {
  const [count, setCount] = useState(4);
  useEffect(() => {
    if (window.innerWidth >= 1024) setCount(4);
    else if (window.innerWidth >= 768) setCount(2);
    else setCount(1);
    console.log(window.innerWidth, count);
  }, []);

  return (
    <WithAnimationLoad className="clg-life">
      {/* page 1 start */}

      <div class="container-1 vertical-scrolling">
        <h2>
          Phases of <br />
          College Life
        </h2>
        <img class="page1-bg" src={page1Bg} alt="bg1" />
      </div>
      {/* page 1 end */}
      {/* page 2 start */}
      <div class="container-2 vertical-scrolling">
        <img src={cloudsPage2} alt="clouds" />
        <div class="main-content">
          <h3>Baby Steps</h3>
          <p>
            You've got all the time in your first year. Use it to gain more and
            more skills, Try to use your skills to solve real life problems, Do
            Internships, Explore Campus and make new Friends.
          </p>
        </div>
        <img class="page2-bg" src={page2Bg} alt="bg2" />
        <Marquee itemsArray={cardsP2} activeItemsCount={count} />
      </div>
      {/* page 2 end */}
      {/* page 3 start */}
      <div class="container-3 vertical-scrolling">
        <img src={cloudsPage3} alt="clouds" />
        <div class="main-content">
          <h3>Exploring</h3>
          <p>
            Learn and Explore as much as you can in your college life, Try new
            fields so that you can know more about what you are passionate
            about. Read more books, watch more resourceful videos, and meet like
            minded individuals so that you grow in your college life and make
            the best out of it.
          </p>
        </div>

        <img class="page3-bg1" src={page3Bg1} alt="bg3" />
        <img class="page3-bg2" src={page3Bg2} alt="bg3" />
        <Marquee itemsArray={cardsP2} activeItemsCount={count} />
      </div>
      {/* page 3 end */}
      {/* page 4 start */}
      <div class="container-4 vertical-scrolling">
        <img src={cloudsPage4} alt="floating clouds" />
        <div class="main-content">
          <h3>Defining Point</h3>
          <p>
            Do not restrict yourself to specific path to follow your dreams,
            explore your domain, make new ways its the best age to experiment
            with your ideas. Colleg Life is all about experimenting and doing
            mistakes. Follow your own path, find your purpose, find your own
            ambition and aspiration and don't forget to live in the present.
          </p>
        </div>
        <Marquee itemsArray={cardsP2} activeItemsCount={count} />
        <img class="man" src={page4Bg} alt="man with goals" />
      </div>
      {/* page 4 end */}
      {/* page 5 start */}
      <div class="container-5 vertical-scrolling">
        <img src={cloudsPage5} alt="clouds" />
        <div class="main-content">
          <h3>Graduation</h3>
          <p>
            You might be leaving DUCS, but DUCS would never leave you. Students
            graduating from here never say GOODByes as how high they fly they
            never ever forget their roots. All the lessons you've learnt,
            adventures you've embarked, all the chit chats with your friends,
            all the hangouts and bunk memories will be with you FOREVER...
          </p>
        </div>
        {/*         
        <div class="slider">
          <div class="cards cards-page5">
            <div class="card-title">
              <div class="dp5"></div>
              <span class="display-name">Abraham</span>
            </div>
            <span class="review-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              odit dolorem quia id. Autem laborum ipsa
            </span>
          </div>
          <div class="cards cards-page5">
            <div class="card-title">
              <div class="dp5"></div>
              <span class="display-name">Desmond</span>
            </div>
            <span class="review-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
              qui saepe nisi expedita inventore facere quae dicta?
            </span>
          </div>
          <div class="cards cards-page5">
            <div class="card-title">
              <div class="dp5"></div>
              <span class="display-name">Alan Fresco</span>
            </div>
            <span class="review-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              odit dolorem quia id. Autem laborum ipsa
            </span>
          </div>
          <div class="cards cards-page5">
            <div class="card-title">
              <div class="dp5"></div>
              <span class="display-name">Hans Down</span>
            </div>
            <span class="review-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              odit dolorem quia id. Autem laborum ipsa
            </span>
          </div>
          <div class="cards cards-page5">
            <div class="card-title">
              <div class="dp5"></div>
              <span class="display-name">Indigo Violet</span>
            </div>
            <span class="review-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              odit dolorem quia id. Autem laborum ipsa
            </span>
          </div>
        </div> */}

        <img class="graduation-img" src={page5Bg} alt="bg5" />
        <Marquee itemsArray={cardsP2} activeItemsCount={count} />
      </div>
      {/* page 5 end */}
      {/* page 6 start */}
      <div class="container-6 vertical-scrolling">
        <img src={cloudsPage6} alt="clouds" />
        <div class="main-content">
          <h3>Nostalgia</h3>
          <p>
            From Internals to Lengthy Major Exams, From strict morning classes
            to bunking lectures, long placement sessions, sudama ki chai, tom
            uncle maggi point to DCAC canteens. Lets take a trip down the memory
            lane and relive some of our most favourite moments.
          </p>
        </div>
        {/* <div class="slider">
          <div class="cards cards-page6">
            <div class="card-title">
              <div class="dp6"></div>
              <span class="display-name">Abraham</span>
            </div>
            <span class="review-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              odit dolorem quia id. Autem laborum ipsa
            </span>
          </div>
          <div class="cards cards-page6">
            <div class="card-title">
              <div class="dp6"></div>
              <span class="display-name">Desmond</span>
            </div>
            <span class="review-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
              qui saepe nisi expedita inventore facere quae dicta?
            </span>
          </div>
          <div class="cards cards-page6">
            <div class="card-title">
              <div class="dp6"></div>
              <span class="display-name">Alan Fresco</span>
            </div>
            <span class="review-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              odit dolorem quia id. Autem laborum ipsa
            </span>
          </div>
          <div class="cards cards-page6">
            <div class="card-title">
              <div class="dp6"></div>
              <span class="display-name">Hans Down</span>
            </div>
            <span class="review-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              odit dolorem quia id. Autem laborum ipsa
            </span>
          </div>
          <div class="cards cards-page6">
            <div class="card-title">
              <div class="dp6"></div>
              <span class="display-name">Indigo Violet</span>
            </div>
            <span class="review-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              odit dolorem quia id. Autem laborum ipsa
            </span>
          </div>
        </div> */}
        <img class="polaroid" src={page6Bg} alt="bg6" />
        <Marquee itemsArray={cardsP2} activeItemsCount={count} />
      </div>

      {/* page 6 end */}
    </WithAnimationLoad>
  );
};

export default Page;
