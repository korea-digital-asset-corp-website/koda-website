import styled, { css } from "styled-components";
import { media } from "src/utils/media";

export const titleFontFamily = "Spoqa Han Sans Neo, sans-serif";
export const bodyFontFamily = "Spoqa Han Sans Neo, sans-serif";

export const Pre = styled.pre`
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: keep-all;
  -webkit-font-smoothing: antialiased;
`;
export const Li = styled.li`
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: keep-all;
  -webkit-font-smoothing: antialiased;
`;

export const h1CSS = css`
  font-family: ${titleFontFamily};
  font-style: normal;
  font-weight: bold;
  font-size: 52px;
  line-height: 68px;
  letter-spacing: -2%;
  ${media.mobile`
    font-size: 34px;
    line-height: 48px;
  `}
`;

export const H1 = styled.div`
  ${h1CSS}
`;

export const H1Pre = styled(Pre)`
  ${h1CSS}
`;

export const h2CSS = css`
  font-family: ${titleFontFamily};
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 60px;
  letter-spacing: -1%;
  ${media.mobile`
    font-size: 28px;
    line-height: 40px;
  `}
`;

export const H2 = styled.div`
  ${h2CSS}
`;

export const H2Pre = styled(Pre)`
  ${h2CSS}
`;

export const h3MobileCSS = css`
  font-family: ${titleFontFamily};
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 34px;
  letter-spacing: -1%;
`;

export const h3CSS = css`
  font-family: ${titleFontFamily};
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 48px;
  letter-spacing: -1%;
  ${media.mobile`
    font-size: 24px;
    line-height: 34px;
  `}
`;

export const H3 = styled.div`
  ${h3CSS}
`;

export const H3Pre = styled(Pre)`
  ${h3CSS}
`;

export const h4CSS = css`
  font-family: ${titleFontFamily};
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: -0.5%;
  ${media.mobile`
    font-size: 18px;
    line-height: 28px;
  `}
`;

export const H4 = styled.div`
  ${h4CSS}
`;

export const H4Pre = styled(Pre)`
  ${h4CSS}
`;

export const h5CSS = css`
  font-family: ${titleFontFamily};
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.5%;
  ${media.mobile`
    font-size: 16px;
    line-height: 26px;
  `}
`;

export const H5 = styled.div`
  ${h5CSS}
`;

export const H5Pre = styled(Pre)`
  ${h5CSS}
`;

export const mobileBody1CSS = css`
  font-family: ${bodyFontFamily};
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
`;

export const body1CSS = css`
  font-family: ${bodyFontFamily};
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  ${media.mobile`
    font-size: 16px;
    line-height: 26px;
  `}
`;

export const Body1 = styled.div`
  ${body1CSS}
`;

export const Body1Pre = styled(Pre)`
  ${body1CSS}
`;

export const body1BoldCSS = css`
  font-family: ${bodyFontFamily};
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 32px;
  ${media.mobile`
    font-size: 16px;
    line-height: 25px;
  `}
`;

export const Body1Bold = styled.div`
  ${body1BoldCSS}
`;

export const body2CSS = css`
  font-family: ${bodyFontFamily};
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  ${media.mobile`
    font-size: 15px;
    line-height: 24px;
  `}
`;

export const body2BoldCSS = css`
  font-family: ${bodyFontFamily};
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 30px;
  ${media.mobile`
    font-size: 15px;
    line-height: 24px;
  `}
`;

export const Body2 = styled.div`
  ${body2CSS};
`;

export const Body2A = styled.a`
  ${body2CSS};
`;

export const Body2Pre = styled(Pre)`
  ${body2CSS};
`;

export const Body2Li = styled(Li)`
  ${body2CSS};
`;

export const Body2Span = styled.span`
  ${body2CSS};
`;

export const Body2BoldSpan = styled.span`
  ${body2BoldCSS}
`;

export const mobileCaptionCSS = css`
  font-family: ${bodyFontFamily};
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 22px;
`;

export const captionCSS = css`
  font-family: ${bodyFontFamily};
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  ${media.mobile`
    font-size: 11px;
    line-height: 17px;
  `}
`;

export const Caption = styled.div`
  ${captionCSS};
`;

export const CaptionPre = styled(Pre)`
  ${captionCSS};
`;

export const CaptionSpan = styled.span`
  ${captionCSS};
`;

export const CaptionA = styled.a`
  ${captionCSS};
`;

export const buttonCSS = css`
  font-family: ${bodyFontFamily};
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  ${media.mobile`
    font-size: 16px;
  `}
`;

export const Button = styled.div`
  ${buttonCSS};
`;

export const button2CSS = css`
  font-family: ${bodyFontFamily};
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  ${media.mobile`
    font-size: 12px;
  `}
`;

export const Button2 = styled.div`
  ${button2CSS};
`;

// export const buttonCSS = css`
//   font-family: ${titleFontFamily};
//   font-style: normal;
//   font-weight: bold;
//   font-size: 16px;
//   line-height: 22px;
//   ${media.mobile`
//     font-style: normal;
//     font-weight: bold;
//     font-size: 13px;
//     line-height: 22px;
//   `}
// `;

// export const Button = styled.a`
//   ${buttonCSS}
// `;

export const GNBCSS = css`
  font-family: ${titleFontFamily};
  font-size: 22px;
  font-weight: 500;
  letter-spacing: -0.2px;
  ${media.mobile`
    font-size: 14px;
    line-height: 20px;
  `}
`;

export const GNB = styled.div`
  ${GNBCSS}
`;
