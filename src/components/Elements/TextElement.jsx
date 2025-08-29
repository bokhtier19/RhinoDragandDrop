import React from "react";

export default function TextElement({ properties }) {
    const text = properties?.text || "New Text";
    return <p>{text}</p>;
}
