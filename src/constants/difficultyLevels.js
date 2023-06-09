const CASUAL = {
    url: 'casual',
    displayName: 'casual',
    emoji: '\u{1f973}',
    description: 'start the conversation and try something new',
};

const INTIMATE = {
    url: 'intimate',
    displayName: 'intimate',
    emoji: '\u{1f92b}',
    description: 'come out of your shell',
};

const CONTROVERSIAL = {
    url: 'controversial',
    displayName: 'controversial',
    emoji: '\u{1f628}',
    description: 'questions that raise more questions',
};

// TODO: Find suitable emoji
const MEMORIES = {
    url: 'memories',
    displayName: 'memories',
    emoji: '\u{1f628}',
    description: 'reflect on your first and last times',
};

const difficultyLevels = [
    CASUAL,
    INTIMATE,
    CONTROVERSIAL,
    MEMORIES,
];

export default difficultyLevels;