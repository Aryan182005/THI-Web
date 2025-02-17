import Marquee from 'react-fast-marquee'
import logo1 from '../assets/html.png'
import logo2 from '../assets/css.png'
import logo3 from '../assets/bootstarp.png'
import logo4 from '../assets/js.png'
import logo5 from '../assets/laravel.png'
import logo6 from '../assets/mongodb.png'
import logo7 from '../assets/node.png'
import logo8 from '../assets/php.png'
import logo9 from '../assets/postgresql.png'
import logo10 from '../assets/python.png'
import logo11 from '../assets/react.png'
import logo12 from '../assets/sqlite.png'
import logo13 from '../assets/wordpress.png'
import logo14 from '../assets/angular.png'
import logo15 from '../assets/vue.png'
import logo16 from '../assets/tailwindcss.png'
import logo17 from '../assets/mysql.png'
import logo18 from '../assets/shopify.png'
import logo19 from '../assets/codeigniter.png'
import logo20 from '../assets/chatgpt.png'

const Logoslide = () => {

  const logoImage = [
    {
      Logo: logo1,
    },
    {
      Logo: logo2,
    },
    {
      Logo: logo3,
    },
    {
      Logo: logo4,
    },
    {
      Logo: logo5,
    },
    {
      Logo: logo6,
    },
    {
      Logo: logo7,
    },
    {
      Logo: logo8,
    },
    {
      Logo: logo9,
    },
    {
      Logo: logo10,
    },
    {
      Logo: logo11,
    },
    {
      Logo: logo12,
    },
    {
      Logo: logo13,
    },
    {
      Logo: logo14,
    },
    {
      Logo: logo15,
    },
    {
      Logo: logo16,
    },
    {
      Logo: logo17,
    },
    {
      Logo: logo18,
    },
    {
      Logo: logo19,
    },
    {
      Logo: logo20,
    },
  ]

  return (
    <>
      <section className='border-b-[1px] border-dotted border-[#0000005c] '>
        <div className="row">
          <ul className='flex overflow-hidden py-[40px] bg-white dark:bg-black relative before:absolute before:top-0 before:w-[250px] before:h-[100%] before:z-[2] before:left-0 before:bg-custom-gradient border-b-[1px] border-dotted border-[#0000005c] dark:border-white wow animate__animated animate__fadeInRightBig'>
            <Marquee direction='left' speed={100} className='relative'>
              {logoImage.map((logoImage, index) => (
                <li key={index} >
                  <img src={logoImage.Logo} className='mx-[40px]' />
                </li>
              ))}
            </Marquee>
          </ul>
          <ul className='flex overflow-hidden py-[40px] bg-white dark:bg-black relative after:absolute after:top-0 after:w-[250px] after:h-[100%] after:z-[2] after:right-0 after:bg-custom-gradient2 wow animate__animated animate__fadeInLeftBig'>
            <Marquee direction='right' speed={100}>
              {logoImage.map((logoImage, index) => (
                <li key={index}>
                  <img src={logoImage.Logo} className='mx-[40px]' />
                </li>
              ))}
            </Marquee>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Logoslide
