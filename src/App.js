import React from 'react';
import JournalUpload from './components/JournalUpload';
import MoodDisplay from './components/MoodDisplay';

const App = () => {
    return (
        <div>
            <h1>MindCare App</h1>
            <JournalUpload />
            <MoodDisplay />
        </div>
    );
};

export default App;
