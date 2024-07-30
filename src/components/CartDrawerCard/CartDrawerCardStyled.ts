import { keyframes } from '@mui/material';

export const animation = keyframes`
0% {
   -webkit-transform: rotateX(0);
           transform: rotateX(0);
   opacity: 1;
 }
 100% {
   -webkit-transform: rotateX(70deg);
           transform: rotateX(70deg);
   opacity: 0;
 }
`;
