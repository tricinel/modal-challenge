export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewMode: 'docs',
  previewTabs: { 'storybook/docs/panel': { index: -1 } },
  options: {
    storySort: {
      order: [
        'Introduction',
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
  },
};
