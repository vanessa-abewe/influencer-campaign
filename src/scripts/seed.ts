
import { MongoClient } from 'mongodb';
import { config } from 'dotenv';

config();

const uri = process.env.MONGODB_URI || 'mongodb+srv://vanessabewe:LFcCXF2FiVZbZV0n@campaign.up07e.mongodb.net/';

const randomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

async function seedDatabase() {
  try {
    const client = await MongoClient.connect(uri);
    const db = client.db('campaignDB');

    await db.collection('influencers').deleteMany({});
    await db.collection('posts').deleteMany({});
    await db.collection('campaigns').deleteMany({});

    const influencers = Array.from({ length: 20 }, (_, i) => ({
      name: `Influencer ${i + 1}`,
      email: `influencer${i + 1}@example.com`,
      joinDate: new Date(Date.now() - randomInt(0, 90) * 24 * 60 * 60 * 1000),
      postsCount: randomInt(5, 30),
      engagement: parseFloat((Math.random() * 10 + 2).toFixed(2)),
      earnings: parseFloat((Math.random() * 5000 + 1000).toFixed(2))
    }));

    const insertedInfluencers = await db.collection('influencers').insertMany(influencers);
    interface Influencer {
        name: string;
        email: string;
        joinDate: Date;
        postsCount: number;
        engagement: number;
        earnings: number;
    }

    const posts: any[] = [];
    Object.values(insertedInfluencers.insertedIds).forEach(influencerId => {
      const postCount = randomInt(5, 30);
      for (let i = 0; i < postCount; i++) {
        posts.push({
          influencerId: influencerId.toString(),
          createdAt: new Date(Date.now() - randomInt(0, 90) * 24 * 60 * 60 * 1000),
          likes: randomInt(100, 5000),
          comments: randomInt(10, 500),
          shares: randomInt(5, 200)
        });
      }
    });

    await db.collection('posts').insertMany(posts);

    const campaign = {
      name: 'Summer Campaign 2024',
      startDate: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000),
      endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
      totalPosts: posts.length,
      totalEngagement: posts.reduce((acc, post) => acc + post.likes + post.comments + post.shares, 0),
      totalEarnings: influencers.reduce((acc, inf) => acc + inf.earnings, 0)
    };

    await db.collection('campaigns').insertMany([campaign]);

    console.log('Database seeded successfully!');
    console.log(`Created ${influencers.length} influencers`);
    console.log(`Created ${posts.length} posts`);
    console.log('Created 1 campaign');

    await client.close();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();