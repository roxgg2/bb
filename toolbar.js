// toolbar.js

import { DraggableNode } from './draggableNode';

const NODES = [
  { type: 'customInput',  label: 'Input',     icon: '📥', gradient: 'linear-gradient(135deg, #10b981, #059669)' },
  { type: 'customOutput', label: 'Output',    icon: '📤', gradient: 'linear-gradient(135deg, #3b82f6, #2563eb)' },
  { type: 'llm',          label: 'LLM',       icon: '🤖', gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)' },
  { type: 'text',         label: 'Text',      icon: '📝', gradient: 'linear-gradient(135deg, #f59e0b, #d97706)' },
  { type: 'note',         label: 'Note',      icon: '📌', gradient: 'linear-gradient(135deg, #fbbf24, #f59e0b)' },
  { type: 'api',          label: 'API',       icon: '🌐', gradient: 'linear-gradient(135deg, #ec4899, #db2777)' },
  { type: 'math',         label: 'Math',      icon: '🔢', gradient: 'linear-gradient(135deg, #06b6d4, #0891b2)' },
  { type: 'condition',    label: 'Condition', icon: '🔀', gradient: 'linear-gradient(135deg, #f97316, #ea580c)' },
  { type: 'transform',    label: 'Transform', icon: '⚙️', gradient: 'linear-gradient(135deg, #14b8a6, #0d9488)' },
];

export const PipelineToolbar = () => {
  return (
    <div className="toolbar">
      <span className="toolbar-logo">⚡ PipelineBuilder</span>
      <span className="toolbar-divider" />
      <span className="toolbar-label">Drag a node:</span>
      <div className="toolbar-nodes">
        {NODES.map((n) => (
          <DraggableNode key={n.type} {...n} />
        ))}
      </div>
    </div>
  );
};
