'use client';
import { useState, useEffect } from 'react';
import { Influencer } from '@/types';

export default function InfluencerList() {
  const [influencers, setInfluencers] = useState<Influencer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInfluencers = async () => {
      try {
        const response = await fetch('/api/influencers');
        const data = await response.json();
        setInfluencers(data);
      } catch (error) {
        console.error('Error fetching influencers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInfluencers();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-6 text-blue-800">Campaign Influencers</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6 animate-pulse">
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 relative">
      
      <div className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-5 right-[10%] w-16 h-16 bg-blue-600 rounded-full opacity-70 animate-pulse"></div>
        <div className="absolute top-[20%] left-[5%] w-20 h-20 bg-green-600 opacity-60 rotate-45"></div>
        <div className="absolute bottom-[30%] right-[15%] w-24 h-24 bg-yellow-600 rounded-full opacity-70 animate-pulse"></div>
        <div className="absolute top-[40%] left-[8%] w-32 h-2 bg-pink-900 opacity-80 animate-pulse"></div>
        <div className="absolute bottom-10 right-[25%] w-12 h-12 bg-purple-600 opacity-60 rotate-12"></div>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-blue-800 relative z-10">Campaign Influencers</h2>
      <div className="grid  gap-4 md:grid-cols-2 lg:grid-cols-3 relative z-10">
        {influencers.map((influencer) => (
          <div 
            key={influencer._id}
            className="bg-blue-100 backdrop-blur-sm rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-blue-900 mb-2">{influencer.name}</h3>
            <div className="space-y-2 text-gray-600 ">
              <p>Joined: {new Date(influencer.joinDate).toLocaleDateString()}</p>
              <p>Posts: {influencer.postsCount}</p>
              <p>Engagement Rate: {influencer.engagement}%</p>
              <p>Earnings: ${influencer.earnings.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
