import React from 'react';
import './style.css';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

export default function App() {
  var xCoords = new Array();
  for (var i = 1; i < 10; i++) {
    xCoords.push(i * 20);
  }

  console.log(xCoords);

  return (
    <div>
      <h1>Test</h1>
      <svg>
        {xCoords.map((item) => (
          <Repeater>
            <SvgCircle radius="10" x={item} color={getRandomColor()} />
          </Repeater>
        ))}
      </svg>
    </div>
  );
}

function Repeater(props) {
  return <>{props.children}</>;
}

export class SvgCircle extends React.Component {
  constructor(props) {
    super(props);

    this.props = props;
  }

  render() {
    return (
      <circle
        cx={this.props.x}
        cy="100"
        fill={this.props.color}
        r={this.props.radius}
      />
    );
  }
}
