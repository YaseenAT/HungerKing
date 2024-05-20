import images from './images';

const wines = [
  {
    title: 'paneer kadayi',
    price: 'Rs 56',
    tags: 'Spicy | Large',
  },
  {
    title: 'South Indian Meals',
    price: 'Rs 101',
    tags: 'papad | Gulab jamun',
  },
  {
    title: "Butter Naan",
    price: 'Rs 144',
    tags: 'small | large',
  },
  {
    title: 'mashroom Biryani',
    price: 'Rs 231',
    tags: 'half | large',
  },
  {
    title: 'Hydrabadi Biryani',
    price: 'Rs 226',
    tags: 'Kaju | Paneer',
  },
];

const cocktails = [
  {
    title: 'A T Special Chicken Biryani',
    price: 'Rs 320',
    tags: 'Roasted chicken | kaju grevy | soda | Gulab jamun',
  },
  {
    title: "Chicken kadayi",
    price: 'Rs 116',
    tags: 'small | Large | ',
  },
  {
    title: 'Dum Biryani',
    price: 'Rs 210',
    tags: 'Boiled Chicken | Special chatni | salad',
  },
  {
    title: 'Roti curry combo',
    price: 'Rs 85',
    tags: 'Maida  | additinal Ghee | Kaju curry',
  },
  {
    title: 'Bucket Biryani',
    price: 'Rs 226',
    tags: '4 Leg piece | Basumati | Hydarabadi style ',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
