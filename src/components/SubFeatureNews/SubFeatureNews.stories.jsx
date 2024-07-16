import SubFeatureNews from './SubFeatureNews';

const meta = {
  title: 'Example/SubFeatureNews',
  component: SubFeatureNews,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const Primary = {
  args: {
    name: 'Daniel Albert',
    date: 'October 22, 2023',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut',
    category: 'Our Planet',
    readTime: '8',
  },
};
