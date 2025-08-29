import React from "react";

export default function ButtonElement({ properties }) {
    const label = properties?.label || "Click Me";
    return <button className="px-4 py-2 bg-blue-500 text-white rounded">{label}</button>;
}
