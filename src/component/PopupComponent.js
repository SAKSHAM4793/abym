import React from 'react';
import "../component/Mobile.css";




const PopupComponent = () => {
    var body = document.body;

body.classList.add("btl_pop")
function btl_pop_remove() {
  document.body.classList.remove('btl_pop');

  
};
    return (
      <div id="q3" style={{ display: 'none' }}>
        <div id="delayedPopup" className="delayedPopupWindow">
          <div className="delayedPopupContent">
            <div className="delayedPopupContent">
              <div className="container">
                <img src="https://abym.in/dev-url/lpl_btl/assets/img/location-map.gif" alt="" className="map-gif" />
                <p className="cont-n">
                  It seems Your <b> Geolocation</b> is currently Off. Kindly turn on your Geolocation to check the best offers personalized for you.
                </p>
                <button onClick={btl_pop_remove} className="otp-btn otp-btn-1 btn-geo">ENABLE GEO LOCATION</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default PopupComponent;
  