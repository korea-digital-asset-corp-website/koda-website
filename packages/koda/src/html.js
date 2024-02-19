import React from "react";
import PropTypes from "prop-types";

import { env } from "src/configs/env";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="naver-site-verification"
          content="7b331409f493a6fb2ad3b5a2b2594acc55bb5d19"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            var isKo = window.location.href.lastIndexOf("/ko") === -1;
            if (detectIE() && window.location.href.lastIndexOf("support-browser") === -1) {
              window.location.href = isKo ? "/ko/support-browser.html" : "/en/support-browser.html";
            }
            function detectIE() {
              // < IE 10 
              var isIE = document.all && !window.atob;
              return isIE;
            }
          `,
          }}
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${env.GA_KEY}`}
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${env.GA_KEY}');`,
        }}
      />
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
