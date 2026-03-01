// mathNode.js — Binary math operation node
// Inputs : a, b   Outputs: result
// Demonstrates BaseNode with 2 inputs + operation selector.

import { useState } from 'react';
import { BaseNode } from './BaseNode';

const OPERATIONS = [
  { value: 'add',      label: 'Add  (a + b)' },
  { value: 'subtract', label: 'Subtract  (a − b)' },
  { value: 'multiply', label: 'Multiply  (a × b)' },
  { value: 'divide',   label: 'Divide  (a ÷ b)' },
  { value: 'power',    label: 'Power  (aᵇ)' },
  { value: 'mod',      label: 'Modulo  (a % b)' },
];

export const MathNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || 'add');

  return (
    <BaseNode
      id={id}
      title="Math"
      icon="🔢"
      headerColor="linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)"
      inputs={[
        { id: 'a', label: 'A' },
        { id: 'b', label: 'B' },
      ]}
      outputs={[{ id: 'result', label: 'Result' }]}
      width={220}
    >
      <div className="node-field">
        <label className="node-label">Operation</label>
        <select
          className="node-select"
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          {OPERATIONS.map((op) => (
            <option key={op.value} value={op.value}>{op.label}</option>
          ))}
        </select>
      </div>
      <div className="node-tag-row">
        <span className="node-badge">a</span>
        <span className="node-badge">b</span>
        <span style={{ color: '#64748b', fontSize: 10 }}>→</span>
        <span className="node-badge">result</span>
      </div>
    </BaseNode>
  );
};
