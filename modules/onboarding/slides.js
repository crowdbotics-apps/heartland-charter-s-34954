import { faker } from '@faker-js/faker';

export const slides = [
  {
    key: 'one',
    image: {
      uri: faker.image.people(undefined, undefined, true),
    }
  },
  {
    key: 'two',
    image: {
      uri: faker.image.people(undefined, undefined, true),
    }
  },
  {
    key: 'three',
    image: {
      uri: faker.image.people(undefined, undefined, true),
    }
  },
];
