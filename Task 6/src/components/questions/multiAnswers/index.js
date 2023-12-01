import { useRef, useState, useEffect } from 'react';
import './style.css';
import * as uuid from 'uuid';

const MultiAnswerComponent = (props) => {
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [incorrectAttempts, setIncorrectAttempts] = useState(0); // amount

  let selectedAnswerIndex = [];

  const checkboxClick = (index, status) => {
    if (status) {
      selectedAnswerIndex.push(index);
    } else {
      selectedAnswerIndex = selectedAnswerIndex.filter((e) => e !== index);
    }
    wrongRef.current.classList.remove('selected');
    correctRef.current.classList.remove('selected');
  };

  const isArrayEqual = (selected, correct) => {
    if (selected.length !== correct.length) {
      return false;
    }
    return correct.filter((e) => !selected.includes(e)).length === 0;
  };

  const correctRef = useRef();
  const wrongRef = useRef();

  const checkOnClick = () => {
    if (isArrayEqual(selectedAnswerIndex, props.correctAnswer)) {
      correctRef.current.classList.add('selected');
      wrongRef.current.classList.remove('selected');
    } else {
      wrongRef.current.classList.add('selected');
      correctRef.current.classList.remove('selected');
      setIncorrectAttempts((prevAttempts) => prevAttempts + 1);
      if (incorrectAttempts > 1) {
        setShowCorrectAnswer(true);
      }
    }
  };

  const showCorrectAnswerClick = () => {
    correctRef.current.classList.add('selected');
    setShowCorrectAnswer(false);
  };

  useEffect(() => {
    if (showCorrectAnswer) {
      props.correctAnswer.forEach((index) => {
        const correctAnswerElement = document.getElementById(`label_${index}`);
        if (correctAnswerElement) {
          correctAnswerElement.style.color = 'green';
        }
      });
    }
  }, [showCorrectAnswer, props.correctAnswer]);
  

  return (
    <div className='question single-answer'>
      <div>
        <h3>{props.question}</h3>
      </div>
      <div className='answers'>
        {props.answers.map((answer, i) => {
          const id = uuid.v1();
          return (
            <div key={id}>
              <input
                id={id}
                type='checkbox'
                onClick={(e) => checkboxClick(i, e.currentTarget.checked)}
              />
              <label htmlFor={id}>{answer}</label>
            </div>
          );
        })}
      </div>
      <div className='check'>
        <div className='button' onClick={checkOnClick}>
          check my answer
          <div ref={correctRef} className='correct'>
            correct
          </div>
          <div ref={wrongRef} className='wrong'>
            wrong
          </div>
        </div>
        {showCorrectAnswer && (
          <button onClick={showCorrectAnswerClick} className='show-correct-answer'>
            show me correct answer
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiAnswerComponent;
