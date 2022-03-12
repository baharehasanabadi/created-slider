import * as React from 'react';
export default function App() {
  const rangeBackground = React.useRef(null)
  // const rangeEl = React.useRef(null)

   const rangeHandler = (e) => {
     const rangeBgEl = rangeBackground.current
     const width = e.target.value
     rangeBgEl.style.width = `${width}px`
  //    const Slider = document.querySelector('input[type=range]')
  //   console.log(Slider)
  //    Slider.oninput =_=> Slider.style.setProperty('--SliderColor', `hsl(${Slider.value}, 100%, 50%)`)
  //    if(+width <= 200)
  //     console.log("red")
  //     else if(+width <= 400)
  //     console.log('green')
  //     else {
  //       console.log('yellow')
  //     } 
  //  }
  
   };

  return (
  <> 
  <div className='container'>
    <div className='range-container'>
      <div className='range__inner'>
       <input type="range" min='0'   max='608' onChange={rangeHandler} defaultValue='608'className='range'   />

       <div className='range__background' ref={rangeBackground}></div>
      </div>
    </div>
      <div className="color yellow"></div>
      <div className="color green"></div>
      <div className="color red"></div>
  </div>

    </>   
        );
}

