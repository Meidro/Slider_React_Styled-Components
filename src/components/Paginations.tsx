import React from 'react';
import {Flex, PaginatorItem} from '../styles';
import {Slide} from './Slider';

interface PaginationsProps {
   slides: Slide[];
   currentImgNumber: number;
   setCurrentImgNumber: (num: number | ((prev: number) => number)) => void;
}

export const Paginations = React.memo(({slides, setCurrentImgNumber, currentImgNumber}: PaginationsProps) => {
   return (
      <Flex mt='15px'>
         {slides.map((_, i) => (
            <PaginatorItem key={i} align='center' justify='center' color={currentImgNumber === i ? '#444444' : ''}>
               <span onClick={() => setCurrentImgNumber(i)}></span>
            </PaginatorItem>
         ))}
      </Flex>
   );
});
