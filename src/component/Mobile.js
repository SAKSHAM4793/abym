import React, { useState, useEffect } from 'react';

import "../component/Mobile.css"
// import OTPVerification from './Otp';
import PopupComponent from './PopupComponent';
import AboutUsComponent from './AboutUsComponent';

const Mobile = () => {
  // const [name, setName] = useState('');
  // const [mobileNumber, setMobileNumber] = useState('');
  const [showing, setShowing] = useState([1, 0, 0]);
  const [seconds, setSeconds] = useState(30);
  const [showResendButton, setShowResendButton] = useState(false);
  const [inputValidator, setInputValidator] = useState({
    username: '',
    mobile: false
  });
  const [otpValidator, setOtpValidator] = useState({
    username: false,
    mobile: false,
    otp1: false,
    otp2: false,
    otp3: false,
    otp4: false
  });
  const handleOTPInput = (e, nextInput) => {
    const input = e.target;
    const maxLength = parseInt(input.getAttribute('maxLength'));

    if (input.value.length === maxLength) {
      const next = document.querySelector(`input[name="${nextInput}"]`);
      if (next !== null) {
        next.focus();
      }
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setInputValidator((prevState) => ({
      ...prevState,
      [name]: value.length > 0
    }));
  };



  // const handleResendOTP = () => {
  //   // Handle resend OTP logic here
  // };


  const handleOtpChange = (event) => {
    const { name, value } = event.target;

    setOtpValidator((prevState) => ({
      ...prevState,
      [name]: value.length > 0
    }));
  };


  //  const firstInput = document.getElementById('username');
  // const lastInput = document.getElementById('mobile');

  // inputValidator.addEventListener('input', () => {
  //   clickEvent(inputValidator, 'emailInput');
  // });

  // const clickEvent = (first, last) => {
  //   if (first.value.length > 0) {
  //     last.focus();
  //   }
  // };




  const questions = ['q0', 'q2', 'q3'];

  const next = () => {
    const qElems = [];
    for (let i = 0; i < questions.length; i++) {
      qElems.push(document.getElementById(questions[i]));
    }
    for (let i = 0; i < showing.length; i++) {
      if (showing[i] === 1) {
        qElems[i].style.display = 'none';
        setShowing((prevState) => {
          const newState = [...prevState];
          newState[i] = 0;
          if (i === showing.length - 1) {
            qElems[0].style.display = 'block';
            newState[0] = 1;
          } else {
            qElems[i + 1].style.display = 'block';
            newState[i + 1] = 1;
          }
          return newState;
        });
        break;
      }
    }
  };


  // const handleInputChange = (event) => {
  //   setName(event.target.value);
  //   };
  //   const handleMobileNumberChange = (e) => {
  //     setMobileNumber(e.target.value);
  //   };
  //   // const handleButtonClick = () => {
  //   //   // Handle button click event here
  //   // };


  // const [counter, setCounter] = useState(60); // Initial counter value

  // // Function to handle Resend OTP
  // const handleResendOTP = () => {
  //   // Reset counter to 60 seconds
  //   setCounter(60);

  //   // Additional logic to resend OTP
  //   // ...
  // };
  // // Function to handle OTP input and enable Verify OTP button
  // const handleOTPInput = (event, nextInputId) => {
  //   const { value } = event.target;
  //   const nextInput = document.getElementById(nextInputId);

  //   if (value.length === 1 && nextInput) {
  //     nextInput.focus();
  //   }

  //   // Additional logic to enable Verify OTP button
  //   // ...

  // };




  useEffect(() => {
    const tick = () => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    };

    if (seconds > 0) {
      const timer = setTimeout(tick, 1000);
      return () => clearTimeout(timer);
    } else {
      setShowResendButton(true);
    }
  }, [seconds]);

  return (
    <div>
      <header>
        <div className="logo">
          <img src="https://abym.in/dev-url/lpl_btl/assets/img/Logo.svg" alt="" />
        </div>
      </header>
      <div id="q0">
        <div id="delayedPopup" className="delayedPopupWindow">
          <div className="delayedPopupContent">
            <img src="https://abym.in/dev-url/lpl_btl/assets/img/Logo.png" alt="" />
            <div className="container">
              <label htmlFor="username">Name<span className="lbl-start">*</span></label>
              <input
                type="text"
                placeholder="Enter Full Name"
                name='username'
                id="username"
                required
                onChange={handleInputChange}
              />
              <div className="otp-f">
                <label htmlFor="mobile">Mobile Number<span className="lbl-start">*</span></label>
                <div className="f-conuntry">
                  <img src="https://abym.in/dev-url/lpl_btl/assets/img/india2.png" alt="India Flag" />
                  <span>+91</span>
                </div>
                <input
                  type="tel"
                  placeholder="Enter your Mobile Number"
                  name='mobile'
                  id="mobile"
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, '').replace(/(\..*?)\..*/g, '$1');
                  }}
                  minLength="10"
                  maxLength="10"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <button
                className="otp-btn"
                onClick={next}
                name="submit"
                id="button-send"
                disabled={!inputValidator.username || !inputValidator.mobile}>
                GET OTP
              </button>
            </div>
          </div>
        </div>
      </div>





      <div id="q2" style={{ display: 'none' }}>
        <div id="delayedPopup" className="delayedPopupWindow">
          <div className="delayedPopupContent">
            <img src="assets/img/Logo.png" alt="" />
            <div className="container">
              <label htmlFor="username">Name<span className="lbl-start">*</span></label>
              <input type="text" placeholder="Enter Full Name" name="username" id="username" required />
              <div className="otp-f">
                <label htmlFor="psw">Mobile Number<span className="lbl-start">*</span></label>
                <div className="f-conuntry">
                  <img src="https://abym.in/dev-url/lpl_btl/assets/img/india2.png" alt="" />
                  <span>+91</span>
                </div>
                <input
                  type="tel"
                  placeholder="Enter your Mobile Number"
                  name="mobile"
                  id="mobile"

                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9]/g, '').replace(/(\..*?)\..*/g, '$1');
                  }}
                  onChange={handleInputChange}
                  minLength="10"
                  maxLength="10"
                  required
                />
              </div>
              <div className="otp-code">
                <input
                  type="number"
                  className="code-n"
                  id="otp1"
                  name="otp1"
                  maxLength="1"
                  onKeyUp={(e) => handleOTPInput(e, 'otp2')}
                />
                <input
                  type="number"
                  className="code-n"
                  id="otp2"
                  name="otp2"
                  maxLength="1"
                  onKeyUp={(e) => handleOTPInput(e, 'otp3')}
                />
                <input
                  type="number"
                  className="code-n"
                  id="otp3"
                  name="otp3"
                  maxLength="1"
                  onKeyUp={(e) => handleOTPInput(e, 'otp4')}
                />
                <input
                  type="number"
                  className="code-n"
                  id="otp4"
                  name="otp4"
                  maxLength="1"
                />
              </div>
              <div className="btnGroup">
                <span className="timer otp-prsnd">
                  <b>
                    <span id="counter">0:{seconds < 10 ? `0${seconds}` : seconds}</span>
                  </b>
                  {showResendButton && (
                    <b>
                      <span id="ResendBtn" className="resnd"  >
                        Resend OTP
                      </span>
                    </b>)}
                </span>
                <span className="Btn">
                  <button className="otp-btn verify-otp" name="submit" id="otp-Send"
                 onClick={next}
                    // disabled={!otpValidator.otp1 || !otpValidator.otp2 || !otpValidator.otp3 || !otpValidator.otp4}
                    >  GET OTP</button></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <OTPVerification/> */}
      <PopupComponent />
      <AboutUsComponent />
    </div>
  )
}

export default Mobile;