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
import WithAnimationLoad from "../HOC/WithAnimationLoad";
import Footer from "../Layout/Footer";

//for slider
import SectionSlider from "../UI/SectionSlider";
import Marquee from "../UI/marquee";


const Loader = (props) => {
    return (
      <center>Loading...</center>
    )
};
const Cloud = (props) => {
  return (
    <svg className="clouds" fill={props.fillColor} viewBox="0 0 1417 241" xmlns="http://www.w3.org/2000/svg">
      <path d="M178.47 99.1855C179.34 95.4416 179.78 91.6113 179.783 87.7681C179.783 58.6255 155.01 35 124.452 35C103.435 35 85.1597 46.1769 75.7891 62.6375C69.9524 59.5764 63.455 57.9828 56.8609 57.9949C35.1788 57.9949 17.6006 74.7655 17.6006 95.4488C17.6006 95.994 17.6198 96.5358 17.6442 97.0759H17.5168C-0.994037 97.0724 -16 111.383 -16 129.035C-16 146.687 -0.994037 161 17.5168 161H166.476C184.987 161 199.993 146.689 199.993 129.035C200 115.413 191.057 103.786 178.47 99.1855Z" />
      <path d="M563.045 41.7715C563.609 39.335 563.895 36.8422 563.896 34.3412C563.896 15.3754 547.84 0 528.033 0C514.411 0 502.566 7.27387 496.493 17.9863C492.71 15.9942 488.499 14.957 484.225 14.965C470.171 14.965 458.778 25.8792 458.778 39.3397C458.778 39.6945 458.791 40.0471 458.806 40.3986H458.724C446.726 40.3963 437 49.7097 437 61.1976C437 72.6855 446.726 82 458.724 82H555.272C567.269 82 576.995 72.6866 576.995 61.1976C577 52.332 571.204 44.7656 563.045 41.7715Z" />
      <path d="M956.135 100.602C956.574 98.7005 956.797 96.7549 956.798 94.8029C956.798 80.0003 944.297 68 928.876 68C918.27 68 909.048 73.6772 904.319 82.0381C901.374 80.4832 898.095 79.6738 894.768 79.68C883.826 79.68 874.956 88.1984 874.956 98.7041C874.956 98.9811 874.966 99.2563 874.978 99.5306H874.914C865.572 99.5288 858 106.798 858 115.764C858 124.73 865.572 132 874.914 132H950.083C959.424 132 966.996 124.731 966.996 115.764C967 108.844 962.487 102.939 956.135 100.602Z" />
      <path d="M1406.14 148.602C1406.57 146.701 1406.8 144.755 1406.8 142.803C1406.8 128 1394.3 116 1378.88 116C1368.27 116 1359.05 121.677 1354.32 130.038C1351.37 128.483 1348.1 127.674 1344.77 127.68C1333.83 127.68 1324.96 136.198 1324.96 146.704C1324.96 146.981 1324.97 147.256 1324.98 147.531H1324.91C1315.57 147.529 1308 154.798 1308 163.764C1308 172.73 1315.57 180 1324.91 180H1400.08C1409.42 180 1417 172.731 1417 163.764C1417 156.844 1412.49 150.939 1406.14 148.602Z" />
      <path d="M749.923 220.395C750.209 219.147 750.354 217.87 750.355 216.589C750.355 206.875 742.212 199 732.167 199C725.259 199 719.252 202.726 716.171 208.212C714.253 207.192 712.117 206.661 709.95 206.665C702.823 206.665 697.045 212.255 697.045 219.15C697.045 219.331 697.051 219.512 697.059 219.692H697.017C690.933 219.691 686 224.461 686 230.345C686 236.229 690.933 241 697.017 241H745.981C752.065 241 756.998 236.23 756.998 230.345C757 225.804 754.06 221.929 749.923 220.395Z" />
    </svg>
  );
}

