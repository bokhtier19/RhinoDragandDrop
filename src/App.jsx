import React, { useState } from "react";
import { DndContext, DragOverlay, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";

import Sidebar from "./components/Sidebar";
import Canvas from "./components/Canvas";
import PropertiesPanel from "./components/PropertiesPanel";

function App() {
    const [elements, setElements] = useState([]);
    const [selectedElementId, setSelectedElementId] = useState(null);
    const [activeId, setActiveId] = useState(null); // currently dragging

    // Configure sensors for desktop + mobile
    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: { distance: 5 }, // small movement before drag starts
        })
    );

    const handleDragStart = (event) => {
        setActiveId(event.active.id);
    };

    const handleDragEnd = (event) => {
        const { over, active } = event;
        setActiveId(null);

        if (over && over.id === "canvas-dropzone") {
            const defaultProperties = {
                text: { text: "New Text", color: "#000000", fontSize: 16 },
                button: { label: "Click Me", color: "#ffffff", bgColor: "#3b82f6" },
                image: { src: "https://picsum.photos/200", alt: "Placeholder Image" },
            };

            const newElement = {
                id: Date.now(),
                type: active.id,
                properties: defaultProperties[active.id] || {},
            };

            setElements((prev) => [...prev, newElement]);
        }
    };

    const handleUpdateProperties = (id, newProps) => {
        setElements((prev) =>
            prev.map((el) => (el.id === id ? { ...el, properties: { ...el.properties, ...newProps } } : el))
        );
    };

    return (
        <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
            <div className="flex flex-col md:flex-row h-screen">
                <Sidebar className="w-full md:w-1/4 h-auto md:h-full" />
                <Canvas
                    className="flex-1 w-full"
                    elements={elements}
                    selectedElementId={selectedElementId}
                    onSelect={setSelectedElementId}
                />
                <PropertiesPanel
                    className="w-full md:w-64 border-t md:border-t-0 md:border-l bg-gray-50"
                    element={elements.find((el) => el.id === selectedElementId)}
                    onUpdate={handleUpdateProperties}
                />
            </div>

            {/* Ghost overlay while dragging */}
            <DragOverlay>
                {activeId ? <div className="p-2 bg-gray-300 rounded shadow">{activeId.toUpperCase()}</div> : null}
            </DragOverlay>
        </DndContext>
    );
}

export default App;
