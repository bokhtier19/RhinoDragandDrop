# Rhino Drag & Drop

A prototype drag-and-drop website builder built with React and @dnd-kit.  

This project reimagines a form-based website builder into a drag-and-drop interface, allowing users to add elements to a canvas and configure their properties through a panel.

---

## Features

- Drag-and-drop elements: Text, Button, Image.  
- Edit element properties after placement (text, label, colors, image URL).  
- Fully responsive: works on desktop and mobile.  
- Default images use https://picsum.photos/200.  
- Modular and scalable architecture.

---

## File Structure

src/
- App.jsx
- components/
  - Sidebar.jsx
  - Canvas.jsx
  - PropertiesPanel.jsx
  - Elements/
    - TextElement.jsx
    - ButtonElement.jsx
    - ImageElement.jsx

---

## How It Works

1. Drag an element from the Sidebar and drop it onto the Canvas.  
2. Click the element to select it.  
3. Edit its properties in the Properties Panel — updates are immediate.  
4. Works on both desktop and mobile devices.

---

## Documentation – Architecture, Tools, and Reasoning

The **Rhino Drag & Drop** prototype is a modular React application designed to reimagine a form-based website builder into an intuitive drag-and-drop interface. It uses **@dnd-kit** to handle drag-and-drop interactions and **TailwindCSS** for responsive, mobile-first design. The application allows users to drag elements such as Text, Button, and Image from a **Sidebar**, drop them onto a **Canvas**, and immediately edit their properties through a **Properties Panel**.  

Each element maintains a **properties object** that stores its configurable attributes, such as text content, button labels, colors, and image URLs. Default properties are assigned to new elements to ensure they render correctly and avoid undefined errors. Users can click on an element to select it and modify its properties in real-time, with changes instantly reflected on the Canvas.  

The layout is fully **responsive**: on desktop, the Sidebar, Canvas, and Properties Panel are arranged horizontally, while on mobile devices, they stack vertically for a seamless experience. Scrollable containers ensure that content remains accessible regardless of screen size.  

The project’s architecture is **modular and scalable**. Components are separated logically, allowing new element types to be added easily by creating a new component, adding default properties, and updating the Sidebar. State management is simple and centralized, keeping the `elements` array as the single source of truth for Canvas content, while `selectedElementId` tracks the active element for property editing.  

This design emphasizes **usability, clarity, and responsiveness**. It demonstrates a real-world approach to building a drag-and-drop website builder prototype, balancing simplicity and functionality. The clean code structure and modular design make it easy to extend, maintain, or integrate additional features in the future.

---

