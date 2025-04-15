'use client';
import React, {useState} from 'react'
import {intsructionsSteps} from '@/helpers/data'

export default function Home() {
  const [showMessage, setShowMessage] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isPalindrome, setIsPalindrome] = useState<boolean | null>(null);
  
  const checkPalindrome = (str: string) => {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setShowMessage(false)
  };
  
  const handleClick = () => {
    const result = checkPalindrome(inputValue);
    setIsPalindrome(result);
    setShowMessage(true);
  };

  return (
    <main>
      <section aria-labelledby="polindrome" className="palindrome">
        <div className="palindrome__content">
          <div className="palindrome__intro">
            <h1 className="palindrome__title" id="polindrome">
              Palindrome Checker
            </h1>
            <p className="palindrome__description">
              This is a simple palindrome checker.
            </p>
            <p className="palindrome__description-extra">
              * A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).
            </p>
          </div>
          <div className="palindrome__instructions">
            <h2 className="palindrome__subtitle">
              Instructions
            </h2>
            <ul className="palindrome__step">
              {intsructionsSteps.map((step) => (
                <li key={step.id} className="palindrome__step-item">
                  {step.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="palindrome__form">
          <div className="palindrome__input-group">
            <input type="text" onChange={handleInputChange} placeholder="Enter text" className="palindrome__input"/>
            <button type="button" onClick={handleClick} className="palindrome__button">
              Check
            </button>
          </div>
          <div className="palindrome__result-wrapper">
            {showMessage && isPalindrome !== null && (
              <p
                className={`palindrome__result ${isPalindrome ? 'success' : 'error'}`}
              >
                {isPalindrome
                  ? "This is a palindrome"
                  : "Unfortunately, this is not a palindrome"}
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
