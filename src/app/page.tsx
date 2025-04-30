'use client';
import React, { useState } from 'react';
import { intsructionsSteps } from '@/helpers/data';

export default function Home() {
  const defaultValue = 'https://anue.eu/r?ref=6248bd8a-68dc-48c6-af28-bf9bc9b9d6c5';
  const [inputValue, setInputValue] = useState(defaultValue);
  const [showPopover, setShowPopover] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(inputValue);
      alert("Link copied to clipboard!");
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          text: "Check this out!",
          url: inputValue,
        });
      } catch (error) {
        console.error("Sharing failed:", error);
      }
    } else {
      setShowPopover(!showPopover);
    }
  };

  const encodedUrl = encodeURIComponent(inputValue);
  const shareText = encodeURIComponent("Check this out!");

  return (
    <main>
      <section aria-labelledby="polindrome" className="palindrome">
        <div className="palindrome__content">
          <div className="palindrome__intro">
            <h1 className="palindrome__title" id="polindrome">
              Share This Link
            </h1>
            <p className="palindrome__description">
              Use the buttons below to share or copy your referral link.
            </p>
          </div>
          <div className="palindrome__instructions">
            <h2 className="palindrome__subtitle">Instructions</h2>
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
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Your link here"
              className="palindrome__input"
            />
            <button type="button" onClick={handleCopy} className="palindrome__button">
              Copy Link
            </button>
            <button type="button" onClick={handleShare} className="palindrome__button">
              Share
            </button>
          </div>

          {showPopover && (
            <div className="palindrome__share-popover">
              <p>Share this page:</p>
              <div className="palindrome__share-links">
  <div>
    <a href={`https://api.whatsapp.com/send?text=${shareText}%20${encodedUrl}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
    <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noopener noreferrer">Facebook</a>
    <a href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${shareText}`} target="_blank" rel="noopener noreferrer">X</a>
    <a href={`mailto:?subject=Check this out&body=${encodedUrl}`} target="_blank" rel="noopener noreferrer">Email</a>
    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
    <a href={`https://www.reddit.com/submit?url=${encodedUrl}&title=${shareText}`} target="_blank" rel="noopener noreferrer">Reddit</a>
    <a href={`https://www.tumblr.com/widgets/share/tool?canonicalUrl=${encodedUrl}&title=${shareText}`} target="_blank" rel="noopener noreferrer">Tumblr</a>
    <a href={`https://www.blogger.com/blog-this.g?u=${encodedUrl}&n=${shareText}`} target="_blank" rel="noopener noreferrer">Blogger</a>
  </div>
              </div>
              <div className="palindrome__share-copy">
                <input type="text" value={inputValue} readOnly />
                <button onClick={handleCopy}>Copy</button>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
