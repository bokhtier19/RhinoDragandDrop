import React from "react";
import { useDraggable } from "@dnd-kit/core";

const SidebarItem = ({ item }) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: item.type,
    });
    const style = {
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    };

    return (
        <div
            ref={setNodeRef}
            {...listeners}
            {...attributes}
            className="p-2 m-2 bg-gray-200 rounded cursor-grab"
            style={style}
        >
            {item.label}
        </div>
    );
};

export default SidebarItem;
