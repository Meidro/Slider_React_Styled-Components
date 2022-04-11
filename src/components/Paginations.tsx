import {Flex, PaginatorItem} from '../styles';
import {ISliderItem} from './Slider';

export interface IPaginationsProps {
   slides: ISliderItem[];
   currentImg: number;
   setCurrentImg: (num: number | ((prev: number) => number)) => void;
}

export const Paginations: React.FC<IPaginationsProps> = ({slides, setCurrentImg, currentImg}) => {
   return (
      <Flex mt='15px'>
         {slides.map((_, i) => (
            <PaginatorItem key={i} align='center' justify='center' color={currentImg === i ? '#444444' : ''}>
               <span onClick={() => setCurrentImg(i)}></span>
            </PaginatorItem>
         ))}
      </Flex>
   );
};
