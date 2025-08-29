import React from "react";

export default function PropertiesPanel({ element, onUpdate, className }) {
    if (!element) return <div className={`p-4 ${className}`}>Select an element to edit.</div>;

    const { type, properties } = element;

    const handleChange = (e) => {
        const { name, value } = e.target;
        onUpdate(element.id, { [name]: value });
    };

    return (
        <div className={`p-4 ${className}`}>
            <h2 className="font-bold mb-2">Properties</h2>

            {type === "text" && (
                <>
                    <label className="block text-sm mb-1">Text</label>
                    <input
                        type="text"
                        name="text"
                        value={properties.text}
                        onChange={handleChange}
                        className="border p-1 w-full mb-2"
                    />

                    <label className="block text-sm mb-1">Color</label>
                    <input
                        type="color"
                        name="color"
                        value={properties.color}
                        onChange={handleChange}
                        className="mb-2 w-full"
                    />
                </>
            )}

            {type === "button" && (
                <>
                    <label className="block text-sm mb-1">Label</label>
                    <input
                        type="text"
                        name="label"
                        value={properties.label}
                        onChange={handleChange}
                        className="border p-1 w-full mb-2"
                    />

                    <label className="block text-sm mb-1">Text Color</label>
                    <input
                        type="color"
                        name="color"
                        value={properties.color}
                        onChange={handleChange}
                        className="mb-2 w-full"
                    />

                    <label className="block text-sm mb-1">Background Color</label>
                    <input
                        type="color"
                        name="bgColor"
                        value={properties.bgColor}
                        onChange={handleChange}
                        className="mb-2 w-full"
                    />
                </>
            )}

            {type === "image" && (
                <>
                    <label className="block text-sm mb-1">Image URL</label>
                    <input
                        type="text"
                        name="src"
                        value={properties.src}
                        onChange={handleChange}
                        placeholder="https://picsum.photos/200"
                        className="border p-1 w-full mb-2"
                    />
                </>
            )}
        </div>
    );
}
