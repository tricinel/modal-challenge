import { withCssResources } from '@storybook/addon-cssresources';
import cssresources from './cssresources';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewMode: 'docs',
  layout: 'centered',
  cssresources,
  previewTabs: { 'storybook/docs/panel': { index: -1 } },
  options: {
    storySort: {
      order: [
        'Welcome',
        'RFCs',
        'Components',
        [
          'Modal',
          ['Docs', 'Examples', 'Subcomponents'],
          'Button',
          'Status',
          ['Message', 'ErrorFallback'],
          'Form',
          'Image',
          'Icons',
        ],
      ],
    },
  }
};

export const decorators = [withCssResources];
