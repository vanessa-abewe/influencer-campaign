'use client';
import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function CampaignSnapshot() {
  const [metrics, setMetrics] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await fetch('/api/metrics');
        const data = await response.json();
        console.log('Metrics data:', data);
        setMetrics(data);
      } catch (error) {
        console.error('Error fetching metrics:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMetrics();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-6 text-blue-800">Campaign Performance</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {[1, 2, 3].map((index) => (
            <div key={index} className="bg-blue-50/80 backdrop-blur-sm rounded-lg p-6 shadow-md animate-pulse">
              <div className="h-6 bg-blue-200/50 rounded w-2/3 mb-3"></div>
              <div className="h-8 bg-blue-200/50 rounded w-1/2"></div>
            </div>
          ))}
        </div>
        
        <div className="h-[400px] bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-4 animate-pulse">
          <div className="w-full h-full bg-gray-200/50 rounded"></div>
        </div>
      </div>
    );
  }
  return (
    <div className="container mx-auto p-4 relative">
      {/* Decorative Shapes */}
      <div className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-[5%] w-28 h-28 bg-blue-600 rounded-full opacity-70 animate-pulse"></div>
        <div className="absolute top-[30%] left-[2%] w-24 h-24 bg-green-600 opacity-60 rotate-45"></div>
        <div className="absolute top-[40%] right-[8%] w-32 h-32 bg-yellow-600 rounded-full opacity-70 animate-pulse"></div>
        <div className="absolute bottom-[20%] left-[15%] w-40 h-3 bg-pink-600 opacity-80 animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[20%] w-20 h-20 bg-purple-600 opacity-60 rotate-12"></div>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-blue-800">Campaign Performance</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <div className="bg-blue-50/80 backdrop-blur-sm rounded-lg p-6 shadow-md">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Total Posts</h3>
          <p className="text-3xl font-bold text-blue-600">{metrics.totalPosts}</p>
        </div>
        <div className="bg-blue-50/80 backdrop-blur-sm rounded-lg p-6 shadow-md">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Total Engagement</h3>
          <p className="text-3xl font-bold text-blue-600">{metrics.totalEngagement}</p>
        </div>
        <div className="bg-blue-50/80 backdrop-blur-sm rounded-lg p-6 shadow-md">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Total Earnings</h3>
          <p className="text-3xl font-bold text-blue-600">${metrics.totalEarnings}</p>
        </div>
      </div>
      
      <div className="h-[400px] bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={metrics.dailyStats}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="createdAt" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="likes" stroke="#2563eb" />
            <Line type="monotone" dataKey="comments" stroke="#16a34a" />
            <Line type="monotone" dataKey="shares" stroke="#dc2626" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}