// noteNode.js — Sticky-note annotation node (no handles)
// Demonstrates BaseNode with zero inputs and zero outputs.

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const NoteNode = ({ id, data }) => {
  const [text, setText] = useState(data?.note || '📌 Add a note…');

  return (
    <BaseNode
      id={id}
      title="Note"
      icon="📌"
      headerColor="linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)"
      inputs={[]}
      outputs={[]}
      width={200}
    >
      <textarea
        className="node-textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={3}
        style={{ minHeight: 60, color: '#fde68a' }}
        placeholder="Write a note…"
      />
    </BaseNode>
  );
};
