import { Meta, StoryFn } from '@storybook/react';
import { MenuLink, MenuLinkProps } from '.';

export default {
  title: 'MenuLink',
  component: MenuLink,
  args: {
    children: 'MenuLink',
    link: 'https://www.google.com.br',
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;
export const Template: StoryFn<MenuLinkProps> = (args) => {
  return (
    <div style={{ display: 'flex' }}>
      <MenuLink {...args} />
    </div>
  );
};
