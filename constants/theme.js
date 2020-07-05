/**
 * Styled Components theme, plugs into <ThemeProvider />
 *
 * Grid uses - https://github.com/rebassjs/grid
 *
 * The 'space' values inside the theme object are used exclusively for the
 * Rebass package which has a ton of padding and margin helpers. While we
 * will typically use our 'spacing' object when creating custom components,
 * this will likely come in handy when using Rebass and any associated
 * Styled System packages
 */

import space from './space';
import breakpoints from './breakpoints';
import rem from './rem';
import media from './media';

const theme = {
  space,
  breakpoints,
  rem,
  media,
};

export default theme;
