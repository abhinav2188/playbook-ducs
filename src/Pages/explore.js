import React from "react";
import "./explore.scss";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from "@material-ui/core";
import space from "../assets/illustration.svg";
import cardImg1 from "../assets/study.svg";
import cardImg2 from "../assets/time.svg";
import cardImg3 from "../assets/productivity.jpg";
import WithAnimationLoad from "../HOC/WithAnimationLoad";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Card = (props) => {
  return (
    <div
      className="explore-card"
      style={{ background: props.grad }}
      onClick={props.onClick}
    >
      <div className="card-img">
        <img src={props.imgSrc} alt="" />
      </div>
      <h4 className="card-title">{props.title}</h4>
    </div>
  );
};
const ListItem = (props) => {
  return (
    <li class="li1">
      <a class="linkit" href={props.link}>
        <img src={props.image} alt="icon" class="img1" />
        <div className="text">
          <h5>{props.head}</h5>
          <p>{props.description}</p>
        </div>
      </a>
    </li>
  );
};

const VideosDialog = (props) => {
  const [showDialog, setShowDialog] = useState(false);
  const openDialog = () => setShowDialog(true);
  const closeDialog = () => setShowDialog(false);
  return (
    <>
      <button onClick={openDialog}>{props.displayCard}</button>
      <Dialog class="dialog" open={showDialog} onClose={closeDialog}>
        <DialogTitle>{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{props.children}</DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

const Page = () => {
  // const [DialogContent, setDialogContent] = useState([]);

  return (
    <>
      <WithAnimationLoad className="main">
        <img src={space} className="explore-bg" alt="" />
        <div id="explore" className="container">
          <div className="explore-content">
            <div className="top">
              <h2>Explore NEW things</h2>
              <p>
                Explore the campus, access high quality notes, level up skills
                with free resources
              </p>
            </div>
            <div className="explore-cards">
              <VideosDialog
                displayCard={
                  <Card
                    key="e1"
                    title="Financial Books"
                    imgSrc={cardImg1}
                    grad="linear-gradient(
45deg
, #412FAF, #50C1E8)"
                  />
                }
                title={"Financial Books"}
              >
                <ul class="items">
                  <ListItem
                    link="https://www.amazon.in/Rich-Dad-Poor-Middle-Updates/dp/1612680194/ref=sr_1_3?dchild=1&keywords=Rich+Dad%2C+Poor+Dad&qid=1618073077&sr=8-3"
                    image="https://images-na.ssl-images-amazon.com/images/I/51wOOMQ+F3L._SX312_BO1,204,203,200_.jpg"
                    head="Rich Dad,Poor Dad"
                    description="What the Rich Teaches their children that Poor and Middle Class don't!"
                  />
                  <ListItem
                    link="https://www.amazon.in/Romancing-Balance-Sheet-Manages-Business/dp/9350294311/ref=sr_1_1?dchild=1&keywords=Romancing+the+Balance+Sheet&qid=1618073144&sr=8-1"
                    image="https://images-na.ssl-images-amazon.com/images/I/41zDazXl1YL._SX311_BO1,204,203,200_.jpg"
                    head="Romancing the Balance Sheet"
                    description="For Anyone Who Owns, Runs or Manages a Business"
                  />
                  <ListItem
                    link="https://www.amazon.in/Intelligent-Investor-English-Paperback-2013/dp/0062312685/ref=sr_1_1?dchild=1&keywords=The+Intelligent+Investor&qid=1618073199&sr=8-1"
                    image="https://images-na.ssl-images-amazon.com/images/I/51DLoxAJ68L._SX324_BO1,204,203,200_.jpg"
                    head="The Intelligent Investor"
                    description="The intelligent investor by Benjamin Graham, first published in 1949, is a widely acclaimed book on value investing."
                  />
                </ul>
              </VideosDialog>
              <VideosDialog
                displayCard={
                  <Card
                    key="e2"
                    title="How to Manage Time?"
                    imgSrc={cardImg2}
                    grad="linear-gradient(45deg, #2FB8FF, #95E8DC)"
                  />
                }
                title={"How to Manage Time?"}
              >
                <ul class="items">
                  <ListItem
                    link="https://www.youtube.com/watch?v=hYt-5sNq5Vg"
                    image="https://i.ytimg.com/vi/hYt-5sNq5Vg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCotIPdQM6e10pTzqIZzRHdAuMGwg"
                    head="How to manage your Time in 2021?"
                    description="Managing time is a skill we can all improve on slightly. It's one that can help make sure we get stuff done and be as productive as possible."
                  />
                  <ListItem
                    link="https://www.youtube.com/watch?v=6_PIRbXlELw"
                    image="https://i.ytimg.com/vi/6_PIRbXlELw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCc5di_ir0oG1oJ3J3wsQumbugpnw"
                    head="The Best Time Table for every student | 5 Big Mistakes | SuperTips"
                    description="Manage time better. every student should watch."
                  />
                </ul>
              </VideosDialog>
              <VideosDialog
                displayCard={
                  <Card
                    key="e3"
                    title="How to Invest in 20s?"
                    imgSrc={cardImg3}
                    grad="linear-gradient(
45deg
, #2587A6, #6FF7E8)"
                  />
                }
                title={"How to Invest in 20s?"}
              >
                <ul class="items">
                  <ListItem
                    link="https://www.amazon.in/Rich-Dad-Poor-Middle-Updates/dp/1612680194/ref=sr_1_3?dchild=1&keywords=Rich+Dad%2C+Poor+Dad&qid=1618073077&sr=8-3"
                    image="https://i.ytimg.com/vi/yNaN5kYTNLY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDg7kkNAffSU0kJYfFFV8n1L_i4SQ"
                    head="The best ways to Invest in your | Ankur Warikoo"
                    description="How to invest in your 20s? How to pick the right investment option? What are the top investing mistakes to avoid?"
                  />
                  <ListItem
                    link="https://www.amazon.in/Romancing-Balance-Sheet-Manages-Business/dp/9350294311/ref=sr_1_1?dchild=1&keywords=Romancing+the+Balance+Sheet&qid=1618073144&sr=8-1"
                    image="https://i.ytimg.com/vi/qsCUE7kzFHA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRhAtUUKYCiRgkdzzrmdBhb6WmoQ"
                    head="Investing In Your 20s Simplified - 2021 by @Shashank Udupa???"
                    description="In today's episode of World of Finance, we simplify investing for all you 20-year-olds out there."
                  />
                </ul>
              </VideosDialog>
            </div>
          </div>
        </div>
      </WithAnimationLoad>
    </>
  );
};

export default Page;
