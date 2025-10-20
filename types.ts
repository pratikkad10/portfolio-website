import React from 'react';

export interface Project {
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  tags: string[];
}

export interface Skill {
  name: string;
  // FIX: Changed type from React.ReactNode to React.FC to accept a component reference.
  icon: React.FC;
}
