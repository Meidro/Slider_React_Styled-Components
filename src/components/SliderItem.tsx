import {SliderWindow, SlideText} from '../styles';
import {Arrow} from './Arrow';
import {Pags} from './Pags';
import {ISliderBodyProps} from './SliderBody';

interface ISliderItemProps extends ISliderBodyProps {}

export const SliderItem: React.FC<ISliderItemProps> = (props) => {
   return (
      <SliderWindow
         onMouseEnter={() => props.stopMouseHover && props.setMouseEnter(true)}
         onMouseLeave={() => props.stopMouseHover && props.setMouseEnter(false)}
         align='center'
         justify={props.navs ? 'space-between' : 'center'}
         url={`url(${props.slides[props.currentImg].img})`}
      >
         <Pags currentImg={props.currentImg} countImg={props.slides.length} />
         {props.navs && <Arrow {...props} direction='left' />}
         <SlideText>{props.slides[props.currentImg].text}</SlideText>
         {props.navs && <Arrow {...props} direction='right' />}
      </SliderWindow>
   );
};
