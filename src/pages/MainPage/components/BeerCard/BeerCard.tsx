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
  const headingColors = ['b42127', 'cc9052', '51ccba', '525fd1', 'a853cc'];
  return (
    <div className="beer-card-wrapper">
      <div className="upper-container">
        <div className="poster-container">
          <img className="poster" src={batBergLogo} alt="barrel with beer and a bat label" />
          <p className="beer-data-paragraph">{`${amount}L ${density.toFixed(1)} ${alc}%/Vol`}</p>
        </div>
        <div className="name-container">
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
      </div>
      <div className="info-container">
        <p className="heading-paragraph" style={{ color: `#${headingColors[id]}` }}>
          {heading}
        </p>
        <p className="subheading-paragraph">{subheading || ''}</p>
        <p className="title-paragraph">Brewed by Batberg</p>
      </div>
    </div>
  );
};
