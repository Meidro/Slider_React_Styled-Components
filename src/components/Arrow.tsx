import {FaAngleLeft, FaAngleRight} from 'react-icons/fa';
import {ISliderItem} from './Slider';

interface IArrowProps {
   slides: ISliderItem[];
   direction: string;
   loop?: boolean;
   setCurrentImg: (num: number | ((prev: number) => number)) => void;
}

export const Arrow: React.FC<IArrowProps> = ({direction, setCurrentImg, slides, loop}) => {
   const onLeftClick = () => {
      setCurrentImg((prev) => {
         if (prev === 0) return loop ? slides.length - 1 : prev;
         return prev - 1;
      });
   };

   const onRightClick = () => {
      setCurrentImg((prev) => {
         if (prev === slides.length - 1) return loop ? 0 : prev;
         return prev + 1;
      });
   };

   return (
      <div>
         {direction === 'left' ? (
            <FaAngleLeft onClick={onLeftClick} style={{cursor: 'pointer'}} color='#ffffff' size='40px' />
         ) : (
            <FaAngleRight onClick={onRightClick} style={{cursor: 'pointer'}} color='#ffffff' size='40px' />
         )}
      </div>
   );
};
