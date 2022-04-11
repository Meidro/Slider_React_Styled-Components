import styled, {createGlobalStyle} from 'styled-components';

type FlexType = {
   direction?: string;
   align?: string;
   justify?: string;
   wrap?: string;
   mt?: string;
   left?: string;
};

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

export const Flex = styled.div<FlexType>`
   display: flex;
   flex-direction: ${({direction}) => direction || 'row'};
   align-items: ${({align}) => align || 'stretch'};
   justify-content: ${({justify}) => justify || 'start'};
   flex-wrap: ${({wrap}) => wrap || 'nowrap'};
   margin-top: ${({mt}) => mt || '0'};
`;

export const SliderBodyStyles = styled(Flex)`
   width: 1000px;
`;

export const SliderWindow = styled(Flex)<{url?: string}>`
   position: relative;
   width: 100%;
   height: 350px;
   margin-top: 30px;
   overflow: hidden;
   background-image: ${({url}) => url || ''};
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center;
`;

export const PaginatorItem = styled(Flex)<{color: string}>`
   width: 25px;
   height: 25px;
   span {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: ${({color}) => color || '#cccccc'};
      cursor: pointer;
   }
`;

export const SlideText = styled.div`
   color: rgba(255, 255, 255, 0.9);
   align-self: flex-end;
   margin-bottom: 15px;
   font-weight: 500;
   user-select: none;
`;

export const PagsText = styled.div`
   color: rgba(255, 255, 255, 0.9);
   font-weight: 500;
   user-select: none;
   letter-spacing: 5px;
   position: absolute;
   top: 5px;
   left: 15px;
`;
