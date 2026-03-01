// textNode.js
// Part 3: auto-resizing width/height + dynamic variable handles from {{varName}}

import { useState, useMemo, useEffect, useRef } from 'react';
import { BaseNode } from './BaseNode';

// Matches {{ validJsVarName }} — spaces around the name are allowed
const VAR_REGEX = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const textareaRef = useRef(null);

  // ── Extract unique variable names from {{...}} patterns ──
  const variables = useMemo(() => {
    const vars = [];
    const seen = new Set();
    let match;
    const regex = new RegExp(VAR_REGEX.source, 'g');
    while ((match = regex.exec(currText)) !== null) {
      if (!seen.has(match[1])) {
        seen.add(match[1]);
        vars.push(match[1]);
      }
    }
    return vars;
  }, [currText]);

  // ── Auto-grow textarea height ──
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [currText]);

  // ── Auto-grow node width based on longest line ──
  const nodeWidth = useMemo(() => {
    const lines = currText.split('\n');
    const maxLen = Math.max(...lines.map((l) => l.length), 10);
    return Math.max(220, Math.min(520, 160 + maxLen * 7));
  }, [currText]);

  return (
    <BaseNode
      id={id}
      title="Text"
      icon="📝"
      headerColor="linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"
      // Each extracted variable becomes a target (input) handle on the left
      inputs={variables.map((v) => ({ id: v, label: v }))}
      outputs={[{ id: 'output', label: 'Output' }]}
      width={nodeWidth}
    >
      <div className="node-field">
        <label className="node-label">Text</label>
        <textarea
          ref={textareaRef}
          className="node-textarea"
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
          rows={1}
          placeholder="Type text… use {{varName}} for variables"
        />
      </div>
      {variables.length > 0 && (
        <div className="node-tag-row">
          {variables.map((v) => (
            <span key={v} className="node-badge">{v}</span>
          ))}
        </div>
      )}
    </BaseNode>
  );
};
