import { config, list } from '@keystone-next/keystone';
import { text } from '@keystone-next/keystone/fields';

export const lists = {
  Todo: list({
    fields: {
      name: text(),
    },
  }),
};

export default config({
  db: {
    provider: 'sqlite',
    url: 'file:./keystone-example.db',
  },
  lists,
});