import { useRef, useState, useEffect } from 'react';
import './style.css';
import * as uuid from 'uuid';

const SingleAnswerComponent = (props) => {
    const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
    const [showCorrectAnswerBtn, setShowCorrectAnswerBtn] = useState(false);
    const [uniqueIds, setUniqueIds] = useState([]);
    const [incorrectAttempts, setIncorrectAttempts] = useState(0); // amount
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  
    const radioClick = (index) => {
      setSelectedAnswerIndex(index);
      wrongRef.current.classList.remove('selected');
      correctRef.current.classList.remove('selected');
      if (showCorrectAnswer) {
        setShowCorrectAnswer(false);
      }
    };
  
    const isArrayEqual = (selected, correct) => {
      if (selected === null) {
        return false;
      }
      return correct === selected;
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
      // console.log(showCorrectAnswer);
      if (showCorrectAnswer) {
        if (selectedAnswerIndex !== null) {
          const correctAnswerElement = document.getElementsByClassName(
            `answer_${props.correctAnswer}_${uniqueIds[props.correctAnswer]}`
          );
          const arr = Array.from(correctAnswerElement);
          if (arr.length > 0) {
            arr.forEach((el) => {
              if (el) {
                el.style.color = 'green';
              }
            });
          }
        }
      }
    }, [uniqueIds, showCorrectAnswer, selectedAnswerIndex]);
  
    const qId = uuid.v1();
  
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
                  type='radio'
                  name={`group-${qId}`}
                  onClick={() => radioClick(i)}
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
  
  export default SingleAnswerComponent;
  