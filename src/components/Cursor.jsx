// import React, { useEffect, useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";

// const Cursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [hovered, setHovered] = useState(false);
//   const [clicks, setClicks] = useState([]);

//   useEffect(() => {
//     const moveCursor = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     const handleClick = (e) => {
//       setClicks((prev) => [...prev, { x: e.clientX, y: e.clientY, id: Date.now()}]);
//     };

//     window.addEventListener("mousemove", moveCursor);
//     window.addEventListener("click", handleClick);

//     return () => {
//       window.removeEventListener("mousemove", moveCursor);
//       window.removeEventListener("click", handleClick);
//     };
//   }, []);

//   useEffect(() => {
//     const handleHover = () => setHovered(true);
//     const handleLeave = () => setHovered(false);

//     document.querySelectorAll("a, button").forEach((el) => {
//       el.addEventListener("mouseenter", handleHover);
//       el.addEventListener("mouseleave", handleLeave);
//     });

//     return () => {
//       document.querySelectorAll("a, button").forEach((el) => {
//         el.removeEventListener("mouseenter", handleHover);
//         el.removeEventListener("mouseleave", handleLeave);
//       });
//     };
//   }, []);

//   return (
//     <>
//     <motion.div 
//       className="z-[51] fixed top-0 left-0 w-6 h-6 bg-Primary rounded-full pointer-events-none mix-blend-difference"
//       animate={{x: position.x - 16,
//                 y: position.y - 16,
//                 scale: hovered ? 2 : 1,
//                 backgroundColor: hovered ? "#1173b9ee"  : "#1173b9ee",
//        }}
//        transition={{type: "spring", stiffness: 80, damping: 10}}
//     />

//     <AnimatePresence>
//       {clicks.map(({x,y,id}) => (
//         <motion.div  
//         key={id}
//         className="fixed w-12 h-12 bg-white/20 rounded-full pointer-events-none"
//         initial={{x: x - 24, y: y - 24, opacity: 1, scale: 0.5}}
//         animate={{scale: 2, opacity: 0}}
//         exit={{opacity: 0}}
//         transition={{duration: 0.5, ease: "easeOut"}}
//         onAnimationComplete={() => setClicks((prev) => prev.filter((click) => click.id !== id))}
//         />
//       ))}
//     </AnimatePresence>
//     </>
//   );
// };

// export default Cursor;


import { useEffect, useState } from "react";
import cursor from '../assets/cursor.png'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <img
      src={cursor}
      alt="Custom Cursor"
      className="fixed w-10 h-10 pointer-events-none"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    />
  );
};

export default CustomCursor;
