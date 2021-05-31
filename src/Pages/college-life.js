import React,{useState,useEffect} from "react";
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

import Marquee from "./../UI/marquee2";

const cardsP2 = [
    <div class="cards cards-page4">
    <div class="card-title">
        <div class="dp2"></div>
        <span class="display-name">Abraham</span>
    </div>
    <span class="review-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit dolorem
        quia id. Autem laborum ipsa
    </span>
</div>,
<div class="cards cards-page4">
    <div class="card-title">
        <div class="dp2"></div>
        <span class="display-name">Desmond</span>
    </div>
    <span class="review-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis qui saepe
        nisi expedita inventore facere quae dicta?
    </span>
</div>,
<div class="cards cards-page4">
    <div class="card-title">
        <div class="dp2"></div>
        <span class="display-name">Alan Fresco</span>
    </div>
    <span class="review-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit dolorem
        quia id. Autem laborum ipsa
    </span>
</div>,
<div class="cards cards-page4">
    <div class="card-title">
        <div class="dp2"></div>
        <span class="display-name">Hans Down</span>
    </div>
    <span class="review-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit dolorem
        quia id. Autem laborum ipsa
    </span>
</div>,
<div class="cards cards-page4">
    <div class="card-title">
        <div class="dp2"></div>
        <span class="display-name">Indigo Violet</span>
    </div>
    <span class="review-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit dolorem
        quia id. Autem laborum ipsa
    </span>
</div>
]
const cardsP3 = [
    <div class="cards cards-page4">
    <div class="card-title">
        <div class="dp3"></div>
        <span class="display-name">Abraham</span>
    </div>
    <span class="review-text">Lorem ipsum dolor sit amet cnponsectetur adipisicing elit. Nulla odit dolorem
        quia id. Autem laborum ipsa
    </span>
</div>,
<div class="cards cards-page4">
    <div class="card-title">
        <div class="dp3"></div>
        <span class="display-name">Desmond</span>
    </div>
    <span class="review-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis qui saepe
        nisi expedita inventore facere quae dicta?
    </span>
</div>,
<div class="cards cards-page4">
    <div class="card-title">
        <div class="dp3"></div>
        <span class="display-name">Alan Fresco</span>
    </div>
    <span class="review-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit dolorem
        quia id. Autem laborum ipsa
    </span>
</div>,
<div class="cards cards-page4">
    <div class="card-title">
        <div class="dp3"></div>
        <span class="display-name">Hans Down</span>
    </div>
    <span class="review-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit dolorem
        quia id. Autem laborum ipsa
    </span>
</div>,
<div class="cards cards-page4">
    <div class="card-title">
        <div class="dp3"></div>
        <span class="display-name">Indigo Violet</span>
    </div>
    <span class="review-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit dolorem
        quia id. Autem laborum ipsa
    </span>
</div>

]

