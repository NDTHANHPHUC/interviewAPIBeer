// src/seed.ts

import { sequelize } from './sequelize';
import { Beer } from './models/Beer';

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true }); 

    const beers = [
      {
        price: '$16.99',
        name: 'Founders All Day IPA',
        rating: {
          average: 4.411243509154233,
          reviews: 453,
        },
        image: 'https://www.totalwine.com/media/sys_master/twmmedia/h00/h94/11891416367134.png',
      },
      // can add more beers info here:>
    ];

    await Beer.bulkCreate(beers);

    console.log('Database seeded successfully.');
    process.exit(0);
  } catch (error) {
    console.error('Failed to seed database:', error);
  }
};

seedDatabase();
