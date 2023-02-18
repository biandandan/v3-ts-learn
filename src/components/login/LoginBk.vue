<template>
  <div class="bk-wrap">
    <div class="sun"></div>
    <div class="grass"></div>
    <div class="street">
      <div class="car">
        <div class="car-flag">
          <div class="flag-body">小熊<br />一家</div>
          <div class="bar"></div>
        </div>
        <div class="car-body">
          <div class="car-top-back">
            <div class="back-curve"></div>
          </div>
          <div class="car-gate"></div>
          <div class="car-top-front">
            <div class="wind-sheild"></div>
          </div>
          <div class="bonet-front"></div>
          <div class="stepney"></div>
        </div>
        <div class="boundary-tyre-cover">
          <div class="boundary-tyre-cover-back-bottom"></div>
          <div class="boundary-tyre-cover-inner"></div>
        </div>
        <div class="tyre-cover-front">
          <div class="boundary-tyre-cover-inner-front"></div>
        </div>
        <div class="base-axcel"></div>
        <div class="front-bumper"></div>
        <div class="tyre">
          <div class="gap"></div>
        </div>
        <div class="tyre front">
          <div class="gap"></div>
        </div>
        <div class="car-shadow"></div>
      </div>
    </div>
    <div class="street-stripe"></div>
    <div class="hill"></div>
  </div>
</template>

