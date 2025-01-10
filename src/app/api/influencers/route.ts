import { NextResponse } from 'next/server';
import clientPromise from '@/db';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("campaignDB");
    
    const influencers = await db.collection("influencers")
      .find({})
      .sort({ joinDate: -1 })
      .toArray();
    
    return NextResponse.json(influencers);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch influencers' }, { status: 500 });
  }
}