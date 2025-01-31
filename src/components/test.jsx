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


// import React from 'react'
// import { Link } from 'react-router-dom'
// import image from '../assets/mukesh.png'

// const test = () => {
//   return (
//     <>
    
//     </>
//   )
// }

// export default test



import React from 'react';

const Card = ({ image, name, role }) => {
  return (
    <div className="group relative w-[300px] h-[350px] rounded-md shadow-md mx-auto bg-white before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-[4px] before:bg-white before:duration-[0.5s] before:-z-[1] hover:before:rotate-[20deg] hover:before:shadow-lg  after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-[4px] after:bg-white after:duration-[0.5s] after:-z-[1] hover:after:rotate-[10deg] hover:after:shadow-lg">
      <div className="absolute top-[10px] left-[10px] right-[10px] bottom-[10px] bg-[#222] duration-[0.5s] z-[1] group-hover:bottom-[80px]">
        <img
          src={image}
          alt="card-image"
          className="absolute top-0 left-0 w-full h-full object-cover "
        />
      </div>
      <div className="absolute left-[10px] right-[10px] bottom-[10px] h-[60px] text-center">
        <h2 className="m-0 p-0 font-semibold text-lg text-gray-600 uppercase">
          {name}
          <br />
          <span className="font-medium text-pink-400 text-sm">{role}</span>
        </h2>
      </div>
    </div>
  );
};

const CardGrid = () => {
  const cards = [
    {
      image:
        'https://images.unsplash.com/photo-1532123675048-773bd75df1b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      name: 'SomeOne Famous',
      role: 'Director',
    },
    {
      image:
        'https://images.unsplash.com/photo-1549417229-aa67d3263c09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      name: 'SomeOne Famous',
      role: 'Producer',
    },
    {
      image:
        'https://images.unsplash.com/photo-1548094878-84ced0f6896d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      name: 'SomeOne Famous',
      role: 'Actor',
    },
  ];

  return (
    <div className="w-[1200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto py-[100px]">
      {cards.map((card, index) => (
        <Card key={index} image={card.image} name={card.name} role={card.role} />
      ))}
    </div>
  );
};

export default CardGrid;


