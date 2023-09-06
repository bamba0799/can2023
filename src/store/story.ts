import { create } from 'zustand';

export type Story = {
  id: string;
  type: 'image' | 'video';
  source: unknown;
  viewed: boolean;
};

type Props = {
  stories: Story[];
};

type Actions = {
  mutateStories: (stories: Story[]) => void;
};

export const useStoryStore = create<Props & Actions>((set) => ({
  stories: [
    {
      id: '1',
      type: 'image',
      source: require('@assets/images/story/ivory-cost.jpeg'),
      viewed: false,
    },
    {
      id: '2',
      type: 'image',
      source: require('@assets/images/story/trophy.avif'),
      viewed: false,
    },
    {
      id: '3',
      type: 'image',
      source: require('@assets/images/story/celebration-civ.webp'),
      viewed: false,
    },
    {
      id: '4',
      type: 'image',
      source: require('@assets/images/story/trophy-2.jpg'),
      viewed: false,
    },
    {
      id: '5',
      type: 'image',
      source: require('@assets/images/story/reigning-champs.jpeg'),
      viewed: false,
    },
  ],
  mutateStories: (stories) => {
    set({ stories });
  },
}));
