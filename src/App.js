import React, { useState } from 'react';
// import Splash from './components/Splash';
// <Splash />
import Difficulty from './components/Difficulty';
import styles from './App.module.css';

const App = () => {
    const [difficulty, setDifficulty] = useState(null)

    return (
        <div className={styles.container}>
            <Difficulty setDifficulty={setDifficulty} />
        </div>
    )
};

export default App;
