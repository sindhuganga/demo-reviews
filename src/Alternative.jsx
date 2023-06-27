import { useState } from "react";
import people from "./data";
// The react icons are components which can be rendered
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  // Instead of this code, we can use modulus and get the index
  const checkIndex = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;
      return checkIndex(newIndex);
    });
  };

  const prevPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1;
      return checkIndex(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    // Sometimes we get the same random number when clicking so we are manually adding
    // 1 to the random number
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkIndex(randomNumber));
  };
  return (
    <div>
      <main>
        <article className="review">
          <div className="img-container">
            <img src={image} alt={name} className="person-img"></img>
            <span className="quote-icon">
              <FaQuoteRight />
            </span>
          </div>
          <h4 className="author">{name}</h4>
          <p className="job">{job}</p>
          <p className="info">{text}</p>
          <div className="btn-container">
            <button type="button" className="prev-btn" onClick={prevPerson}>
              <FaChevronLeft />
            </button>
            <button type="button" className="next-btn" onClick={nextPerson}>
              <FaChevronRight />
            </button>
          </div>
          <button className="btn btn-hipster" onClick={randomPerson}>
            Suprise Me
          </button>
        </article>
      </main>
    </div>
  );
};
export default App;
