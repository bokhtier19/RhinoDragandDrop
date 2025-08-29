import React from "react";
import { useDroppable } from "@dnd-kit/core";
import TextElement from "./Elements/TextElement";
import ButtonElement from "./Elements/ButtonElement";
import ImageElement from "./Elements/ImageElement";

export default function Canvas({ elements, selectedElementId, onSelect, className }) {
    const { setNodeRef, isOver } = useDroppable({ id: "canvas-dropzone" });

    return (
        <div
            ref={setNodeRef}
            className={`${className} border m-2 p-2 bg-white overflow-auto min-h-[300px] ${isOver ? "bg-blue-50" : ""}`}
        >
            <h2 className="text-gray-400 mb-2">Drop elements here</h2>

            {elements.map((el) => {
                const isSelected = el.id === selectedElementId;
                return (
                    <div
                        key={el.id}
                        onClick={() => onSelect(el.id)}
                        className={`p-2 mb-2 border rounded cursor-pointer ${
                            isSelected ? "border-blue-500" : "border-gray-200"
                        }`}
                    >
                        {el.type === "text" && <TextElement properties={el.properties} />}
                        {el.type === "button" && <ButtonElement properties={el.properties} />}
                        {el.type === "image" && <ImageElement properties={el.properties} />}
                    </div>
                );
            })}
        </div>
    );
}
