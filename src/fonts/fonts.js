import { createGlobalStyle } from "styled-components";

//  Import "Bangers" font
import BangersEOT from "./Bangers_font/bangers-v13-latin-regular.eot";
import BangersSVG from "./Bangers_font/bangers-v13-latin-regular.svg";
import BangersTTF from "./Bangers_font/bangers-v13-latin-regular.ttf";
import BangersWOFF from "./Bangers_font/bangers-v13-latin-regular.woff";
import BangersWOFF2 from "./Bangers_font/bangers-v13-latin-regular.woff2";

// Import "Prompt" font
import PromptEOT from "./Prompt_font/prompt-v5-latin-regular.eot";
import PromptSVG from "./Prompt_font/prompt-v5-latin-regular.svg";
import PromptTTF from "./Prompt_font/prompt-v5-latin-regular.ttf";
import PromptWOFF from "./Prompt_font/prompt-v5-latin-regular.woff";
import PromptWOFF2 from "./Prompt_font/prompt-v5-latin-regular.woff2";

export default createGlobalStyle`
    @font-face {
        font-family: 'Bangers';
        font-style: normal;
        font-weight: 400;
        src: url('../fonts/bangers-v13-latin-regular.eot'); /* IE9 Compat Modes */
        src: local(''),
            url(${BangersEOT}) format('embedded-opentype'), /* IE6-IE8 */
            url(${BangersWOFF2}) format('woff2'), /* Super Modern Browsers */
            url(${BangersWOFF}) format('woff'), /* Modern Browsers */
            url(${BangersTTF}) format('truetype'), /* Safari, Android, iOS */
            url(${BangersSVG}) format('svg'); /* Legacy iOS */
    }

    @font-face {
        font-family: 'Prompt';
        font-style: normal;
        font-weight: 400;
        src: url('../fonts/bangers-v13-latin-regular.eot'); /* IE9 Compat Modes */
        src: local(''),
            url(${PromptEOT}) format('embedded-opentype'), /* IE6-IE8 */
            url(${PromptWOFF2}) format('woff2'), /* Super Modern Browsers */
            url(${PromptWOFF}) format('woff'), /* Modern Browsers */
            url(${PromptTTF}) format('truetype'), /* Safari, Android, iOS */
            url(${PromptSVG}) format('svg'); /* Legacy iOS */
    }
`;
