import {useCallback, useEffect, useState} from 'react';
import {Flex, SliderBodyStyles} from '../styles';
import {Paginations} from './Paginations';
import {SliderItem} from './SliderItem';

export interface Slide {
   img: string;
   text: string;
}

interface SliderProps {
   slides: Slide[];
   loop?: boolean;
   navs?: boolean;
   pags?: boolean;
   auto?: boolean;
   delay?: number;
   stopMouseHover?: boolean;
}

export const Slider = ({slides, auto, delay, loop, navs, pags, stopMouseHover}: SliderProps) => {
   const [currentImgNumber, setCurrentImgNumber] = useState(0);

   const [mouseOut, setMouseOut] = useState(true);

   const tick = useCallback(() => {
      setCurrentImgNumber((prev) => {
         if (prev === slides.length - 1) return 0;
         return prev + 1;
      });
   }, [slides.length]);

   useEffect(() => {
      let interval: NodeJS.Timeout;

      if (auto && mouseOut) {
         if (delay) {
            interval = setInterval(() => tick(), delay * 1000);
         } else {
            interval = setInterval(() => tick(), 5000);
         }
      }

      return () => {
         clearInterval(interval);
      };
   }, [mouseOut, auto, delay, tick]);

   const onMouseHover = useCallback(() => {
      stopMouseHover && setMouseOut((actual) => !actual);
   }, [stopMouseHover]);

   return (
      <Flex justify='center'>
         <SliderBodyStyles onMouseEnter={onMouseHover} onMouseLeave={onMouseHover} direction='column' align='center'>
            <SliderItem
               slides={slides}
               currentImgNumber={currentImgNumber}
               setCurrentImgNumber={setCurrentImgNumber}
               navs={navs}
               loop={loop}
            />
            {pags && (
               <Paginations
                  slides={slides}
                  currentImgNumber={currentImgNumber}
                  setCurrentImgNumber={setCurrentImgNumber}
               />
            )}
         </SliderBodyStyles>
      </Flex>
   );
};
