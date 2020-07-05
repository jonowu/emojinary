/**
 * Single source of truth for spacing, in a format that is required
 * by Rebass but also in named form for wider usage
 *
 * You can use it directly...
 *
 * import { space } from '../../styles/vars';
 *
 * const Container = styled.div`
 *  margin-top: ${space.xl};
 * `;
 *
 * Or via the theme
 *
 * const Container = styled.div`
 *  margin-top: ${({ theme }) => theme.space.xl};
 * `;
 *
 */

const space = [0, '0.25rem', '0.5rem', '1rem', '1.5rem', '2rem', '3rem', '4rem'];

/**
 * Aliases for space, we need to keep the above structure
 * as well for Rebass's array props
 */
/* eslint-disable prefer-destructuring */
space.xs = space[1]; // .5rem
space.sm = space[2]; // .5rem
space.base = space[3]; // 1rem
space.baseSm = space[4]; // 1.5rem
space.md = space[5]; // 2rem
space.lg = space[6]; // 3rem
space.xl = space[7]; // 4rem
// space.xxl = space[9]; // 5rem
/* eslint-enable */

export default space;
