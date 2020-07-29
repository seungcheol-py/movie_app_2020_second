import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const {
      location: { state },
      history,
    } = this.props;
    if (state === undefined) {
      history.push("/");
    }
  }
  render() {
    const {
      location: { state },
    } = this.props;
    if (state) {
      return <span>{state.title}</span>;
    } else {
      return null;
    }
  }
}
// render가 먼저 실행되고 componentDidMount가 실행된다.

export default Detail;
