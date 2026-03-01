// llmNode.js

import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      icon="🤖"
      headerColor="linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)"
      inputs={[
        { id: 'system', label: 'System Prompt' },
        { id: 'prompt', label: 'User Prompt' },
      ]}
      outputs={[{ id: 'response', label: 'Response' }]}
    >
      <p className="node-info">Processes system &amp; user prompts and returns a generated response.</p>
      <div className="node-tag-row">
        <span className="node-badge">system</span>
        <span className="node-badge">prompt</span>
        <span style={{ color: '#64748b', fontSize: 10 }}>→</span>
        <span className="node-badge">response</span>
      </div>
    </BaseNode>
  );
};
