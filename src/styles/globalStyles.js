import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Inter', sans-serif;
    line-height: 150%;
}

:root {
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;

    --color-sucess: #3FE864;
    --color-negative: #E83F5B;
    --color-warning: #FFCD07;
    --color-information: #155BCB;

    --color-grey-0: #F8F9FA;
    --color-grey-1:  #868E96; 
    --color-grey-2:  #343B41; 
    --color-grey-3:  #212529; 
    --color-grey-4:  #121214; 

    --font-s18: 1.125rem; /* 18px */
    --font-s16: 1rem; /* 16px */
    --font-s14: .875rem; /* 14px */
    --font-s12: .75rem; /* 12px */

    --font-w700: 700;
    --font-w600: 600;
    --font-w500: 500;
    --font-w400: 400;

    --radius-1: .25rem; /* 4px */
    --radius-2: .5rem; /* 8px */

    --size-1: 3.5rem; /* 56px */
    --size-2: 3rem; /* 48px */
    --size-3: 2.25rem; /* 36px */

    --gap-1: 2rem; /* 32px */
    --gap-2: 1.75rem; /* 28px */
    --gap-3: 1.5rem; /* 24px */
    --gap-4: 1.25rem; /* 20px */
    --gap-5: 1rem; /* 16px */
    --gap-6: .75rem; /* 12px */
    --gap-7: .5rem; /* 8px */
    --gap-8: .25rem; /* 4px */

    --container-1: 75rem; /* 1200px */
    --container-2: 23.75rem; /* 380px */
}

header, body{
    background-color: var(--color-grey-4);
}

img {
    max-width: 100%;
}

ul {
    list-style: none;
}

.container-form {
    max-width: var(--container-2);
    margin: 50px auto;
    padding: 2.5rem 1.5rem;

}

.container{
    max-width: var(--container-1);
    margin: 0 auto;
}

@media (max-width: 900px) {
    .container, .container-form{
        max-width: 90%;
    }
}




/* ~~~~~~~~ FULL RESET ~~~~~~~~ */
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
	line-height: 150%;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`