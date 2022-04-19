import React from 'react';
import {useCallback} from 'react';
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa';

interface ArrowProps {
   lastImgNumber: number;
   direction: string;
   loop?: boolean;
   setCurrentImgNumber: (num: number | ((prev: number) => number)) => void;
}

export const Arrow = React.memo(({direction, setCurrentImgNumber, lastImgNumber, loop}: ArrowProps) => {
   const onLeftClick = useCallback(() => {
      setCurrentImgNumber((numberImgActual) => {
         if (numberImgActual > 0) return numberImgActual - 1;
         return loop ? lastImgNumber : numberImgActual;
      });
   }, [lastImgNumber, setCurrentImgNumber, loop]);

   const onRightClick = useCallback(() => {
      setCurrentImgNumber((numberImgActual) => {
         if (numberImgActual < lastImgNumber) return numberImgActual + 1;
         return loop ? 0 : numberImgActual;
      });
   }, [lastImgNumber, setCurrentImgNumber, loop]);

   return (
      <div>
         {direction === 'left' ? (
            <FaAngleLeft onClick={onLeftClick} style={{cursor: 'pointer'}} color='#ffffff' size='40px' />
         ) : (
            <FaAngleRight onClick={onRightClick} style={{cursor: 'pointer'}} color='#ffffff' size='40px' />
         )}
      </div>
   );
});
