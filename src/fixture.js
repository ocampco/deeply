// TODO: Assign id, category, forGroup
const casual = [
    { id: 'PGzvHo3Gyyng16nkE94', question: 'on the count of 3, point to the person who you think would confess to the police.' },
    { id: 'whDY5soBCUervVoj', question: 'on the count of 3, hold up the number of fingers of people in the circle you think will be alive in 20 years.' },
    { id: 'JfwSTM', question: 'on the count of 3, point to the person who would be the most generous if they won the lottery.' },
    { id: 'EoJDVYgV59DQG4dzyuQ', question: 'on the count of 3, hold up the number of fingers of people in the circle you think will be a completely different person in 3 years.' },
    { id: 'fv4IUclTzKJ9BIyBGpEY', question: 'on the count of 3, raise your hand if you ever lied about when you lost your virginity. those with hands raised must talk about it.' },
    { id: 'jvu6VmekhdBBvHRU', question: 'describe your top 3 netflix genres.' },
    { id: 'r9XN4U9W', question: 'describe a time where you experienced deep intuition. tell the story.' },
    { id: 'p68BjOeMWXVo3Z79mWe', question: 'if you could know anything about yourself (past, present or future), what would it be?' },
    { id: 'IgJEyRFpyhKcX6Sf6', question: 'if you could see a picture of anything at any moment in time and you couldn\'t tell anyone, what would the picture be?' },
    { id: 'Dhg9EbIpv', question: 'if you could set up a teleporter (can use it any time) to one location on earth, where would it be?' },
    { id: 'eLZncdaVYMh', question: 'if you could see a top 10 compilation of any moment in your life (past, present or future), what would it be of?' },
];

// 'describe the person to your left\'s major eras in their life. periods that changed them. go around the circle.',
// 'name one thought that keeps you from sleeping at night.',
// 'name one thing you\'re grateful for that wakes you up in the morning.',
// 'what do you think everyone\'s biggest achievement was from your perspective? go around the circle.',
// 'on the count of 3, everyone must point at someone in the circle. this person must describe something that their partner or close friends don\'t know they feel.',
// 'on the count of 3, raise your hand if you agree with anything of the world\'s biggest villains actions e.g. hitler, kim jong un. those with hands raised must talk about it.',
// 'on the count of 3, point to the person most likely to try something with a friend\'s partner.',

const intimate = [
  { id: 'l9yBEKlPGYqbNp', question: 'what baggage do you think you carry?' },
  { id: 'JASpib09QIZHONTksp', question: 'if your personality could be described with a colour, what colour would that be?' },
  { id: 'IHtPvWdA0', question: 'when was the last time you cried? was it a relief or burden?' },
  { id: 'KvjoAHTkgqKhwfU0t', question: 'describe someone else\'s spirit animal.' },
  { id: '1LZ08jFRm1d1YJiwvoRJ', question: 'some things weren\'t meant to be. was there ever \'one that got away\'?' },
  { id: 'WZ71nPWpAjT', question: 'name something small that you appreciate about each person playing.' },
  { id: 'XuzLiLstWwvKZpcMMtB', question: 'give an example of a red flag.' },
  { id: 'SLmihQPDleWS5', question: 'someone must describe your aura. you describe where you think that comes from.' },
  { id: 'v2fCl1gijnmJuChAB', question: 'what was a major landmark in your life that has permanently changed your perspective?' },
];

const confronting = [
  { id: 'YnXKxFP0Gwdc4BSjd', question: 'do you ever worry about hereditary health issues? have you done anything to check? if you haven\'t checked, explain why.' },
  { id: 'oO1y8iREEoeER7YVv', question: 'what is a scenario you play out in your head often?' },
  { id: 'hVQpUhv4Je1H2', question: 'when was the last time you recognised how beautiful and unique of a person you are?' },
  { id: 'eO7eyEAHeK2YBKjMaz', question: 'what do you think someone\'s biggest strength and obstacle is?' },
  { id: 'BKYdpWelEMU4vMty', question: 'how often do you think about death? has it truly affected the way you do anything?' },
  { id: 'oDQVFp0RkONjOAuxHvD2', question: 'when was the last time you experienced real depression? speak on it if you wish.' },
  { id: 'Dd6VfekiIgRAAeRYsdl', question: 'what is the number one piece of advice you would give to someone depressed?' },
  { id: 'XPojdWq5997oWUAeoD', question: 'describe how someone will be remembered. that person must do the same for you.' },
  { id: 'aMNNHrTeXlnCoHFv', question: 'what feeling do you think you chase the most? what do you think has caused this?' },
  { id: 'W5oLI9Rh9YZ', question: 'what trauma have you come to identify and understand? how do you feel about it now?' },
  { id: 'AmFAZEc0dngFQwEKodD', question: 'what is a quote that has got you through a hard time?' },
  { id: 'f8WrxDs0A3wkW', question: 'when was the last time you truly decompressed? if you haven\'t, what is stopping you?' },
  { id: 'yty0KilUx', question: 'do you make new year resolutions? if so, why do you wait?' },
];

const memories = [
  { id: 'oejCS6I6q30fgU0toXRI', question: 'when was the first time you remember drinking?' },
  { id: 'ihRRmoCzi2', question: 'when was the first time you got wasted?' },
  { id: 'KNL0l', question: 'who was your first crush on a famous person?' },
  { id: 'a1UmdbZmu', question: 'what was the first movie you obsessed over?' },
  { id: 'esBaW311pDt', question: 'what was your last regret?' },
  { id: '8YsiJ0WPmIZx0V', question: 'what was the best era of your life and why?' },
  { id: 'wHo7w0', question: 'what was the last time you went to the doctor? if it has been a while, what is stopping you?' },
  { id: 'J0sHzsvqMcwnvuVZg', question: 'when was the last time you punched someone in the face?' },
  { id: 'XvTpsDy', question: 'when was the last time you said \'i love you\' to a family member? if you haven\'t, explain why.' },
  { id: 'ediNtrIIeA3Vf', question: 'in an ideal world, what would you want your last words to be?' },
  { id: 'wFJ7zG6Hkbg2O9zH', question: 'what was the last thing you were and not currently addicted to?' },
  { id: 'Wd4JSa', question: 'if you\'re comfortable, describe a memory that you think about every now and again that terrifies you. if so, have you tried to move past it?' },
];

const questions = {
  casual,
  intimate,
  confronting,
  memories,
  // family
};

export default questions;
