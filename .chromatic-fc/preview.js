import {configureActions} from '@storybook/addon-actions';
import React from 'react';
import {VerticalCenter} from './layout';
import {withChromaticProvider} from './custom-addons/chromatic';


// decorator order matters, the last one will be the outer most

configureActions({
  depth: 10
});

export const parameters = {
  options: {
    storySort: (a, b) => {
      return a.title === b.title
        ? 0
        : a.id.localeCompare(b.id, undefined, { numeric: true });
    }
  },
  a11y: {},
  layout: 'fullscreen',
  chromatic: {
    forcedColors: 'active'
  }
};

export const decorators = [
  story => (
    <VerticalCenter style={{alignItems: 'center', minHeight: null, boxSizing: 'border-box', display: 'flex', justifyContent: 'center'}}>
      {story()}
    </VerticalCenter>
  ),
  withChromaticProvider
];
