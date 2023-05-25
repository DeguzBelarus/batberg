import { FC } from 'react';

import batBergLogo from '../../../../assets/img/batberg-logo.png';
import { IBeerData } from '../../../../types/types';
import './BeerCard.scss';

interface Props {
  data: IBeerData;
  id: number;
}

export const BeerCard: FC<Props> = ({
  id,
  data: { alc, amount, density, description, heading, name, subheading },
}) => {
  return (
    <div className="beer-card-wrapper">
      <div className="upper-container">
        <div className="poster-container">
          <img className="poster" src={batBergLogo} alt="barrel with beer and a bat label" />
          <p className="beer-data-paragraph">{`${amount}L ${density} ${alc}%/Vol`}</p>
        </div>
        <div className="name-container">
          <h2>{name}</h2>
          <p>{description || ''}</p>
        </div>
      </div>
      <div className="info-container">
        <p className="heading-paragraph">{heading}</p>
        <p className="subheading-paragraph">{subheading || ''}</p>
        <p className="title-paragraph">Brewed by Batberg</p>
      </div>
    </div>
  );
};
