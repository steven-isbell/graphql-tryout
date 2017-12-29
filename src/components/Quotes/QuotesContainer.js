import React, { Component, Fragment } from "react";
import axios from "axios";
import styled from "styled-components";
import QuoteDisplay from "./QuoteDisplay/QuoteDisplay";

const FlexedWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const CardWrapper = styled.div`
  height: 200px;
  background: #f0f0f0;
  margin: 10px;
  padding: 10px;
  max-width: 350px;
`;

const InputWrapper = styled.div``;

class QuotesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: [],
      filterVal: ""
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  componentDidMount() {
    axios
      .post("/graphql", { query: "{ quote }" })
      .then(res => this.setState({ quotes: JSON.parse(res.data.data.quote) }))
      .catch(console.log);
  }

  handleFilterChange(val) {
    this.setState({ filterVal: val });
  }

  render() {
    const { quotes, filterVal } = this.state;
    return (
      <Fragment>
        <label htmlFor="filter_input">Text Filter &nbsp;</label>
        <input
          id="filter_input"
          type="text"
          placeholder="Search Name or Text"
          onChange={e => this.handleFilterChange(e.target.value)}
        />
        <FlexedWrapper>
          {quotes.length > 0 &&
            quotes
              .filter(
                quote =>
                  quote.quote.includes(filterVal) ||
                  quote.character.includes(filterVal)
              )
              .map((quote, i) => (
                <CardWrapper>
                  <FlexedWrapper>
                    <QuoteDisplay quote={quote} key={i} />
                  </FlexedWrapper>
                </CardWrapper>
              ))}
        </FlexedWrapper>
      </Fragment>
    );
  }
}

export default QuotesContainer;
