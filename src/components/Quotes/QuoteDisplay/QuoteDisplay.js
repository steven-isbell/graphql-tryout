import React from "react";

const QuoteDisplay = ({ quote }) => {
  return (
    <div>
      <p>{quote.quote}</p>
      <p>{quote.character}</p>
      <br />
    </div>
  );
};

export default QuoteDisplay;
