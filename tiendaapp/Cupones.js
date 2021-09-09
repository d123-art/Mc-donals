import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Text,
  StyleSheet
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


const items = [
  
  {
    src: require('./assets/cupon1.jpeg')
  },
  {
    src: require('./assets/cupon2.jpeg')
  },
  {
    src: require('./assets/cupon3.jpeg')
  },
  {
    src: require('./assets/cupon4.jpeg')
  }
];

const Cupones = (props) => {

  
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
        
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
          <center>
            <font face="Arial  " size="5" color="black">Cupones
  
  </font>
  </center>
        <img src={item.src} alt={item.altText} width='500px' height='500px' justifyContent="center" alignItems="center" alignContent="center" display="block" margin="auto" align-items="center" />
        
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div>
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>

    </div>



  );
}




export default Cupones;