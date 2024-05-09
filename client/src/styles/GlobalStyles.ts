import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
   --vh: 100%;
}
  
a{
	text-decoration: none;
	color: inherit;
}
*{
	box-sizing: border-box;
}
html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
a, dl, dt, dd, ol, ul, li, form, label, table{
	margin: 0;
	padding: 0;
	border: 0;

}
body{
	line-height: 1;
	background-color: #fff;
	color:#000;
	font-size:16px;
}
ol, ul{
	list-style: none;
}
button  {
	border: 0;
	background: transparent;
	cursor: pointer;
}
button,input,p{
	font-family: "Wanted Sans Variable", "Wanted Sans", -apple-system,
      BlinkMacSystemFont, system-ui, "Segoe UI", "Apple SD Gothic Neo",
      "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", sans-serif;
}
`;

export default GlobalStyle;
