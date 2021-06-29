import React, { useState, useEffect } from "react";
import {firestoreDB} from "../services/firebase";

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
import Footer from "../Layout/Footer";

//for slider
import SectionSlider from "../UI/SectionSlider";
import Marquee from "../UI/marquee";

const Page = () => {
  const [count, setCount] = useState(4);
  const [reviewData,setReviewData] = useState({
    babySteps : [],
    nostalgia : [],
    definingPoint : [],
    graduation: [],
    exploration : []
  });



  useEffect(() => {
    if (window.innerWidth >= 1024) setCount(4);
    else if (window.innerWidth >= 768) setCount(2);
    else setCount(1);
    console.log(window.innerWidth, count);
    fetchReviews();
  }, []);

  const fetchReviews = () => {
    firestoreDB.collection("reviews").where("approved", "==", true)
    .onSnapshot((querySnapshot) => {
        let reviews = [];
        querySnapshot.forEach((doc) => {
            reviews.push(doc.data());
        });
        console.log("reviews",reviews);
      //  setReviews(reviewData);
       // console.log("state",reviews);
        
        setReviewData( (prevData)=>{
          reviews.forEach( rev => {
            const card =  <ReviewCard name={rev.name} review={rev.review} linkedinId={rev.linkedinId} />
            rev.tags.forEach( t => {
              if(t === "nostalgia") prevData.nostalgia.push(card);
              else if(t === "baby-steps") prevData.babySteps.push(card);
              else if(t === "exploration") prevData.exploration.push(card);
              else if(t === "defining-point") prevData.definingPoint.push(card);
              else if(t === "graduation") prevData.graduation.push(card);
            })
          })
          return prevData;
        })

        console.log(reviewData);
        console.log("baby Steps",reviewData);
        
      

      
    });
  }


  
  

  const sectionNames = [
    "Phases of College Life",
    "Baby Steps",
    "Exploring",
    "Defining Point",
    "Graduation",
    "Nostalgia",
  ];

  const sections = [
    <div class="container-1 vertical-scrolling">
      <h2>
        Phases of <br />
        College Life
      </h2>
      <img class="page1-bg" src={page1Bg} alt="bg1" />
    </div>,
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
      <Marquee itemsArray={reviewData.babySteps} activeItemsCount={count} />
    </div>,
    <div class="container-3 vertical-scrolling">
      <img src={cloudsPage3} alt="clouds" />
      <div class="main-content">
        <h3>Exploring</h3>
        <p>
          Learn and Explore as much as you can in your college life, Try new
          fields so that you can know more about what you are passionate about.
          Read more books, watch more resourceful videos, and meet like minded
          individuals so that you grow in your college life and make the best
          out of it.
        </p>
      </div>

      <img class="page3-bg1" src={page3Bg1} alt="bg3" />
      <img class="page3-bg2" src={page3Bg2} alt="bg3" />
      <Marquee itemsArray={reviewData.exploration} activeItemsCount={count} />
    </div>,
    <div class="container-4 vertical-scrolling">
      <img src={cloudsPage4} alt="floating clouds" />
      <div class="main-content">
        <h3>Defining Point</h3>
        <p>
          Do not restrict yourself to specific path to follow your dreams,
          explore your domain, make new ways its the best age to experiment with
          your ideas. Colleg Life is all about experimenting and doing mistakes.
          Follow your own path, find your purpose, find your own ambition and
          aspiration and don't forget to live in the present.
        </p>
      </div>
      <img class="man" src={page4Bg} alt="man with goals" />
      <Marquee itemsArray={reviewData.definingPoint} activeItemsCount={count} />
    </div>,
    <div class="container-5 vertical-scrolling">
      <img src={cloudsPage5} alt="clouds" />
      <div class="main-content">
        <h3>Graduation</h3>
        <p>
          You might be leaving DUCS, but DUCS would never leave you. Students
          graduating from here never say GOODByes as how high they fly they
          never ever forget their roots. All the lessons you've learnt,
          adventures you've embarked, all the chit chats with your friends, all
          the hangouts and bunk memories will be with you FOREVER...
        </p>
      </div>
      <img class="graduation-img" src={page5Bg} alt="bg5" />
      <Marquee itemsArray={reviewData.graduation} activeItemsCount={count} />
    </div>,
    <div class="container-6 vertical-scrolling">
      <img src={cloudsPage6} alt="clouds" />
      <div class="main-content">
        <h3>Nostalgia</h3>
        <p>
          From Internals to Lengthy Major Exams, From strict morning classes to
          bunking lectures, long placement sessions, sudama ki chai, tom uncle
          maggi point to DCAC canteens. Lets take a trip down the memory lane
          and relive some of our most favourite moments.
        </p>
      </div>
      <img class="polaroid" src={page6Bg} alt="bg6" />
      <Marquee itemsArray={reviewData.nostalgia} activeItemsCount={count} />
    </div>,
  ];

  return (
    <WithAnimationLoad className="clg-life">
      <SectionSlider
        sections={sections}
        sectionNames={sectionNames}
        footer={<Footer />}
        footerHeight={80}
      />
    </WithAnimationLoad>
  );
};

const ReviewCard = (props) => 
(<div class="cards cards-page4">
  <div class="card-title">
    <a class="dp2" href={`https://www.${props.linkedinId}`} target="_blank"></a>
    <span class="display-name">{props.name}</span>
  </div>
  <span class="review-text">
    {props.review}
  </span>
</div>);


export default Page;
