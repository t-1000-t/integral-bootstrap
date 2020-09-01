const React = require('react');
const DefaultLayout = require('./layouts/default');
const HeaderPage = require('./layouts/headerPage/headerPage');
const MainPage = require('./layouts/mainPage/mainPage');
const FooterPage = require('./layouts/footerPage/footerPage');


module.exports = () => (
    <DefaultLayout>
        <HeaderPage/>
        <MainPage/>
        <FooterPage/>
    </DefaultLayout>
);