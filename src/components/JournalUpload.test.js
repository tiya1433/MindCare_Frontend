// src/components/JournalUpload.test.js
import { render, screen } from '@testing-library/react';
import JournalUpload from './JournalUpload';

test('renders journal upload component', () => {
    render(<JournalUpload />);
    const textareaElement = screen.getByPlaceholderText(/write your journal entry here.../i);
    expect(textareaElement).toBeInTheDocument();
});
