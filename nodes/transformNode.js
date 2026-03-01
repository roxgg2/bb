// transformNode.js — String / data transformation node
// Inputs : input   Outputs: output
// Demonstrates BaseNode reuse with a type-selector for different transforms.

import { useState } from 'react';
import { BaseNode } from './BaseNode';

const TRANSFORMS = [
  { value: 'uppercase',    label: 'UPPERCASE' },
  { value: 'lowercase',    label: 'lowercase' },
  { value: 'trim',         label: 'Trim whitespace' },
  { value: 'reverse',      label: 'Reverse string' },
  { value: 'json_parse',   label: 'Parse JSON' },
  { value: 'json_stringify',label: 'Stringify JSON' },
  { value: 'base64_encode',label: 'Base64 Encode' },
  { value: 'base64_decode',label: 'Base64 Decode' },
];

export const TransformNode = ({ id, data }) => {
  const [transform, setTransform] = useState(data?.transform || 'uppercase');

  return (
    <BaseNode
      id={id}
      title="Transform"
      icon="⚙️"
      headerColor="linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)"
      inputs={[{ id: 'input', label: 'Input' }]}
      outputs={[{ id: 'output', label: 'Output' }]}
      width={220}
    >
      <div className="node-field">
        <label className="node-label">Operation</label>
        <select
          className="node-select"
          value={transform}
          onChange={(e) => setTransform(e.target.value)}
        >
          {TRANSFORMS.map((t) => (
            <option key={t.value} value={t.value}>{t.label}</option>
          ))}
        </select>
      </div>
      <p className="node-info">Transforms the input value and passes it downstream.</p>
    </BaseNode>
  );
};
