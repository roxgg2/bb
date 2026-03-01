// submit.js — Part 4: send pipeline to backend, show analysis alert

import { useStore } from './store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({ nodes: state.nodes, edges: state.edges });

export const SubmitButton = () => {
  const { nodes, edges } = useStore(selector, shallow);

  const handleSubmit = async () => {
    if (nodes.length === 0) {
      alert('⚠️  Your pipeline is empty. Add at least one node before submitting.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/pipelines/parse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nodes, edges }),
      });

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }

      const data = await response.json();

      alert(
        `📊  Pipeline Analysis\n` +
        `${'─'.repeat(30)}\n` +
        `🔵  Nodes  : ${data.num_nodes}\n` +
        `🔗  Edges  : ${data.num_edges}\n` +
        `${'─'.repeat(30)}\n` +
        `${data.is_dag ? '✅  Is a valid DAG' : '❌  Contains a cycle (not a DAG)'}`
      );
    } catch (err) {
      alert(`❌  Error connecting to backend:\n${err.message}\n\nMake sure the FastAPI server is running on http://localhost:8000`);
    }
  };

  return (
    <div className="submit-bar">
      <button className="submit-btn" onClick={handleSubmit}>
        ▶ Run Pipeline
      </button>
    </div>
  );
};

