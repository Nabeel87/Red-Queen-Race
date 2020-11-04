import './App.css';
import React, { useRef, useEffect } from 'react';

function App() {

  const foreground1 = useRef(null);
  const foreground2 = useRef(null);
  const background1 = useRef(null);
  const background2 = useRef(null);
  const aliceAnimation = useRef(null);

  useEffect(() => {
    var sceneryFrames = [
      { transform: 'translateX(100%)' },
      { transform: 'translateX(-100%)' },
    ];

    var sceneryTimingbackground = {
      duration: 36000,
      iterations: Infinity,
    }

    var sceneryTimingForeground = {
      duration: 12000,
      iterations: Infinity,
    };

    const spriteFrame = [
      { transform: 'translateY(0)' },
      { transform: 'translateY(-100%)' },
    ]

    const firstBackgroundMovement = background1.current.animate(sceneryFrames, sceneryTimingbackground);
    firstBackgroundMovement.currentTime = firstBackgroundMovement.effect.getTiming().duration / 2;

    const secoundBackgroundMovment = background2.current.animate(sceneryFrames, sceneryTimingbackground);

    const foreGroundMovementOne = foreground1.current.animate(sceneryFrames, sceneryTimingForeground);
    foreGroundMovementOne.currentTime = foreGroundMovementOne.effect.getTiming().duration / 2;

    const foreGroundMovementTwo = foreground2.current.animate(sceneryFrames, sceneryTimingForeground);

    const aliceAnimationMovment = aliceAnimation.current.animate(spriteFrame, {
      easing: 'steps(7,end)',
      direction: 'reverse',
      duration: 600,
      playbackRate: 1,
      iterations: Infinity
    });

    const scen = [foreGroundMovementOne, foreGroundMovementTwo, firstBackgroundMovement, secoundBackgroundMovment];

    const adjustPlayBackRate = () => {
      if (aliceAnimationMovment.playbackRate < .8) {
        scen.forEach((animation) => {
          animation.playbackRate = aliceAnimationMovment.playbackRate/2*-1;
        })
      } else if(aliceAnimationMovment.playbackRate > 1.2) {
        scen.forEach((animation) => {
          animation.playbackRate = aliceAnimationMovment.playbackRate / 2;
        })
      } else {
        scen.forEach((animation) => {
          animation.playbackRate = 0;
        })
      }
    }
    
    setInterval(() => {
      if(aliceAnimationMovment.playbackRate > .4){
        aliceAnimationMovment.playbackRate *= .9;
      }
      adjustPlayBackRate();
    }, 3000);

    const goFaster = () => {
      aliceAnimationMovment.playbackRate *= 1.1;
      adjustPlayBackRate();
    }

    window.addEventListener("click", goFaster);

  })



return (
  <>
    <div className="wrapper">
      <div className="sky"></div>
      <div className="earth">
        <div id="red-queen_and_alice">
          <img id="red-queen_and_alice_sprite" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x" alt="Alice and the Red Queen running to stay in place." ref={aliceAnimation} />
        </div>
      </div>

      <div className="scenery" id="foreground1" ref={foreground1}>
        <img id="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" alt=" " />
      </div>
      <div className="scenery" id="foreground2" ref={foreground2}>
        <img id="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" alt=" " />
        <img id="w_rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" alt=" " />
      </div>
      <div className="scenery" id="background1" ref={background1}>
        <img id="r_pawn_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" alt=" " />
        <img id="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" alt=" " />
        <img id="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" alt=" " />
      </div>
      <div className="scenery" id="background2" ref={background2}>
        <img id="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" alt=" " />

        <img id="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x" alt=" " />
        <img id="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" alt=" " />
      </div>
    </div>
  </>
);
}

export default App;
