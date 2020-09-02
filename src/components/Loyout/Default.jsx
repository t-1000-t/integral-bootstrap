const React = require("react");

const DefaultLayout = (props) => {
    return (
        <html lang="en" class="h-100">
        <head>
            <meta charSet="utf-8"/>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />

            <link
                type="text/css"
                // rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
                integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
                crossOrigin="anonymous"
            />
            <link
                rel="canonical"
                href="https://getbootstrap.com/docs/4.5/examples/sticky-footer/"
            />
            <title>{props.title}</title>
        </head>
        <body>{props.children}</body>
        </html>
    );
};

module.exports = DefaultLayout;