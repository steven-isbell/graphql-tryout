import React, { Component } from "react";
import axios from "axios";
import QuoteDisplay from "./QuoteDisplay/QuoteDisplay";

class QuotesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: []
    };
  }

  componentDidMount() {
    axios
      .post("/graphql", { query: "{ quote }" })
      .then(res => this.setState({ quotes: JSON.parse(res.data.data.quote) }))
      .catch(console.log);
  }

  render() {
    const { quotes } = this.state;
    return (
      <div>
        {quotes.length > 0 &&
          quotes.map((quote, i) => <QuoteDisplay quote={quote} key={i} />)}
      </div>
    );
  }
}

export default QuotesContainer;
