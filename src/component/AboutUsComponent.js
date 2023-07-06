import React, { useEffect } from 'react';
import "../component/Mobile.css";

const AboutUsComponent = () => {

    useEffect(() => {
        const tabs = document.querySelectorAll("[data-tab-target]");
        const tabContents = document.querySelectorAll(".tab-content");
    
        const handleTabClick = (tab) => {
          tabs.forEach((tab) => {
            tab.classList.remove("active");
          });
          tab.classList.add("active");
    
          tabContents.forEach((tabContent) => {
            tabContent.classList.remove("active");
          });
    
          const target = document.querySelector(tab.dataset.tabTarget);
          target.classList.add("active");
        };
    
        tabs.forEach((tab) => {
          tab.addEventListener("click", () => handleTabClick(tab));
        });
        return () => {
            tabs.forEach((tab) => {
              tab.removeEventListener("click", () => handleTabClick(tab));
            });
          };
        }, []);
    
        
    
    return (
      <section className="abt-us">
        <div className="abt-cont">
          <div className="tabs tabs-cus">
            <button data-tab-target="#home-content" className="tab tab-01 active">ABOUT US</button>
            <button data-tab-target="#about-content" className="tab tab-01">OFFERS FOR YOU</button>
          </div>
          <div className="tab-contents">
            <div className="tab-content active tabs-cont" id="home-content">
              <div className="abt-img">
                <h1>About Dr Lal PathLabs</h1>
                <img src="https://abym.in/dev-url/lpl_btl/assets/img/customer-id-01.png" alt="" />
              </div>
              <img src="https://abym.in/dev-url/lpl_btl/assets/img/about-us1.png" alt="" />
              <img src="https://abym.in/dev-url/lpl_btl/assets/img/about-us1.png" alt="" />
            </div>
            <div className="tab-content tabs-cont" id="about-content">
              <div className="abt-img">
                <h1>Offers For You </h1>
                <img src="https://abym.in/dev-url/lpl_btl/assets/img/customer-id-02.png" alt="" />
              </div>
              <div className="tabs-cont">
                <img src="https://abym.in/dev-url/lpl_btl/assets/img/banner_1.png" alt="" />
                <img src="https://abym.in/dev-url/lpl_btl/assets/img/banner_2.png" alt="" />
                <img src="https://abym.in/dev-url/lpl_btl/assets/img/banner_3.png" alt="" />
                <img src="https://abym.in/dev-url/lpl_btl/assets/img/banner_4.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutUsComponent;
  