<style scoped lang="scss">
.bk-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: radial-gradient(ellipse at center, rgba(209, 228, 234, 1) 0%, rgba(186, 228, 244, 1) 100%);
  > .sun {
    background: #ff9944;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 0 50px rgb(255 153 68 / 70%);
    position: absolute;
    left: 49%;
    bottom: 350px;
  }
  > .grass {
    height: 40px;
    width: 100%;
    background-color: #dbcac2;
    position: absolute;
    bottom: 60px;
    z-index: 1;
    &:before {
      position: absolute;
      content: '';
      top: 14px;
      left: 0;
      height: 8px;
      width: 100%;
      background-color: #b99f93;
    }
    &:after {
      position: absolute;
      content: '';
      top: -4px;
      left: 0;
      width: 100%;
      height: 8px;
      background: linear-gradient(135deg, transparent 25%, #0aa 25%);
      background-size: 10px 10px;
    }
  }
  > .street {
    background: #7a7a7a
      url(data:image/png;base64,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);
    // background: #7a7a7a;
    height: 80px;
    width: 102%;
    position: absolute;
    bottom: 0;
    box-shadow: 0 1px 16px rgb(111 35 51 / 40%) inset;
    z-index: 1;
  }
  > .street-stripe {
    background: #d4d4d4;
    height: 8px;
    width: 100px;
    position: absolute;
    bottom: 44px;
    border-radius: 2px;
    box-shadow: 200px 0 0 #d4d4d4, 400px 0 0 #d4d4d4, 600px 0 0 #d4d4d4, 800px 0 0 #d4d4d4, 1000px 0 0 #d4d4d4, 1200px 0 0 #d4d4d4, 1400px 0 0 #d4d4d4, 1600px 0 0 #d4d4d4,
      1800px 0 0 #d4d4d4, 2000px 0 0 #d4d4d4;
    z-index: 1;
  }
  > .hill {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 250px;
    border-top-right-radius: 160%;
    border-top-left-radius: 100%;
    background-color: #adde60;
    // z-index: -1;
    &:before {
      background-color: #93cc3a;
      border-top-left-radius: 0;
      border-top-right-radius: 100%;
      bottom: -70px;
      content: '';
      height: 110%;
      left: -54px;
      position: absolute;
      transform: rotate(4deg);
      width: 120%;
    }
    &:after {
      content: '';
      position: absolute;
      bottom: -100px;
      right: -400px;
      width: 120%;
      height: 110%;
      border-top-right-radius: 100%;
      border-top-left-radius: 0%;
      background-color: #94c943;
      transform: rotate(-12deg);
      box-shadow: 0 0 25px #cbf191 inset;
    }
  }
  .car {
    position: absolute;
    top: -35%;
    z-index: 10;
    animation: myfirst 10s linear infinite;
    > .car-flag {
      position: absolute;
      height: 50px;
      width: 45px;
      top: -100px;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 50%;
      &:before,
      &:after {
        content: '';
        position: absolute;
        height: 50px;
        width: 14px;
        border-radius: 50%;
        top: -35px;
        right: 0;
        background-color: #bae4f4;
        // transform: rotateZ(15deg);
        box-sizing: border-box;
        animation: flag-wind2 5s linear infinite, flag-bear 5s linear infinite;
      }
      &:after {
        left: 0;
        background-color: #bae4f4;
        transform: rotateZ(-15deg);
        animation: flag-wind1 5s linear infinite, flag-bear 5s linear infinite;
      }
      > .flag-body {
        position: absolute;
        height: 50px;
        width: 45px;
        top: 0;
        left: 50%;
        transform: translateX(-50%) rotateZ(-2deg);
        background-image: radial-gradient(ellipse at center, #d1e4ea 0%, #bae4f4 100%);
        border-radius: 50%;
        z-index: 1;
        text-align: center;
        font-size: 12px;
        box-sizing: border-box;
        color: #fff;
        animation: flag-bear 5s linear infinite;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      > .bar {
        position: absolute;
        height: 50px;
        width: 0;
        top: 38px;
        left: 50%;
        transform: translateX(-50%);
        border-right: 2px solid #afd4e2;
        transform: rotateZ(-2deg);
        animation: flag-bear 5s linear infinite;
      }
    }
    > .car-body {
      border-bottom: 24px solid #d1352b;
      height: 0;
      top: 10px;
      width: 120px;
      position: relative;
      &:before {
        content: '';
        display: inline-block;
        width: 30px;
        height: 24px;
        position: absolute;
        right: -5px;
        background: #d1352b;
        border-top-right-radius: 4px;
        z-index: 1;
      }
      &:after {
        content: '';
        display: inline-block;
        width: 121px;
        border-bottom: 1px solid #942b25;
        border-right: 2px solid transparent;
        height: 0;
        z-index: 2;
        position: absolute;
      }
      > .car-top-back {
        background: none repeat scroll 0 0 #4c4b4b;
        border-radius: 5px 0 0 0;
        height: 20px;
        left: 4px;
        position: absolute;
        top: -20px;
        width: 58px;
        &:before {
          width: 30px;
          height: 15px;
          background: #736f6f;
          content: '';
          position: absolute;
          top: 3px;
          left: 8px;
          border-radius: 2px;
        }
        &:after {
          content: '';
          background: #4c4b4b;
          border-radius: 30%;
          height: 5px;
          left: 3px;
          position: absolute;
          top: -1px;
          width: 62px;
        }
        > .back-curve {
          background: none repeat scroll 0 0 #4c4b4b;
          border-radius: 960% 100% 0 0;
          height: 20px;
          left: -3px;
          position: absolute;
          top: 1px;
          transform: rotate(6deg);
          width: 5px;
        }
      }
      > .car-gate {
        width: 32px;
        height: 20px;
        background: #d1352b;
        border-radius: 0 0 2px 8px / 0 0 2px 8px;
        box-shadow: 0 0 0 1px #892924;
        position: absolute;
        left: 48px;
        &:before {
          content: '';
          width: 8px;
          height: 2px;
          background: #4c4b4b;
          position: absolute;
          top: 2px;
          left: 4px;
          box-shadow: 1px 1px 1px rgb(0 0 0 / 10%);
        }
      }
      > .car-top-front {
        top: -19px;
        position: absolute;
        left: 47px;
        width: 20px;
        height: 20px;
        background: #dc4630;
        border-left: 1px solid #892924;
        border-radius: 2px 0 0 0;
        &:before {
          width: 12px;
          height: 5px;
          background: #dc4630;
          content: '';
          position: absolute;
          top: 14px;
          left: 28px;
          z-index: 1;
          border: solid #a82e27;
          border-width: 0 1px 1px 0;
        }
        &:after {
          width: 26px;
          height: 20px;
          transform: skew(37deg);
          background: #dc4630;
          content: '';
          position: absolute;
          top: 0;
          left: 6px;
          border-radius: 4px 0 4px 4px;
        }
        > .wind-sheild {
          top: 3px;
          left: 3px;
          position: absolute;
          z-index: 3;
          width: 18px;
          height: 12px;
          background: #f5e7e7;
          border-radius: 0 3px 0 0;
          &:after {
            width: 12px;
            height: 12px;
            transform: skew(25deg);
            background: #f5e7e7;
            content: '';
            position: absolute;
            top: 0;
            left: 10px;
            border-radius: 3px;
          }
        }
      }
      > .bonet-front {
        background: #d1352b;
        border-radius: 5px 258px 0 38px / 36px 50px 0 0;
        height: 4px;
        position: absolute;
        right: 0;
        top: -4px;
        width: 40px;
        z-index: 0;
      }
      > .stepney {
        height: 6px;
        left: -4px;
        position: absolute;
        top: 6px;
        width: 8px;
        z-index: -1;
        background: #3f3f40;
        &:before {
          width: 8px;
          height: 12px;
          background: #3f3f40;
          content: '';
          position: absolute;
          top: -10px;
          left: -7px;
          border-radius: 3px 3px 0 0;
        }
        &:after {
          width: 8px;
          height: 12px;
          background: #0d0c0d;
          content: '';
          position: absolute;
          top: 0px;
          left: -7px;
          border-radius: 0 0 3px 3px;
        }
      }
    }
    > .boundary-tyre-cover {
      position: absolute;
      top: 14px;
      left: 10px;
      border-bottom: 20px solid #4c4b4b;
      border-right: 10px solid transparent;
      height: 0;
      width: 20px;
      &:before {
        content: '';
        position: absolute;
        display: inline-block;
        background: #4c4b4b;
        height: 20px;
        width: 15px;
        transform: skewX(-20deg);
        border-radius: 3px;
        left: -6px;
        top: 0;
      }
      &:after {
        content: '';
        position: absolute;
        display: inline-block;
        background: #4c4b4b;
        height: 20px;
        width: 20px;
        transform: skewx(40deg);
        border-radius: 3px;
        right: -14px;
        top: 0;
      }
      > .boundary-tyre-cover-back-bottom {
        position: absolute;
        width: 14px;
        height: 8px;
        background: #4c4b4b;
        top: 12px;
        left: -19px;
      }
      > .boundary-tyre-cover-inner {
        position: absolute;
        top: 4px;
        left: 4px;
        border-bottom: 16px solid black;
        border-right: 10px solid transparent;
        height: 0;
        width: 15px;
        z-index: 2;
        &:before {
          content: '';
          position: absolute;
          display: inline-block;
          background: black;
          height: 16px;
          width: 15px;
          transform: skewX(-20deg);
          border-radius: 3px 3px 0 0;
          left: -6px;
          top: 0;
        }
        &:after {
          content: '';
          position: absolute;
          display: inline-block;
          background: black;
          height: 16px;
          width: 20px;
          transform: skewx(40deg);
          border-radius: 3px 3px 0 0;
          right: -11px;
          top: 0;
        }
      }
    }
    > .tyre-cover-front {
      background: #4c4b4b;
      height: 4px;
      left: 97px;
      position: absolute;
      top: 13px;
      width: 22px;
      z-index: 1;
      &:before {
        background: none repeat scroll 0 0 #4c4b4b;
        content: '';
        display: inline-block;
        height: 21px;
        left: -10px;
        position: absolute;
        top: 0;
        transform: skewX(-30deg);
        width: 10px;
        z-index: 6;
        border-radius: 4px 0 0 0;
      }
      &:after {
        background: none repeat scroll 0 0 #4c4b4b;
        content: '';
        display: inline-block;
        height: 6px;
        left: 14px;
        position: absolute;
        top: 0;
        transform: skewX(30deg);
        width: 17px;
        z-index: 6;
        border-radius: 0 4px 2px 0;
      }
      > .boundary-tyre-cover-inner-front {
        position: absolute;
        top: 4px;
        left: 4px;
        border-bottom: 16px solid black;
        border-right: 10px solid transparent;
        height: 0;
        width: 15px;
        z-index: 7;
        &:before {
          background: none repeat scroll 0 0 #000000;
          border-radius: 3px 3px 0 0;
          content: '';
          display: inline-block;
          height: 17px;
          left: -10px;
          position: absolute;
          top: 0;
          transform: skewX(-30deg);
          width: 15px;
        }
        &:after {
          content: '';
          position: absolute;
          display: inline-block;
          background: black;
          height: 16px;
          width: 20px;
          transform: skewx(25deg);
          border-radius: 3px 3px 0 0;
          right: -12px;
          top: 0;
        }
      }
    }
    > .base-axcel {
      background: none repeat scroll 0 0 black;
      bottom: -15px;
      height: 10px;
      left: 30px;
      position: absolute;
      transform: rotate(-2deg);
      width: 70px;
      z-index: -1;
      &:before {
        background: none repeat scroll 0 0 black;
        border-radius: 0 0 0 10px / 0 0 0 5px;
        content: '';
        height: 10px;
        left: -35px;
        position: absolute;
        top: -2px;
        transform: rotate(6deg);
        width: 30px;
      }
      &:after {
        background: none repeat scroll 0 0 black;
        border-radius: 0 0 0 10px / 0 0 0 5px;
        content: '';
        height: 10px;
        right: -33px;
        position: absolute;
        top: -1px;
        transform: rotate(-4deg);
        width: 40px;
        border-radius: 0 10px 5px 0;
      }
    }
    > .front-bumper {
      background: none repeat scroll 0 0 #4c4b4b;
      border-radius: 0 2px 2px 0;
      height: 8px;
      position: absolute;
      right: -15px;
      width: 11px;
      z-index: 1;
      transform: rotate(-5deg);
      &:before {
        background: none repeat scroll 0 0 #000000;
        content: '';
        height: 10px;
        left: -7px;
        position: absolute;
        transform: rotate(-22deg);
        width: 9px;
        z-index: 1;
      }
    }
    > .tyre {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: #3f3f40;
      position: absolute;
      z-index: 2;
      left: 9px;
      top: 20px;
      animation: tyre-rotate 1s infinite linear;
      &:before {
        content: '';
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #bdc2bd;
        position: absolute;
        top: 5px;
        left: 5px;
      }
      > .gap {
        background: #3f3f40;
        width: 2px;
        height: 4px;
        position: absolute;
        left: 14px;
        top: 8px;
        box-shadow: 0 9px 0 #3f3f40;
        &:before {
          content: '';
          display: block;
          width: 2px;
          height: 4px;
          position: absolute;
          background: #3f3f40;
          box-shadow: 0 12px 0 #3f3f40;
          transform: rotate(-90deg);
          transform-origin: 0 7px;
          z-index: 3;
        }
      }
      &.front {
        left: 94px;
      }
    }
    > .car-shadow {
      background: none repeat scroll 0 0 rgba(0, 0, 0, 0);
      bottom: -15px;
      box-shadow: -5px 10px 15px 3px #000000;
      left: -7px;
      position: absolute;
      width: 136px;
    }
  }
  @keyframes myfirst {
    0% {
      left: -25%;
    }
    100% {
      left: 100%;
    }
  }
  @keyframes tyre-rotate {
    from {
      transform: rotate(-360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
  @keyframes flag-wind1 {
    0% {
      transform: rotate(-15deg);
    }
    50% {
      transform: rotate(-19deg);
    }
    60% {
      transform: rotate(-16deg);
    }
    100% {
      transform: rotate(-14deg);
    }
  }
  @keyframes flag-wind2 {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(-3deg);
    }
    60% {
      transform: rotate(-2deg);
    }
    100% {
      transform: rotate(-0deg);
    }
  }
  @keyframes flag-bear {
    0% {
      filter: hue-rotate(0deg);
    }
    50% {
      filter: hue-rotate(20deg);
    }
    60% {
      filter: hue-rotate(100deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
}
</style>
