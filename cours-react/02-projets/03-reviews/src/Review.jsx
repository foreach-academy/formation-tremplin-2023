import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import data from './data.js';
import { useState } from 'react';

const Review = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }

    if (number < 0) {
      return people.length - 1;
    }

    return number;
  };

  const goPrevPerson = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const goNextPerson = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const getRandomPerson = () => {
    let randomIndex = Math.floor(Math.random() * people.length);

    if (randomIndex === index) {
      randomIndex = index + 1;
    }

    setIndex(checkNumber(randomIndex));
  };

  const { name, job, image, text } = people[index];

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteLeft />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn'>
          <FaChevronLeft onClick={goPrevPerson} />
        </button>
        <button className='next-btn' onClick={goNextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='btn random-btn' onClick={getRandomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