const Page = () => {
    const [count,setCount] = useState(4);
    useEffect(()=>{
        if(window.innerWidth >= 1024) setCount(4);
        else if(window.innerWidth >= 768) setCount(2);
        else setCount(1);
        console.log(window.innerWidth,count);
    },[])

    return(
        <div id="clg-life">
        {/* page 1 start */}
        <div class="container-1">
            {/* <div class="nav-bar">
                <a href="#" class="logo">DUCS<br/>Playbook</a>
                <nav class="nav-links">
                    <a class="middle" href="#">Home</a>
                    <a class="middle" href="../explore.html">Explore</a>
                    <a class="middle" href="../contact.html">Contact</a>
                    <button class="sign-in-button">Sign in</button>
                </nav>
            </div> */}
            <h2>Phases of <br/>College Life</h2>
            <img class="page1-bg" src={page1Bg} alt="bg1"/>
        </div>
        {/* page 1 end */}

        {/* page 2 start */}
        <div class="container-2">
            <img src={cloudsPage2} alt="clouds"/>
            <div class="main-content">
                <h3>Baby Steps</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque distinctio temporibus quo incidunt
                    dolorum suscipit perspiciatis architecto ipsum nobis tempora minus odit, voluptatum odio nam! Nihil
                    maiores pariatur hic error.</p>
            </div>
            <Marquee itemsArray={cardsP2} activeItemsCount={count}/>
            <img class="page2-bg" src={page2Bg} alt="bg2"/>
        </div>
        {/* page 2 end */}

        {/* page 3 start */}
        <div class="container-3">
            <img src={cloudsPage3} alt="clouds"/>
            <div class="main-content">
                <h3>Exploring</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque distinctio temporibus quo incidunt
                    dolorum suscipit perspiciatis architecto ipsum nobis tempora minus odit, voluptatum odio nam! Nihil
                    maiores pariatur hic error.</p>
            </div>
            <Marquee itemsArray={cardsP2} activeItemsCount={count}/>
            <img class="page3-bg1" src={page3Bg1} alt="bg3"/>
            <img class="page3-bg2" src={page3Bg2} alt="bg3"/>
        </div>
        {/* page 3 end */}

        {/* page 4 start */}
        <div class="container-4">
            <img src={cloudsPage4} alt="floating clouds"/>
            <div class="main-content">
                <h3>Defining Point</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque distinctio temporibus quo incidunt
                    dolorum suscipit perspiciatis architecto ipsum nobis tempora minus odit, voluptatum odio nam! Nihil
                    maiores pariatur hic error.</p>
            </div>
            <div class="slider">
                <div class="cards cards-page4">
                    <div class="card-title">
                        <div class="dp4"></div>
                        <span class="display-name">Abraham</span>
                    </div>
                    <span class="review-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit dolorem
                        quia id. Autem laborum ipsa
                    </span>
                </div>
                <div class="cards cards-page4">
                    <div class="card-title">
                        <div class="dp4"></div>
                        <span class="display-name">Desmond</span>
                    </div>
                    <span class="review-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis qui saepe
                        nisi expedita inventore facere quae dicta?
                    </span>
                </div>
                <div class="cards cards-page4">
                    <div class="card-title">
                        <div class="dp4"></div>
                        <span class="display-name">Alan Fresco</span>
                    </div>
                    <span class="review-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit dolorem
                        quia id. Autem laborum ipsa
                    </span>
                </div>
                <div class="cards cards-page4">
                    <div class="card-title">
                        <div class="dp4"></div>
                        <span class="display-name">Hans Down</span>
                    </div>
                    <span class="review-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit dolorem
                        quia id. Autem laborum ipsa
                    </span>
                </div>
                <div class="cards cards-page4">
                    <div class="card-title">
                        <div class="dp4"></div>
                        <span class="display-name">Indigo Violet</span>
                    </div>
                    <span class="review-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit dolorem
                        quia id. Autem laborum ipsa
                    </span>
                </div>
            </div>
            <img class="man" src={page4Bg} alt="man with goals"/>
        </div>
        {/* page 4 end */}

        {/* page 5 start */}
        <div class="container-5">
            <img src={cloudsPage5} alt="clouds"/>
            <div class="main-content">
                <h3>Graduation</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque distinctio temporibus quo incidunt
                    dolorum suscipit perspiciatis architecto ipsum nobis tempora minus odit, voluptatum odio nam! Nihil
                    maiores pariatur hic error.</p>
            </div>
            <div class="slider">
                <div class="cards cards-page5">
                    <div class="card-title">
                        <div class="dp5"></div>
                        <span class="display-name">Abraham</span>
                    </div>
                    <span class="review-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit dolorem
                        quia id. Autem laborum ipsa
                    </span>
                </div>
                <div class="cards cards-page5">
                    <div class="card-title">
                        <div class="dp5"></div>
                        <span class="display-name">Desmond</span>
                    </div>
                    <span class="review-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis qui saepe
                        nisi expedita inventore facere quae dicta?
                    </span>
                </div>
                <div class="cards cards-page5">
                    <div class="card-title">
                        <div class="dp5"></div>
                        <span class="display-name">Alan Fresco</span>
                    </div>
                    <span class="review-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit dolorem
                        quia id. Autem laborum ipsa
                    </span>
                </div>
                <div class="cards cards-page5">
                    <div class="card-title">
                        <div class="dp5"></div>
                        <span class="display-name">Hans Down</span>
                    </div>
                    <span class="review-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit dolorem
                        quia id. Autem laborum ipsa
                    </span>
                </div>
                <div class="cards cards-page5">
                    <div class="card-title">
                        <div class="dp5"></div>
                        <span class="display-name">Indigo Violet</span>
                    </div>
                    <span class="review-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit dolorem
                        quia id. Autem laborum ipsa
                    </span>
                </div>
            </div>
            <img class="graduation-img" src={page5Bg} alt="bg5"/>
        </div>
        {/* page 5 end */}

        {/* page 6 start */}
        <div class="container-6">
            <img src={cloudsPage6} alt="clouds"/>
            <div class="main-content">
                <h3>Nostalgia</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque distinctio temporibus quo incidunt
                    dolorum suscipit perspiciatis architecto ipsum nobis tempora minus odit, voluptatum odio nam! Nihil
                    maiores pariatur hic error.
                </p>
            </div>
            <div class="slider">
                <div class="cards cards-page6">
                    <div class="card-title">
                        <div class="dp6"></div>
                        <span class="display-name">Abraham</span>
                    </div>
                    <span class="review-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit dolorem
                        quia id. Autem laborum ipsa
                    </span>
                </div>
                <div class="cards cards-page6">
                    <div class="card-title">
                        <div class="dp6"></div>
                        <span class="display-name">Desmond</span>
                    </div>
                    <span class="review-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis qui saepe
                        nisi expedita inventore facere quae dicta?
                    </span>
                </div>
                <div class="cards cards-page6">
                    <div class="card-title">
                        <div class="dp6"></div>
                        <span class="display-name">Alan Fresco</span>
                    </div>
                    <span class="review-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit dolorem
                        quia id. Autem laborum ipsa
                    </span>
                </div>
                <div class="cards cards-page6">
                    <div class="card-title">
                        <div class="dp6"></div>
                        <span class="display-name">Hans Down</span>
                    </div>
                    <span class="review-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit dolorem
                        quia id. Autem laborum ipsa
                    </span>
                </div>
                <div class="cards cards-page6">
                    <div class="card-title">
                        <div class="dp6"></div>
                        <span class="display-name">Indigo Violet</span>
                    </div>
                    <span class="review-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit dolorem
                        quia id. Autem laborum ipsa
                    </span>
                </div>
            </div>
            <img class="polaroid" src={page6Bg} alt="bg6"/>
        </div>
        {/* page 6 end */}

        </div>
    );
};

export default Page;