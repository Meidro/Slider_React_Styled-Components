import {Slider} from './components/Slider';

export const App = () => {
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
      {
         img: 'https://thumbs.dreamstime.com/b/forest-panorama-rays-sunlight-scenic-fresh-green-deciduous-trees-sun-casting-its-light-foliage-53826213.jpg',
         text: 'Caption Text 4',
      },
   ];

   return <Slider slides={slides} loop={true} navs={true} pags={true} auto={true} delay={0} stopMouseHover={true} />;
};
