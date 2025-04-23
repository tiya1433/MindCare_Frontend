import React from 'react';
import JournalUpload from './components/JournalUpload';
import MoodDisplay from './components/MoodDisplay';
import './styles.css'; // Import the CSS file

const App = () => {
    return (
        <div className="container">
            <h1>MindCare App</h1>
            <div className="journal-upload">
                <JournalUpload />
            </div>
            <div className="mood-display">
                <MoodDisplay />
            </div>
        </div>
    );
};

export default App;