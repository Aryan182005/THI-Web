// import React, { useState, useEffect } from 'react';

// const SliderWithSteps = () => {
//     const [position, setPosition] = useState(0);
//     const stepSize = 20; // Pixels per step
//     const sliderWidth = 280; // Width of the slider in pixels
//     const intervalTime = 400; // Time in milliseconds between each step

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setPosition((prev) => {
//                 // Move to the next step, and reset to 0 when reaching the end
//                 const nextPosition = prev + stepSize;
//                 return nextPosition >= sliderWidth ? 0 : nextPosition;
//             });
//         }, intervalTime);

//         return () => clearInterval(interval); // Clean up interval on unmount
//     }, []);

//     const handleDrag = (e) => {
//         const rect = e.target.parentNode.getBoundingClientRect();
//         const offsetX = e.clientX - rect.left;

//         if (offsetX >= 0 && offsetX <= sliderWidth) {
//             const snappedPosition = Math.round(offsetX / stepSize) * stepSize;
//             setPosition(snappedPosition);
//         }
//     };

//     const handleDragOver = (e) => {
//         e.preventDefault();
//     };


//     return (
//         <div className="flex items-center justify-center h-screen bg-gray-100">
//             <div className="relative w-72" onDragOver={handleDragOver}>
//                 <div className="absolute top-1/2 w-full h-1 bg-blue-800 transform -translate-y-1/2"></div>
//                 <div
//                     className="absolute top-1/2 w-4 h-4 bg-blue-800 rounded-full transform -translate-y-1/2 cursor-pointer transition-all duration-300"
//                     style={{ left: `${position}px` }}
//                     draggable
//                     onDrag={handleDrag}
//                 ></div>
//             </div>
//         </div>
//     );
// };

// export default SliderWithSteps;


// import React, { useRef, useState, useEffect } from "react";
// import logo from "../assets/favicon.png";

// const MouseFollowerCanvas = () => {
//   const canvasRef = useRef(null);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [image, setImage] = useState(null);

//   useEffect(() => {
//     const img = new Image();
//     img.src = logo;

//     img.onload = () => {
//       setImage(img); // Set the image after it's loaded
//     };
//   }, []);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext("2d");

//     const update = () => {
//       context.clearRect(0, 0, canvas.width, canvas.height);

//       if (image) {
//         const imgWidth = 50; // Customize size as needed
//         const imgHeight = 50;

//         // Draw the image at the mouse position
//         context.drawImage(
//           image,
//           mousePos.x - imgWidth / 2,
//           mousePos.y - imgHeight / 2,
//           imgWidth,
//           imgHeight
//         );
//       }

//       // Request the next frame
//       requestAnimationFrame(update);
//     };

//     update(); // Start the animation loop
//   }, [mousePos, image]); // Rerun the effect when `mousePos` or `image` changes

//   const handleMouseMove = (e) => {
//     const canvas = canvasRef.current;
//     const rect = canvas.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     setMousePos({ x, y });
//   };

//   return (
//     <canvas
//       ref={canvasRef}
//       width={800}
//       height={600}
//       onMouseMove={handleMouseMove}
//       style={{ border: "1px solid black" }}
//     />
//   );
// };

// export default MouseFollowerCanvas;


import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/mukesh.png'

const test = () => {
  return (
    <>
    
    </>
  )
}

export default test
