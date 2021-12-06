import React from 'react';
import ReactFlow, {Handle } from 'react-flow-renderer';
const onClick = (e) => {
  e.preventDefault();
  console.log('click');
}
const elements = [
  {
    id: '2',
    type: 'special',
    position: { x: 100, y: 100 },
    data: { text: 'WellCome' },
  },
];

const customNodeStyles = {
  background: '#9CA8B3',
  color: '#FFF',
  padding: 10,
};

const CustomNodeComponent = ({ data }) => {
  return (
    <div style={customNodeStyles}>
      <div>{data.text}</div>
      <div>Button</div>
      <div>Button</div>
      <div>Button</div>
      <Handle
        type="source"
        position="right"
        id="a"
        style={{ top: '40%', borderRadius: 0 }}
      />
      <Handle
        type="source"
        position="right"
        id="b"
        style={{ top: '80%', borderRadius: 0 }}
      />
    </div>
  );
};
const nodeTypes = {
  special: CustomNodeComponent,
};

const Structure = () => {
  return <ReactFlow
      elements={elements}
      nodeTypes={nodeTypes}
    />;
}
export default Structure
