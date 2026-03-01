// BaseNode.js — Reusable base component for all pipeline nodes
import { Handle, Position } from 'reactflow';
import './BaseNode.css';

/**
 * BaseNode provides the shared structure for every node:
 *   - A coloured header with icon + title
 *   - Auto-positioned input handles on the left
 *   - Auto-positioned output handles on the right
 *   - A content area rendered via `children`
 *
 * Props
 * ─────
 * id          {string}   ReactFlow node id
 * title       {string}   Header label
 * icon        {string}   Optional emoji / character shown beside the title
 * headerColor {string}   CSS gradient / colour for the header (default indigo→violet)
 * inputs      {Array}    [{ id, label? }] — target handles on the left
 * outputs     {Array}    [{ id, label? }] — source handles on the right
 * width       {number}   Node width in px (default 220)
 * style       {object}   Extra inline styles applied to the wrapper
 * children    {ReactNode} Node-specific field content
 */
export const BaseNode = ({
  id,
  title,
  icon = '',
  headerColor = 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
  inputs = [],
  outputs = [],
  children,
  width = 220,
  style = {},
}) => {
  // Evenly space handles along the edge
  const handleTop = (idx, total) =>
    total === 1 ? '50%' : `${((idx + 1) / (total + 1)) * 100}%`;

  return (
    <div className="base-node" style={{ width, ...style }}>

      {/* ── Left-side target handles (inputs) ── */}
      {inputs.map((inp, idx) => (
        <Handle
          key={`${id}-in-${idx}`}
          type="target"
          position={Position.Left}
          id={`${id}-${inp.id}`}
          style={{ top: handleTop(idx, inputs.length) }}
          title={inp.label || inp.id}
        />
      ))}

      {/* ── Header ── */}
      <div className="base-node-header" style={{ background: headerColor }}>
        {icon && <span className="base-node-icon">{icon}</span>}
        <span className="base-node-title">{title}</span>
      </div>

      {/* ── Content slot ── nodrag prevents accidental drag from inputs */}
      <div className="base-node-content nodrag">
        {children}
      </div>

      {/* ── Right-side source handles (outputs) ── */}
      {outputs.map((out, idx) => (
        <Handle
          key={`${id}-out-${idx}`}
          type="source"
          position={Position.Right}
          id={`${id}-${out.id}`}
          style={{ top: handleTop(idx, outputs.length) }}
          title={out.label || out.id}
        />
      ))}

    </div>
  );
};