const Page = () => {
  const [count, setCount] = useState(4);
  const [reviewData,setReviewData] = useState({
    babySteps : [],
    nostalgia : [],
    definingPoint : [],
    graduation: [],
    exploration : []
  });
  const [isDataFetched,setIsDataFetched] = useState(false);


  useEffect(() => {
    if (window.innerWidth >= 1024) setCount(4);
    else if (window.innerWidth >= 768) setCount(2);
    else setCount(1);
    fetchReviews();
  }, []);

  async function fetchReviews() {
    setIsDataFetched(false);
    firestoreDB.collection("reviews").where("approved", "==", true)
    .onSnapshot((querySnapshot) => {
        let reviews = [];
        querySnapshot.forEach((doc) => {
            reviews.push(doc.data());
        });
        // console.log("reviews",reviews);
       
        reviews.forEach(rev => {
          const card =  <ReviewCard name={rev.name} review={rev.review} linkedinId={rev.linkedinId} />
          rev.tags.forEach( t => {
          setReviewData( (prevData) => ({
              ...prevData,
              [t] : [...prevData[t],card]
          }));
          })
        });
        // console.log("reviewData:",reviewData);
        setIsDataFetched(true);        
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
    <div class="container-1 hero-section">
      <h2 >
        Phases of <br />
        College Life
      </h2>
      <img class="page1-bg" src={page1Bg} alt="bg1" />
    </div>,
    <div class="container-2 section">
      <Cloud fillColor="#eee"/>
      <div class="main-content">
        <h3>Baby Steps</h3>
        <p>
          You've got all the time in your first year. Use it to gain more and
          more skills, Try to use your skills to solve real life problems, Do
          Internships, Explore Campus and make new Friends.
        </p>
        {isDataFetched ? 
        <Marquee itemsArray={reviewData.babySteps} activeItemsCount={count} />:
        <Loader />
        }
      </div>
      <img class="page2-bg" src={page2Bg} />
    </div>,
    <div class="container-3 section">
      <Cloud fillColor="#eee"/>
      <div class="main-content">
        <h3>Exploring</h3>
        <p>
          Learn and Explore as much as you can in your college life, Try new
          fields so that you can know more about what you are passionate about.
          Read more books, watch more resourceful videos, and meet like minded
          individuals so that you grow in your college life and make the best
          out of it.
        </p>
        {isDataFetched ? 
          <Marquee itemsArray={reviewData.exploration} activeItemsCount={count} />:
          <Loader />
        }
      </div>

      <img class="page3-bg1" src={page3Bg1} alt="bg3" />
      <img class="page3-bg2" src={page3Bg2} alt="bg3" />
    </div>,
    <div class="container-4 section">
      <Cloud fillColor="#eee"/>
      <div class="main-content">
        <h3>Defining Point</h3>
        <p>
          Do not restrict yourself to specific path to follow your dreams,
          explore your domain, make new ways its the best age to experiment with
          your ideas. Colleg Life is all about experimenting and doing mistakes.
          Follow your own path, find your purpose, find your own ambition and
          aspiration and don't forget to live in the present.
        </p>
        {isDataFetched ? 
          <Marquee itemsArray={reviewData.definingPoint} activeItemsCount={count} />:
          <Loader />
        }
      </div>
      <img class="page4-bg" src={page4Bg} alt="man with goals" />
    </div>,
    <div class="container-5 section">
      <Cloud fillColor="#eee"/>
      <div class="main-content">
        <h3>Graduation</h3>
        <p>
          You might be leaving DUCS, but DUCS would never leave you. Students
          graduating from here never say GOODByes as how high they fly they
          never ever forget their roots. All the lessons you've learnt,
          adventures you've embarked, all the chit chats with your friends, all
          the hangouts and bunk memories will be with you FOREVER...
        </p>
        {isDataFetched ? 
          <Marquee itemsArray={reviewData.graduation} activeItemsCount={count} />:
          <Loader />
        }
      </div>
      <img class="page5-bg" src={page5Bg} alt="bg5" />
    </div>,
    <div class="container-6 section">
      <Cloud fillColor="#eee"/>
      <div class="main-content">
        <h3>Nostalgia</h3>
        <p>
          From Internals to Lengthy Major Exams, From strict morning classes to
          bunking lectures, long placement sessions, sudama ki chai, tom uncle
          maggi point to DCAC canteens. Lets take a trip down the memory lane
          and relive some of our most favourite moments.
        </p>
        {isDataFetched ? 
          <Marquee itemsArray={reviewData.nostalgia} activeItemsCount={count} />:
          <Loader />
        }
      </div>
      <img class="page6-bg" src={page6Bg} alt="bg6" />
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
    <a class="dp" href={props.linkedinId} target="_blank"></a>
    <span class="display-name">{props.name}</span>
  </div>
  <span class="review-text">
    {props.review}
  </span>
</div>);

// const tags = [
//   "nostalgia","babySteps","definingPoint","graduation","exploration"
// ]

export default Page;
