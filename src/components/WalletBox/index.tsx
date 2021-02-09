import React, {useMemo} from 'react';

import { Container} from './styles';

import CountUp from 'react-countup'

import dollarImg from '../../assets/dollar.svg'
import arrowUp from '../../assets/arrow-up.svg'
import arrowDown from '../../assets/arrow-down.svg'

interface IWalletBox{
    title: string;
    amount: number;
    footerLabel: string;
    icon: 'dollar' | 'arrowUp' | 'arrowDown';
    color: string;
}

const WalletBox: React.FC<IWalletBox> = ({
    title,
    amount,
    footerLabel,
    icon,
    color
}) => {


    const iconSelected =  useMemo(() => {
        switch(icon){
            case'dollar':
            return dollarImg;
            case'arrowUp':
            return arrowUp;
            case'arrowDown':
            return arrowDown;
        }
    },[icon])

  return (
      <Container color={color}>
          <span>{title}</span>
          <h1>
          <CountUp
            end={amount}
            start={500}
            prefix='R$ '
            separator='.'
            decimal=','
          />
          </h1>
          <small>{footerLabel}</small>
          <img src={iconSelected} alt={title}/> 
      </Container>
  );
}

export default WalletBox;