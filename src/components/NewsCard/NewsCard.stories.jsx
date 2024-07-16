import NewsCard from './NewsCard';

const meta = {
  title: 'Example/NewsCard',
  component: NewsCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

export const Primary = {
  args: {
    mainText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut',
    subText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius mod tempor incididunt ut',
    category: 'Space and universe',
    readTime: '5',
  },
};
