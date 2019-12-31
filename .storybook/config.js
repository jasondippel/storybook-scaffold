import React from 'react'
import styled from 'styled-components'
import { withA11y } from '@storybook/addon-a11y'
import { configure, addDecorator, addParameters } from '@storybook/react'
import workspaceTheme from './workspaceTheme'

const Root = styled.div`
  padding: 16px;
  color: #f5fafc;
  background: #2f3638;
`

// Option defaults.
addParameters({
  options: {
    theme: workspaceTheme,
  },
  a11y: {
    restoreScroll: true,
  },
})

addDecorator(storyFn => <Root>{storyFn()}</Root>)
addDecorator(withA11y)

configure(require.context('../src/', true, /\.stories\.js$/), module)
