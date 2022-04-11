import {useEffect, useState} from 'react';
import {Flex, SliderBodyStyles} from '../styles';
import {SliderBody} from './SliderBody';

export interface ISliderItem {
   img: string;
   text: string;
}

export interface ISliderProps {
   slides: ISliderItem[];
   loop?: boolean;
   navs?: boolean;
   pags?: boolean;
   auto?: boolean;
   delay?: number;
   stopMouseHover?: boolean;
}

export const Slider: React.FC<ISliderProps> = (props) => {
   const [currentImg, setCurrentImg] = useState(0);

   const [mouseEnter, setMouseEnter] = useState(false);

   const tick = () => {
      setCurrentImg((prev) => {
         if (prev === props.slides.length - 1) return 0;
         return prev + 1;
      });
   };

   useEffect(() => {
      let interval: NodeJS.Timeout;
      if (props.delay && props.auto && !mouseEnter) {
         interval = setInterval(() => tick(), props.delay * 1000);
      } else if (props.auto && !mouseEnter) {
         interval = setInterval(() => tick(), 5000);
      }
      return () => {
         clearInterval(interval);
      };
   }, [mouseEnter]);

   return (
      <Flex justify='center'>
         <SliderBodyStyles direction='column' align='center'>
            <SliderBody
               currentImg={currentImg}
               setCurrentImg={setCurrentImg}
               setMouseEnter={setMouseEnter}
               {...props}
            />
         </SliderBodyStyles>
      </Flex>
   );
};
