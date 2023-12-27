const CASUAL = {
    url: 'casual',
    displayName: 'casual',
    emoji: {
      icon: '🍷',
      label: 'wine glass',
    },
    description: 'start the conversation and try something new',
};

const INTIMATE = {
    url: 'intimate',
    displayName: 'intimate',
    emoji: {
      icon: '💖',
      label: 'sparkling heart',
    },
    description: 'come out of your shell',
};

const CONTROVERSIAL = {
    url: 'controversial',
    displayName: 'controversial',
    emoji: {
      icon: '🌶',
      label: 'hot pepper',
    },
    description: 'questions that raise more questions',
};

const MEMORIES = {
    url: 'memories',
    displayName: 'memories',
    emoji: {
      icon: '📸',
      label: 'camera with flash',
    },
    description: 'reflect on your first and last times',
};

const difficultyLevels = [
    CASUAL,
    INTIMATE,
    CONTROVERSIAL,
    MEMORIES,
];

export default difficultyLevels;
