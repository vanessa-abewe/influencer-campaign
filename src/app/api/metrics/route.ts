import { NextResponse } from 'next/server';
import clientPromise from '@/db';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("campaignDB");
    const [totals] = await db.collection("campaigns")
      .aggregate([
        {
          $group: {
            _id: null,
            totalPosts: { $sum: "$totalPosts" },
            totalEngagement: { $sum: "$totalEngagement" },
            totalEarnings: { $sum: "$totalEarnings" }
          }
        }
      ])
      .toArray();

   
    const dailyStats = await db.collection("posts")
      .aggregate([
        {
          $project: {
            createdAt: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } }, 
            likes: 1,
            comments: 1,
            shares: 1,
            earnings: 1 
          }
        },
        {
          $group: {
            _id: "$createdAt", 
            totalLikes: { $sum: "$likes" },
            totalComments: { $sum: "$comments" },
            totalShares: { $sum: "$shares" },
            totalEarnings: { $sum: "$earnings" } 
          }
        },
        { $sort: { _id: 1 } } 
      ])
      .toArray();

   
    const totalPosts = dailyStats.length;
    const engagementTotals = dailyStats.reduce(
      (acc, stat) => ({
        totalLikes: (acc.totalLikes || 0) + stat.totalLikes,
        totalComments: (acc.totalComments || 0) + stat.totalComments,
        totalShares: (acc.totalShares || 0) + stat.totalShares,
        totalEarnings: (acc.totalEarnings || 0) + stat.totalEarnings
      }),
      {}
    );


    return NextResponse.json({
      totalPosts,
      totalEngagement: engagementTotals.totalLikes + engagementTotals.totalComments + engagementTotals.totalShares,
      totalEarnings: engagementTotals.totalEarnings,
      dailyStats: dailyStats.map(stat => ({
        date: stat._id,
        likes: stat.totalLikes,
        comments: stat.totalComments,
        shares: stat.totalShares,
        earnings: stat.totalEarnings
      })),
      ...totals
    });
  } catch (error) {
    console.error('Error fetching metrics:', error);
    return NextResponse.json({ error: 'Failed to fetch metrics' }, { status: 500 });
  }
}
