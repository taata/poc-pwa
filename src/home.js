import React from 'react';


// import WomanFlyingBallon from './images/woman-flying-ballon.svg';
// import IconCloud from './images/cloud.svg';
// import IconBrilant from './images/brilant.svg';
// import IconShop from './images/shop.svg';
// import IconRocket from './images/rocket.svg';
import './home.css';

export default function Home() {
  return (
   <div className="pwa-lp-header-gate">
      <div className="pwa-lp-cartoon">
        <div className="pwa-lp-cartoon-clouds">
          {/* <IconCloud />
          <IconCloud />
          <IconCloud />
          <IconCloud /> */}
        </div>
        <div className="pwa-lp-cartoon__woman-flying">
          {/* <WomanFlyingBallon /> */}
          <span className="pwa-lp-cartoon__shadow" />
        </div>
      </div>

      <h1 className="pwa-lp-header__heading">aa header</h1>
      <div className="pwa-lp-header-items">
        <h2 className="pwa-lp-header-items__item">
          {/* <IconRocket /> */}
         a
        </h2>
        <h2 className="pwa-lp-header-items__item">
          {/* <IconBrilant /> */}
        b
        </h2>
        <h2 className="pwa-lp-header-items__item">
          {/* <IconShop /> */}
       c
        </h2>
      </div>
      <button
            label='Instale agora'
            onClick=''
            variant="pwa-lp__install-button"
          />
          </div>
  );
}

