import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addEntry } from '../redux/actions/journalActions';

const JournalUpload = () => {
    const [journalEntry, setJournalEntry] = useState('');
    const dispatch = useDispatch();

    const handleUpload = async () => {
        try {
            const response = await axios.post('/api/journal', { entry: journalEntry });
            dispatch(addEntry(response.data.analysis));
            console.log(response.data);
        } catch (error) {
            console.error('Error uploading journal:', error);
        }
    };

    return (
        <div>
            <textarea
                value={journalEntry}
                onChange={(e) => setJournalEntry(e.target.value)}
                placeholder="Write your journal entry here..."
            />
            <button onClick={handleUpload}>Upload Journal</button>
        </div>
    );
};

export default JournalUpload;
