import React from 'react';
import {PagsText, SliderWindow, SlideText} from '../styles';
import {Arrow} from './Arrow';
import {Slide} from './Slider';

interface SliderItemProps {
   slides: Slide[];
   navs?: boolean;
   currentImgNumber: number;
   loop?: boolean;
   setCurrentImgNumber: (num: number | ((prev: number) => number)) => void;
}

export const SliderItem = React.memo(({navs, currentImgNumber, slides, setCurrentImgNumber, loop}: SliderItemProps) => {
   return (
      <SliderWindow
         align='center'
         justify={navs ? 'space-between' : 'center'}
         url={`url(${slides[currentImgNumber].img})`}
      >
         <PagsText>{`${currentImgNumber + 1}/${slides.length}`}</PagsText>
         {navs && (
            <Arrow
               lastImgNumber={slides.length - 1}
               setCurrentImgNumber={setCurrentImgNumber}
               loop={loop}
               direction='left'
            />
         )}
         <SlideText>{slides[currentImgNumber].text}</SlideText>
         {navs && (
            <Arrow
               lastImgNumber={slides.length - 1}
               setCurrentImgNumber={setCurrentImgNumber}
               loop={loop}
               direction='right'
            />
         )}
      </SliderWindow>
   );
});
