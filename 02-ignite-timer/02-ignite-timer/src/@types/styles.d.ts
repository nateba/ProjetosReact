import 'styled-components';
import { defaultTheme } from '../styles/themes/default';

type ThmeType = typeof defaultTheme;

declare module 'styled-components' {
    export interface DefauktTheme extends ThmeType { }
}