"use client";
import { CSS_LIGHT_PALETTE, CSS_LIGHT_THEME } from "@/themes/colors";
import styled from "styled-components";

const Root = styled.html`
    ${CSS_LIGHT_PALETTE}
    ${CSS_LIGHT_THEME}
`;

export default Root;
// return (
//       <Root lang="en" className={clsx(space_mono.variable, comfortaa.variable)}>
//         {children}
//     </Root>
// )
// export default function Root({ children }) {
//   return (
//   <Root lang="en" className={clsx(space_mono.variable, comfortaa.variable)}>
//         {children}
//     </Root>
//   );
// }
