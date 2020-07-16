import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

interface WordProps {
  currentWord: string;
  currentLink: string;
}

const Word = ({ currentWord, currentLink }: WordProps) => {
  return (
    <div className="flex-row">
      <h1 className="display-1 text-center mb-2">{currentWord}</h1>
      <ReactAudioPlayer src={currentLink} controls />
    </div>
  );
};

export default Word;
