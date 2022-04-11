import {Slider} from './components/Slider';

export interface ISliderItem {
   img: string;
   text: string;
}

export const App: React.FC = () => {
   const slides = [
      {
         img: 'https://www.w3schools.com/howto/img_nature_wide.jpg',
         text: 'Caption Text 1',
      },
      {
         img: 'https://www.w3schools.com/howto/img_snow_wide.jpg',
         text: 'Caption Text 2',
      },
      {
         img: 'https://www.w3schools.com/howto/img_mountains_wide.jpg',
         text: 'Caption Text 3',
      },
   ];

   return <Slider slides={slides} loop={true} navs={true} pags={true} auto={true} delay={0} stopMouseHover={true} />;
};
