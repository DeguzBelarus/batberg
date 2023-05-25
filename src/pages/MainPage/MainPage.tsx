import { FC } from 'react';

import { beerData } from '../../constants/beerData';
import batBergLogo from '../../assets/img/batberg-logo.png';
import './MainPage.scss';
import { BeerCard } from './components/BeerCard/BeerCard';

export const MainPage: FC = () => {
  return (
    <div className="main-page-wrapper">
      <div className="logo-wrapper">
        <img draggable={false} src={batBergLogo} alt="barrel with beer and a bat label" />
      </div>
      <div className="beer-cards-wrapper">
        {beerData?.length
          ? beerData.map((beerItemData, index) => {
              return <BeerCard data={beerItemData} id={index} key={index} />;
            })
          : null}
      </div>
    </div>
  );
};
