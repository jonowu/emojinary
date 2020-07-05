/**
 * Loop over our breakpoints and create reusable media queries
 * Usage:
 *
 *  const Container = styled.div`
 *    max-width: 1280px;
 *
 *    // Large and up (default, mobile-first)
 *    ${({ theme }) => theme.media.lg`
 *      background: red;
 *    `}
 *
 *    // Below the medium breakpoint
 *    ${({ theme }) => theme.media.mdDown`
 *      background: greenSix;
 *    `}
 *  `;
 */

import { css } from 'styled-components';
import _ from 'lodash';

import breakpoints from './breakpoints';

const media = Object.keys(breakpoints).reduce((acc, label) => {
  // We don't need the array indexes from breakpoints as variables
  // we can check for numbers to remove them
  const labelsAsNumber = parseFloat(label);
  if (_.isNaN(labelsAsNumber)) {
    acc[label] = (...args) => css`
      @media (min-width: ${breakpoints[label]}) {
        ${css(...args)};
      }
    `;
    acc[`${label}Down`] = (...args) => css`
      @media (max-width: calc(${breakpoints[label]} - 1px)) {
        ${css(...args)};
      }
    `;
  }
  return acc;
}, {});

export default media;
