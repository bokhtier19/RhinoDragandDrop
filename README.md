# Rhino Drag & Drop

A prototype drag-and-drop website builder built with React and @dnd-kit.  

This project reimagines a form-based website builder into a drag-and-drop interface, allowing users to add elements to a canvas and configure their properties through a panel.

## Features

- Drag-and-drop elements: Text, Button, Image.  
- Edit element properties after placement (text, label, colors, image URL).  
- Fully responsive: works on desktop and mobile.  
- Default images use https://picsum.photos/200.  
- Modular and scalable architecture.

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

## How It Works

1. Drag an element from the Sidebar and drop it onto the Canvas.  
2. Click the element to select it.  
3. Edit its properties in the Properties Panel — updates are immediate.  
4. Works on both desktop and mobile devices.

## Submission

This prototype is built for the **Frontend Developer assignment at Websites.co.in**.  
It demonstrates drag-and-drop functionality, element property editing, responsiveness, and clean code structure.
