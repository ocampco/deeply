import React from 'react';
import Home from './components/Home';
import styles from './App.module.css';

// const App = () => {
//     const [difficulty, setDifficulty] = useState(null)

//     return (
//         <div className={styles.container}>
//             <Difficulty setDifficulty={setDifficulty} />
//         </div>
//     )
// };

const App = () => (
    <div className={styles.container}>
        <Home />
    </div>
);

export default App;
