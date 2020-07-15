import React from "react";
import Button from "unify-react-desktop/build/Button";
import Card from "unify-react-desktop/build/Card";
import Coachmark from "unify-react-desktop/build/Coachmark";

const SamplePage = () => (
  <>
    <Card style={{ height: "100px" }} id="coachmark1">
      <div>This is Text Just pure Text With heavy Content</div>
    </Card>

    <Card style={{ height: "100px" }} id="coachmark2">
      <div>This is Text Just pure Text With heavy Content</div>
    </Card>

    <Card style={{ height: "100px" }} id="coachmark3">
      <div>This is Text Just pure Text With heavy Content</div>
    </Card>

    <Card style={{ height: "100px" }}>
      <div>This is Text Just pure Text With heavy Content</div>
    </Card>

    <Card style={{ height: "100px" }}>
      <div>This is Text Just pure Text With heavy Content</div>
    </Card>

    <Card style={{ height: "100px" }}>
      <div>This is Text Just pure Text With heavy Content</div>
    </Card>

    <Card style={{ height: "100px" }}>
      <div>This is Text Just pure Text With heavy Content</div>
    </Card>

    <Card style={{ height: "100px" }}>
      <div>This is Text Just pure Text With heavy Content</div>
    </Card>

    <Card style={{ height: "100px" }}>
      <div>This is Text Just pure Text With heavy Content</div>
    </Card>

    <Card style={{ height: "100px" }} id="coachmark4">
      <div>This is Text Just pure Text With heavy Content</div>
    </Card>

    <div style={{ position: "relative", zIndex: 40 }}>
      <Card id="coachmark5">
        <div>This is Text Just pure Text With heavy Content</div>
        <Button filled main id="submit-button" style={{ marginTop: "8px" }}>
          Some Action
        </Button>
      </Card>
    </div>

    <Card style={{ height: "100px" }} id="coachmark6">
      <div>This is Text Just pure Text With heavy Content</div>
    </Card>
  </>
);

class CoachmarkStateful extends React.Component {
  constructor(props) {
    super(props);
    this.item1 = React.createRef();
    this.item2 = React.createRef();
  }

  state = {
    currentPage: 0,
    display: true,
    borderRadius: "8px",
  };

  handleToogle = () => {
    this.setState(({ display }) => ({ display: !display }));
  };

  setItemRef = (node) => {
    this.item1 = node;
  };

  setRef2 = (node) => {
    this.item2 = node;
  };

  handleChange = (index) => {
    const newState = {
      currentPage: index,
      borderRadius: index === 1 ? "50%" : "8px",
    };

    this.setState(newState);
  };

  handleClick = () => {
    this.setState({
      display: !this.state.display,
    });
  };

  render() {
    return (
      <div style={{ backgroundColor: "white", paddingBottom: "16px" }}>
        <SamplePage />
        <Card>
          <Button
            filled
            main
            onClick={() =>
              this.setState((state) => ({
                display: !state.display,
                currentPage: 0,
              }))
            }
          >
            show coachmark
          </Button>
        </Card>
        {this.state.display && (
          <Coachmark
            display={this.state.display}
            onClose={this.handleClick}
            numberOfPage={[
              "#coachmark1",
              "#submit-button",
              "#coachmark6",
              "#coachmark5",
            ]}
            currentPage={this.state.currentPage}
            onChange={this.handleChange}
            title={["Insert title here", "Title 2", "title3", "Title 4"]}
            description={[
              "Put some descriptions that can describes your new features. Make it simple :)",
              "description 2, lorem ipsum dolor sit amet",
              "description 3, lorem ipsum dolor sit amet",
              "description 4, lorem ipsum dolor sit amet",
            ]}
            highlightOptions={{
              padding: 8, // in px
            }}
            overlayOptions={{ clickToClose: false }}
            hasSkip={true} // show skip button
            lang="en" // en | id: default
            onClickSkip={() => alert("skip clicked")}
          />
        )}
      </div>
    );
  }
}

export default CoachmarkStateful;
