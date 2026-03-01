// apiNode.js — HTTP API call node
// Inputs : none   Outputs: response
// Demonstrates BaseNode with a URL field + method selector.

import { useState } from 'react';
import { BaseNode } from './BaseNode';

const METHODS = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'];

export const APINode = ({ id, data }) => {
  const [url, setUrl] = useState(data?.url || 'https://api.example.com/');
  const [method, setMethod] = useState(data?.method || 'GET');

  const methodColors = {
    GET: '#10b981',
    POST: '#3b82f6',
    PUT: '#f59e0b',
    PATCH: '#8b5cf6',
    DELETE: '#ef4444',
  };

  return (
    <BaseNode
      id={id}
      title="API Call"
      icon="🌐"
      headerColor="linear-gradient(135deg, #ec4899 0%, #db2777 100%)"
      inputs={[{ id: 'body', label: 'Request Body' }]}
      outputs={[{ id: 'response', label: 'Response' }]}
      width={240}
    >
      <div className="node-field">
        <label className="node-label">Method</label>
        <select
          className="node-select"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
          style={{ color: methodColors[method] || '#e2e8f0', fontWeight: 600 }}
        >
          {METHODS.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>
      <div className="node-field">
        <label className="node-label">URL</label>
        <input
          className="node-input"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://…"
        />
      </div>
    </BaseNode>
  );
};
