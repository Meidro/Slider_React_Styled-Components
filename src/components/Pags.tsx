import {PagsText} from '../styles';

interface IPagsProps {
   currentImg: number;
   countImg: number;
}

export const Pags: React.FC<IPagsProps> = ({currentImg, countImg}) => {
   return <PagsText>{`${currentImg + 1}/${countImg}`}</PagsText>;
};
