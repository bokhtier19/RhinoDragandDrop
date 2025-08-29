import React from "react";
import { useDraggable } from "@dnd-kit/core";

const items = [
    { id: "text", label: "Text" },
    { id: "button", label: "Button" },
    { id: "image", label: "Image" },
];

function DraggableItem({ id, label }) {
    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id });

    const style = {
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
        opacity: isDragging ? 0.5 : 1,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
            className="p-2 bg-gray-200 rounded mb-2 cursor-grab"
        >
            {label}
        </div>
    );
}

export default function Sidebar({ className }) {
    return (
        <div className={`p-4 bg-gray-100 overflow-y-auto ${className}`}>
            <h2 className="font-bold mb-4">Elements</h2>
            {items.map((item) => (
                <DraggableItem key={item.id} {...item} />
            ))}
        </div>
    );
}
