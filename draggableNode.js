// draggableNode.js

export const DraggableNode = ({ type, label, icon = '', gradient }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className="draggable-node"
      onDragStart={(event) => onDragStart(event, type)}
      style={{ background: gradient || 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
      draggable
    >
      {icon && <span style={{ fontSize: 14 }}>{icon}</span>}
      <span>{label}</span>
    </div>
  );
};
