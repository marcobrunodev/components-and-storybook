import React from "react";
import Logo from ".";

export default {
  title: "components/Logo",
  component: Logo,
};

const Template = function templateLogo(args) {
  return <Logo {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  simple: false,
};

export const Simple = Template.bind({});
Simple.args = {
  simple: true,
};
