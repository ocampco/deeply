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
    description: 'come out of your shell and get to know someone',
};

const CONFRONTING = {
    url: 'confronting',
    displayName: 'confronting',
    emoji: {
      icon: '🌶',
      label: 'hot pepper',
    },
    description: 'reflection questions that raise more questions',
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

const categories = [
    CASUAL,
    INTIMATE,
    CONFRONTING,
    MEMORIES,
];

export default categories;
