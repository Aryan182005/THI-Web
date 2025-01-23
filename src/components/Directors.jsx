// import React from 'react'
// import person1 from '../assets/mukesh.png'
// import person2 from '../assets/gutam.png'


// const Card = ({ DirectorsImage, DirectorsName, DirectorsLevel }) => {
//     return (
//       <div className="group relative w-[300px] h-[350px] rounded-md shadow-md mx-auto bg-white before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-[4px] before:bg-white before:duration-[0.5s] before:-z-[1] hover:before:rotate-[20deg] hover:before:shadow-lg  after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-[4px] after:bg-white after:duration-[0.5s] after:-z-[1] hover:after:rotate-[10deg] hover:after:shadow-lg">
//         <div className="absolute top-[10px] left-[10px] right-[10px] bottom-[10px] bg-[#222] duration-[0.5s] z-[1] group-hover:bottom-[80px]">
//           <img
//             src={DirectorsImage}
//             alt="card-image"
//             className="absolute top-0 left-0 w-full h-full object-cover "
//           />
//         </div>
//         <div className="absolute left-[10px] right-[10px] bottom-[10px] h-[60px] text-center">
//           <h2 className="m-0 p-0 font-semibold text-lg text-gray-600 uppercase">
//             {DirectorsName}
//             <br />
//             <span className="font-medium text-pink-400 text-sm">{DirectorsLevel}</span>
//           </h2>
//         </div>
//       </div>
//     );
//   };

// const Directors = () => {
//     const directorsData = [
//         {
//             DirectorsImage: person1,
//             DirectorsName: 'Kishan Gareja',
//             DirectorsLevel: 'Ceo',
//         },
//         {
//             DirectorsImage: person2,
//             DirectorsName: 'Jay Vaghela',
//             DirectorsLevel: 'Ceo',
//         },
//     ]
//     return (
//         <>
//             <section className='py-[100px]'>
//                 <div className="container">
//                     <div className="row">
//                         <div className="heading flex justify-center text-[38px] font-Secondary font-semibold mb-[40px] uppercase tracking-widest">
//                             <h2>Meet Our Directors</h2>
//                         </div>
//                         <div className="flex justify-center items-center gap-[100px] w-full">
//                             {directorsData.map((directors, index) => (
//                                 <Card key={index} image={directors.DirectorsImage} name={directors.DirectorsName} role={directors.DirectorsLevel} />
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default Directors


import React from "react";
import person1 from "../assets/mukesh.png";
import person2 from "../assets/gutam.png";

// Card Component
const Card = ({ image, name, role }) => {
  return (
    <div className="group relative w-[400px] h-[450px] rounded-md shadow-md  bg-white before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-[4px] before:bg-Primary before:duration-[0.5s] before:-z-[1] hover:before:rotate-[20deg] hover:before:shadow-xl after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-[4px] after:bg-Primary after:duration-[0.5s] after:-z-[1] hover:after:rotate-[10deg] hover:after:shadow-xl">
      <div className="absolute top-[10px] left-[10px] right-[10px] bottom-[10px] bg-[#222] duration-[0.5s] z-[1] group-hover:bottom-[80px]">
        <img
          src={image}
          alt={`${name}'s profile`}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="absolute left-[10px] right-[10px] bottom-[40px] h-[40px] text-center">
        <h2 className="m-0 p-0 font-semibold text-[24px] uppercase font-Secondary">
          {name}
          <br />
          <span className="font-medium  text-sm font-Secondary">{role}</span>
        </h2>
      </div>
    </div>
  );
};

// Directors Component
const Directors = () => {
  const directorsData = [
    {
      image: person1,
      name: "Kishan Gareja",
      role: "CEO",
    },
    {
      image: person2,
      name: "Jay Vaghela",
      role: "CEO",
    },
  ];

  return (
    <section className="py-[100px] bg-[#1173b942]">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-[80px]">
          <h2 className="text-[38px] font-bold uppercase tracking-wider">
            Meet Our Directors
          </h2>
        </div>
        <div className="flex justify-center items-center gap-[100px] flex-wrap">
          {directorsData.map((director, index) => (
            <Card
              key={index}
              image={director.image}
              name={director.name}
              role={director.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Directors;
