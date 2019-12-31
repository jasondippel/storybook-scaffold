import { create } from '@storybook/theming'

export default create({
  base: 'dark',

  colorPrimary: '#008abd',
  colorSecondary: '#008abd',

  // UI
  appBg: '#191d1f',
  appContentBg: '#2F3638',
  appBorderColor: '#2F3638',
  appBorderRadius: 2,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#F5FAFC',
  textInverseColor: '#2F3638',

  // Toolbar default and active colors
  barTextColor: '#F5FAFC',
  barSelectedColor: '#008abd',
  barBg: '#191d1f',

  // Form colors
  inputBg: '#FFFFFF',
  inputBorder: '#191d1f',
  inputTextColor: '#F5FAFC',
  inputBorderRadius: 2,

  brandTitle: 'My Workspace',
  brandUrl: null,
  brandImage: null,
})
