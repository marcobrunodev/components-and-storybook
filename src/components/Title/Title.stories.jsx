import React from "react";
import Title from "./";

export default {
  title: "components/Title",
  component: Title,
};

const Template = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Boas-vindas",
};
