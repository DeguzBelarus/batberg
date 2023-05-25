import { FC } from 'react';

import batBergLogo from '../../assets/img/batberg-logo.png';
import './MainPage.scss';

export const MainPage: FC = () => {
  return (
    <div className="main-page-wrapper">
      <div className="logo-wrapper">
        <img draggable={false} src={batBergLogo} alt="barrel with beer and a bat label" />
      </div>
    </div>
  );
};
