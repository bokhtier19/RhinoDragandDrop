import React from "react";

export default function ImageElement({ properties }) {
    const src = properties?.src || "https://picsum.photos/200";
    const alt = properties?.alt || "Placeholder";

    return <img src={src} alt={alt} className="max-w-full h-auto" />;
}
