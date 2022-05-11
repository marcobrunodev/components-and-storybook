import React from "react";
import Description from ".";

export default {
  title: "components/Description",
  component: Description,
};

const Template = (args) => <Description {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Estamos felizes em te ver por aqui, mais uma vez!",
};
