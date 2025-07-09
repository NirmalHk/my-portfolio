import { Project } from '../types';

export const techProjects: Project[] = [
  {
    id: 'ml-analytics-platform',
    title: 'Premier League 23/24 Data Analysis',
    description: 'Data analysis on Chelsea FC and Premier League 23/24 results using SQL, exploring home/away performance and referee trends.',
    longDescription: 'An in-depth SQL and data analysis project exploring English Premier League 2023/24 data with a focus on Chelsea FC performance, home vs away stats, league-wide team rankings, referee bias investigations, use of CTEs and window functions in SQL Server, and storytelling with insights for football fans.',
    image: 'https://cdn.vox-cdn.com/thumbor/vcL9u-GUtEzAsN5y78_nJSRSFkk=/0x0:3051x2033/1200x800/filters:focal(1107x529:1595x1017)/cdn.vox-cdn.com/uploads/chorus_image/image/73687823/2181353384.0.jpg',
    technologies: ['SQL', 'Data Analysis', 'CTEs', 'Window Functions'],
    outcomes: [
    'Wrote complex SQL with CTEs and Window Functions to rank team performance.',
    'Analyzed 380 matches to derive home/away trends across the league.',
    'Created targeted queries for Chelsea FC to uncover 37 home points vs. 26 away points.',
    'Investigated referee assignment patterns for potential bias.'
    ],
    link: 'https://github.com/NirmalHk/English-Premier-League-2023-24/blob/main/README.md',
    github: 'https://github.com/NirmalHk/English-Premier-League-2023-24/blob/main/Queries'
  },
  {
    id: 'data-visualization-dashboard',
    title: 'IPL Analytics Exploration',
    description: 'SQL project exploring IPL match data to rank teams, analyze toss strategies, and identify top players.',
    longDescription: 'This project is my personal deep dive into IPL data using SQL to find which teams won the most, evaluate toss decisions and their success rates, and highlight the most consistent match-winners by Player of the Match awards, with clear queries and insights for every cricket fan.',
    image: 'https://e0.365dm.com/25/05/768x432/skysports-virat-kohli-rcb-royal-challengers_6928997.jpg?20250527180529',
    technologies: ['SQL', 'Data Analysis', 'Sports Analytics'],
    outcomes: [
      'Ranked IPL teams by total wins to identify top performers.',
      'Analyzed toss decisions and their actual win success rates.',
      'Identified consistent match-winners using Player of the Match data.',
      'Practiced SQL skills with aggregation, grouping, and ordering.'
    ],
    link: 'https://github.com/NirmalHk/IPL-Analysis/blob/main/README.md',
    github: 'https://github.com/NirmalHk/IPL-Analysis/blob/main/IPL_Analaysis.sql'
    
  },
  {
    id: 'fraud-detection-system',
    title: 'Coming Soon!',
    description: 'A new project will be added shortly.',
    longDescription: 'New data project will be added - Most likely a data engineering project with cloud.',
    image: 'https://placehold.co/600x400/111/fff?text=Coming+Soon',
    technologies: ['Python', 'Cloud', 'Spark'],
    outcomes: [
      'Coming soon.'
    ]
  }
];