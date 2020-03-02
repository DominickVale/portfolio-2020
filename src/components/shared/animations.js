import styled, {keyframes} from 'styled-components'

export const navLinkBlink = keyframes`
from{
  opacity: 0;
}

10%{
  opacity: 1;
}

20%{
  opacity: 0;
}

30%{
  opacity: 1;
}

40%{
  opacity: 0;
}

50%{
  opacity: 1;
}

60%{
  opacity: 0;
}

70%{
  opacity: 1;
}

80%{
  opacity: 0;
}

to{
  opacity: 1;
}
`

export const slowBlink = keyframes`
from{
  opacity: 0.2;
}

50%{
  opacity: 0.6;
}

to{
  opacity: 0.2;
}
`

export const actionBgGlitch = keyframes`
0%{
  transform: translate(10%, 10%) scale(0.8, 0.2);
}

30%{
  transform: translate(-15%, -5%) scale(1);
}

60%{
  transform: translate(15%, 20%) scale(0.6, 0.2);
}

100%{
  transform: translate(0px, 0px) scale(1);
}
`

export const openMenu = keyframes`
from{
  height: 0;
}
to{
  height: 100%
}
`

export const fadeIn = keyframes`
from{
  opacity: 0;
}
to{
  opacity: 1;
}`

export const noiseAnimation = keyframes`
0%, 100% {transform: translate(12%, -2%) rotate(0deg);}
30% {transform: translate(-2%, -10%) rotate(90deg);}
70% {transform: translate(4%, -24%) rotate(180deg);}
90% {transform: translate(-4%, 14%) rotate(270deg);}
`