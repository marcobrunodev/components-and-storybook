import Logo from "../../components/Logo";

export default {
  title: "components/Logo",
  component: Logo,
};

const Template = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  simple: false,
};

export const Simple = Template.bind({});
Simple.args = {
  simple: true,
};
