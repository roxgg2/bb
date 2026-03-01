// conditionNode.js — Boolean condition / if-else router node
// Inputs : value   Outputs: true, false
// Demonstrates BaseNode with 1 input and 2 outputs.

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const ConditionNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || 'value > 0');

  return (
    <BaseNode
      id={id}
      title="Condition"
      icon="🔀"
      headerColor="linear-gradient(135deg, #f97316 0%, #ea580c 100%)"
      inputs={[{ id: 'value', label: 'Input Value' }]}
      outputs={[
        { id: 'true',  label: 'True  branch' },
        { id: 'false', label: 'False branch' },
      ]}
      width={230}
    >
      <div className="node-field">
        <label className="node-label">Condition</label>
        <input
          className="node-input"
          type="text"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          placeholder="e.g. value > 0"
        />
      </div>
      <div className="node-tag-row">
        <span className="node-badge" style={{ borderColor: '#10b981', color: '#10b981' }}>✓ true</span>
        <span className="node-badge" style={{ borderColor: '#ef4444', color: '#ef4444' }}>✗ false</span>
      </div>
    </BaseNode>
  );
};
