import person1 from "../assets/mukesh.png";
import person2 from "../assets/gutam.png";

const Card = ({ image, name, role }) => {
  return (
    <div className="group  relative w-[450px] md:w-[300px] lg:w-[400px] h-[400px] sm:h-[550px] md:h-[350px] lg:h-[450px] rounded-lg shadow-md  bg-white dark:bg-black dark:text-white before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-lg before:bg-Primary dark:before:bg-black before:duration-[0.5s] before:-z-[1] hover:before:rotate-[20deg] hover:before:shadow-xl after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-lg after:bg-Primary dark:after:bg-black after:duration-[0.5s] after:-z-[1] hover:after:rotate-[10deg] hover:after:shadow-xl">
      <div className="absolute top-[10px] left-[10px] right-[10px] bottom-[10px] bg-[#222] duration-[0.5s] z-[1]   group-hover:bottom-[80px]">
        <img
          src={image}
          alt={`${name}'s profile`}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="absolute left-[10px] right-[10px] bottom-[40px] h-[40px] text-center">
        <h2 className="m-0 p-0 font-semibold text-[18px] md:text-[24px] uppercase font-Secondary">
          {name}
          <br />
          <span className="font-medium  text-[20px] font-Secondary">{role}</span>
        </h2>
      </div>
    </div>
  );
};


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
    <section className="py-[50px] xl:py-[100px] bg-[#1173b942]">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-[60px] md:mb-[50px] lg:mb-[80px]">
          <h2 className="text-[24px] sm:text-[30px] md:text-[38px] font-bold uppercase tracking-wider text-center wow animate__animated animate__zoomIn">
            Meet Our Directors
          </h2>
        </div>
        <div className="flex justify-center items-center gap-[50px] sm:gap-[70px] md:gap-[50px] lg:gap-[70px] xl:gap-[100px] flex-wrap wow animate__animated animate__zoomIn">
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
