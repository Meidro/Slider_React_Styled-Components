import {SliderBodyStyles} from '../styles';
import {Paginations} from './Paginations';
import {ISliderProps} from './Slider';
import {SliderItem} from './SliderItem';

export interface ISliderBodyProps extends ISliderProps {
   currentImg: number;
   setCurrentImg: (num: number | ((prev: number) => number)) => void;
   setMouseEnter: (flaf: boolean) => void;
}

export const SliderBody: React.FC<ISliderBodyProps> = (props) => {
   return (
      <SliderBodyStyles
         onMouseEnter={() => props.stopMouseHover && props.setMouseEnter(true)}
         onMouseLeave={() => props.stopMouseHover && props.setMouseEnter(false)}
         direction='column'
         align='center'
      >
         <SliderItem {...props} />

         {props.pags && <Paginations {...props} />}
      </SliderBodyStyles>
   );
};
