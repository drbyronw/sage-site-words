import React, { useState, useEffect, useCallback } from 'react';
import {
  ArrowRightCircleFill,
  ArrowLeftCircleFill,
} from 'react-bootstrap-icons';
import './sage.css';
import Word from './Word';
import { sightObjects } from './sources';
interface SightWord {
  text: string;
  link: string;
}
const App: React.FC = () => {
  const wordList = sightObjects;
  const [word, setWord] = useState('');
  const [link, setLink] = useState('');
  const [hasStarted, setHasStarted] = useState(false);
  const [numWords, setNumWords] = useState(0);
  const randomStart = Math.floor(Math.random() * wordList.length);
  const [index, setIndex] = useState(randomStart);
  const setWordObject = useCallback(
    (index: number) => {
      setWord(wordList[index].word);
      setLink(wordList[index].link);
    },
    [wordList]
  );
  useEffect(() => {
    setNumWords(wordList.length);
    setWordObject(index);
  }, [index, setWordObject, wordList.length]);
  const startWord = () => {
    setHasStarted(true);
    setWordObject(index);
  };
  const nextWord = () => {
    if (index < numWords - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
    setWordObject(index);
  };
  const previousWord = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(numWords - 1);
    }
    setWordObject(index);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col center mt-4">
          <h1 className="text-center display-3">Sage's Sight Words</h1>
          {hasStarted ? (
            <p className="text-center">
              {index + 1} of {numWords} Fry words
            </p>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className="flex-row">
        <div className="mt-2 text-center">
          {!hasStarted ? (
            <button
              className="btn btn-primary mt-2"
              onClick={() => startWord()}
            >
              Start
            </button>
          ) : (
            <div className="flex-row display-1">
              <Word currentWord={word} currentLink={link} />
              <h1 className="text-center">
                <span className="p-2" onClick={() => previousWord()}>
                  <ArrowLeftCircleFill className="sage-btn" />
                </span>
                <span className="p-2" onClick={() => nextWord()}>
                  <ArrowRightCircleFill className="sage-btn" />
                </span>
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
