export const projects = [
  {
    title: 'Twitter Sentimental Analysis',
    category: 'AI / Machine Learning',
    description:
      'A machine learning pipeline that streams live tweets and performs sentiment analysis using natural language processing (NLP) to classify public sentiment.',
    features: [
      'Live Twitter stream ingestion via API',
      'Text cleaning, lemmatization & tokenization using NLTK',
      'Sentiment classification using SVM & Logistic Regression models',
      'Interactive dashboard visualization for queries'
    ],
    stack: ['Python', 'NLTK', 'Scikit-learn', 'Flask', 'React'],
    accent: 'mint',
    image: '/twitter.png',
    demoUrl: 'https://github.com/BHAVNA-devlo/Twitter-Sentimental-Analysis',
    githubUrl: 'https://github.com/BHAVNA-devlo/Twitter-Sentimental-Analysis',
  },
  {
    title: 'Volunteer Registration',
    category: 'Backend System',
    description:
      'A robust registration portal for event coordinators and volunteers, featuring secure shift booking, real-time statistics, and notifications.',
    features: [
      'JWT authentication & role-based dashboard permissions',
      'Real-time shift management and slot booking',
      'Java Mail Sender integration for automatic notifications',
      'Relational database design mapping volunteer constraints'
    ],
    stack: ['Java', 'Spring Boot', 'MySQL', 'React', 'Tailwind'],
    accent: 'acid',
    image: '/volentire.png',
    demoUrl: 'https://github.com/BHAVNA-devlo/Volunteer-Registration',
    githubUrl: 'https://github.com/BHAVNA-devlo/Volunteer-Registration',
  },
  {
    title: 'Task Tracker Dashboard',
    category: 'Web Application',
    description:
      'A collaborative Kanban-style task management workspace supporting drag-and-drop organization, metrics logging, and team updates.',
    features: [
      'Interactive drag-and-drop boards & task priority states',
      'Detailed activity logs and history audit trail',
      'Deadline alert indicators and calendar timelines',
      'Fully responsive workspace optimized for tablets & mobile'
    ],
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind'],
    accent: 'mint',
    image: '/task.png', // Fallback to volunteer mockup or generic dashboard
    demoUrl: 'https://github.com/BHAVNA-devlo/Task-Tracker',
    githubUrl: 'https://github.com/BHAVNA-devlo/Task-Tracker',
  },
];
