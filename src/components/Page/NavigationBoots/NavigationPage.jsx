import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import stylish from "./NavigationPage.module.css";
import routes from "../../../routes/routes";

import { Icon } from "@iconify/react";
import callOutline from "@iconify/icons-ion/call-outline";

import mailOpenOutline from "@iconify/icons-ion/mail-open-outline";
import chatboxEllipsesOutline from "@iconify/icons-ion/chatbox-ellipses-outline";
import ModalPicturesPage from "../../Modals/ModalPicturesPage/ModalPicturesPage";

class NavigationPage extends Component {
  state = {
    isOpenBurger: false,
    isOpenBanner: false,
    // isOpenChange: false,
  };

  componentDidMount() {
    this.changeBanner();
  }

  changeBanner = () => {
    setInterval(() => {
      this.setState({
        isOpenChange: !this.state.isOpenChange,
      });
    }, 2500);
  };

  // toggleBanner = () => {
  //   this.setState({
  //     isOpenBanner: !this.state.isOpenBanner,
  //   });
  // };

  toggleBurger = () => {
    this.setState({
      isOpenBurger: !this.state.isOpenBurger,
    });
  };

  render() {
    const { isOpenBurger, isOpenBanner } = this.state;
    return (
      <div
        className={isOpenBurger ? stylish.boxWrapperAfter : stylish.boxWrapper}
      >
        <ul className={stylish.wrapper}>
          <li className={stylish.integral}>
            <NavLink className={stylish.logoNavLink} exact to={routes.HOME}>
              <img
                className={stylish.imglogo}
                width="100%"
                height="65px"
                src="https://i7.uihere.com/icons/906/860/946/integral-0681af81fd3316200694093debc5ba64.svg"
                alt=""
              />
              <p className={stylish.logo}>Integral</p>
              <div className={stylish.basta}></div>
            </NavLink>
          </li>
          <li className={stylish.middleNavigation}>
            {!isOpenBurger && (
              <NavLink exact to={routes.HOME}>
                <button className={stylish.home}>Главная</button>
              </NavLink>
            )}
            <div className={stylish.header_burger} onClick={this.toggleBurger}>
              <span></span>
            </div>
            {/* <NavLink exact to={routes.MAIN}>
              <button className={stylish.main}>main</button>
            </NavLink> */}
            {!isOpenBurger && (
              <NavLink exact to={routes.CONTACT}>
                <button className={stylish.about}>Контакты</button>
              </NavLink>
            )}

            <>
              {isOpenBanner && (
                <ModalPicturesPage onClose={this.toggleBanner}>
                  <div className={stylish.bannerModal}></div>
                </ModalPicturesPage>
              )}
            </>
          </li>
          <li className={stylish.support}>
            <div className={stylish.boxSupport1}>
              <Icon className={stylish.iconCall} icon={callOutline} />

              <div className={stylish.suppNomber}>
                (+38) 066 <b>911</b> 0347
              </div>
            </div>
            <br />
            <div className={stylish.boxSupport2}>
              <Icon className={stylish.iconMail} icon={mailOpenOutline} />
              <div className={stylish.suppMail}>
                <a className={stylish.linkMail} href="mailto:info@integral.com">
                  info@integral.com
                </a>
              </div>
            </div>
            <div className={stylish.boxSupport2}>
              <Icon
                className={stylish.iconViber}
                icon={chatboxEllipsesOutline}
              />
              <div className={stylish.suppViber}>
                <a
                  className={stylish.linkMail}
                  title="Должен быть установлен Viber для ПК"
                  href="viber://chat?number=+380669110347"
                >
                  Написать в Viber
                </a>
              </div>
            </div>
          </li>
        </ul>
        {isOpenBurger && (
          <div className={stylish.listBurgerMenu}>
            <NavLink exact to={routes.HOME} onClick={this.toggleBurger}>
              <button className={stylish.start}>home</button>
            </NavLink>
            <NavLink exact to={routes.ABOUT}>
              <button className={stylish.contact} onClick={this.toggleBurger}>
                contact
              </button>
            </NavLink>
          </div>
        )}
      </div>
    );
  }
}

export default NavigationPage;
