export interface Influencer {
    _id: string;
    name: string;
    email: string;
    joinDate: Date;
    postsCount: number;
    engagement: number;
    earnings: number;
  }
  
  export interface Campaign {
    _id: string;
    name: string;
    startDate: Date;
    endDate: Date;
    totalPosts: number;
    totalEngagement: number;
    totalEarnings: number;
  }