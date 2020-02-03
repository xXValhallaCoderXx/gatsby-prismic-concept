import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo({
  inline: true,
  source: false,
  header: false
})); 