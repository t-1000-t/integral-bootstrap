import React from "react";
import { Link } from "react-router-dom";
import stylish from "./ContactPage.module.css";

const ContactPage = () => {
  return (
    <div className={stylish.wrapper}>
      <div className={stylish.aboutLeft}></div>
      <div className={stylish.aboutMiddle}>
        <div className={stylish.container}>
          <div className={stylish.fontTextAbout}>Расположение</div>Integral
          <div className={stylish.fontTextAbout}>google map</div>
        </div>
        <iframe
          className={stylish.mapIntegral}
          title="myFrame"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d861.8796958335039!2d32.64200982926102!3d46.66527241904154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c410179bfbaab9%3A0x80e075338214cd9b!2z0JjQndCi0JXQk9Cg0JDQmywg0J7QntCeLCDQmtCe0JzQnNCV0KDQp9CV0KHQmtCQ0K8g0JPQoNCj0J_Qn9CQ!5e1!3m2!1sru!2sua!4v1585412008403!5m2!1sru!2sua"
        ></iframe>
      </div>
      <div className={stylish.aboutRight}>
        <div className={stylish.fontTextAbout}>
          <br></br>
          График работы:<br></br>
          <br></br>
          <b>Пн-Пт</b> - с 09:00 до 18:00
        </div>
        <div className={stylish.fontTextContact}>
          <b>Сб</b> - с 10:00 до 16:00
        </div>
        <div className={stylish.fontTextContact}>
          <b>Вс</b> - Выходной
          <br></br>
          <br></br>
          <div>
            <b>ул. Илюши Кулика, 143.</b> Вход с торца по крыльцу, первый этаж.
          </div>
          <Link to={"/"}>
            <div className={stylish.boxImgVisit}>
              <div className={stylish.visitcard}></div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
