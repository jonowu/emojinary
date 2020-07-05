/**
 * Breakpoint variables for - https://github.com/rebassjs/grid
 */

const breakpoints = ['0px', '576px', '768px', '992px', '1200px', '1415px'];

/**
 * Aliases for breakpoints, we need to keep the above structure
 * as well for Rebass's array props
 */
/* eslint-disable prefer-destructuring */
breakpoints.xs = breakpoints[0]; // < 576px
breakpoints.sm = breakpoints[1]; // 576px
breakpoints.md = breakpoints[2]; // 768px
breakpoints.lg = breakpoints[3]; // 992px
breakpoints.xl = breakpoints[4]; // 1200px
breakpoints.xxl = breakpoints[5]; // 1415px
/* eslint-enable */

export default breakpoints;
