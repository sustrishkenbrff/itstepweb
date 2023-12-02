import { useRef, useState, useEffect } from 'react';
import './style.css';
import * as uuid from 'uuid';

const MultiAnswerComponent = (props) => {
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [showCorrectAnswerBtn, setShowCorrectAnswerBtn] = useState(false);
  const [uniqueIds, setUniqueIds] = useState([]);
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
        setShowCorrectAnswerBtn(true);
      }
    }
  };

  const showCorrectAnswerClick = () => {
    correctRef.current.classList.add('selected');
    setShowCorrectAnswer(true);
  };

  useEffect(() => {
    const ids = props.answers.map(() => uuid.v1());
    setUniqueIds(ids);
  }, [props.answers]);

  useEffect(() => {
    console.log(showCorrectAnswer)
    if (showCorrectAnswer) {
      props.correctAnswer.forEach((index) => {
          const correctAnswerElement = document.getElementsByClassName(`answer_${index}_${uniqueIds[index]}`);
          const arr = Array.from(correctAnswerElement);
          if (arr.length > 0 ) {
            arr.forEach((index) => { index.style.color = 'green'; 
          } )
          }
        });
    }
  }, [uniqueIds, showCorrectAnswer, props.correctAnswer]);
  

  return (
    <div className='question single-answer'>
      <div>
        <h3>{props.question}</h3>
      </div>
      <div className='answers'>
        {props.answers.map((answer, i) => {
          const id = uniqueIds[i];
          return (
            <div key={id} className={`answer_${i}_${id}`}>
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
        {showCorrectAnswerBtn && (
          <button onClick={showCorrectAnswerClick} className='show-correct-answer'>
            show me correct answer
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiAnswerComponent;
