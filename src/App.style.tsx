import styled from 'styled-components';

import AppBase from './App';

const App = styled(AppBase)`
  overflow: hidden;
  background-color: #6c5ce7;
  width: 100vw;
  height: 100vh;

  .logo {
    display: flex;
    width: 100%;
    padding: 0 0.65rem;
    @media screen and (max-width: 768px) {
      justify-content: center;
    }

    img {
      width: 400px;
      height: 80px;
      @media screen and (max-width: 640px) {
        width: 320px;
        height: 68px;
      }
    }
  }

  .wave {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 360px;
    opacity: 0.15;
    @media screen and (max-width: 768px) {
      width: 120%;
      height: 300px;
    }
  }

  .login-form {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);

    background-color: white;
    box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.4);
    border-radius: 12px;

    width: 550px;
    @media screen and (max-width: 768px) {
      width: 70%;
    }
    @media screen and (max-width: 640px) {
      width: 85%;
    }

    .login-error {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;

      > svg {
        margin: 0.2rem 0.6rem 0 0;
      }
    }

    .spinner-container {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.75);
      border-radius: 12px;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default App;
