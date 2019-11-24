import React from "react";

import { ReactComponent as WomanFlyingBallon } from "../images/woman-flying-ballon.svg";
import { ReactComponent as IconCloud } from "../images/cloud.svg";
import { ReactComponent as IconRocket } from "../images/rocket.svg";
import { ReactComponent as IconBrilant } from "../images/brilant.svg";
import { ReactComponent as IconShop } from "../images/shop.svg";
import "./home.css";

let deferredPrompt;
window.addEventListener("beforeinstallprompt", e => {
  deferredPrompt = e;
});

const callPWA = () =>
  deferredPrompt
    ? deferredPrompt.prompt()
    : console.log("Navegador não suporta D:");

const Home = () => {
  return (
    <div className="pwa">
      <div className="pwa__cloud">
        <IconCloud />
        <IconCloud />
        <IconCloud />
        <IconCloud />
        <IconCloud />
      </div>
      <h1 className="pwa-title">
        {" "}
        Bem vindo ao
        <br /> Tech Summit
      </h1>
      <span className="pwa__woman-fly">
        <WomanFlyingBallon />
      </span>
      <h3 className="pwa-description">
        {" "}
        O app do iFood
        <br /> mais leve que uma selfie{" "}
      </h3>
      <div className="pwa__list">
        <span className="pwa__icon-list">
          {" "}
          <IconRocket />{" "}
        </span>
        <h4> Ocupa só 280 KB no seu Android </h4>
        <span className="pwa__icon-list">
          {" "}
          <IconBrilant />{" "}
        </span>
        <h4> Consome menos dados do seu 4G </h4>
        <span className="pwa__icon-list">
          {" "}
          <IconShop />{" "}
        </span>
        <h4> Instalação rápida e descomplicada </h4>
      </div>
      <button
        label="Instale agora"
        onClick={() => callPWA()}
        variant="pwa__install-button"
      >
        Installar PWA
      </button>
    </div>
  );
};

export default Home;
