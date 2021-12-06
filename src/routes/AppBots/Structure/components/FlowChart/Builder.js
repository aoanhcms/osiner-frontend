import * as ReactDOM from 'react-dom';
import { Editor, Node, Config} from 'react-flow-editor';

// Create the initial graph
const nodes = [
    {
        id: 'Node 1',
        name: 'First Node',
        payload: { h1: 'hello' },
        inputs: [{
            connection: [], name: 'input 1'
        }],
        outputs: []
}];

// Renders the body of each node
function resolver(data) {
    if (data.type === '') return <h2 />;
    return (
        <p>{data.payload.h1}</p>
    );
}

const config = {
    resolver,
    connectionType: 'bezier',
    grid: true,
    demoMode: true,
};
const App = () => <Editor config={config} nodes={nodes} />
export default App;
