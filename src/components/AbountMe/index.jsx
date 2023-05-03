import React, { useContext } from 'react'
import BlobBlur from '../BlobBlur/BlobBlur'
import Context from '../../Context/Themes'
import image from '../../../public/job.jpeg'

export default function AbountMe () {
  const { Themes } = useContext(Context)
  return (
    <div className='min-h-[400px] mb-36  relative' id='abountme'>
      <div><h2 className='py-5 sm:text-3xl text-2xl font-bold' style={{ color: Themes.text }}>Acerca de mi</h2></div>
      <div className='flex items-center justify-center md:flex-row flex-col'>
        <div className='flex-1'>
          <p className=' text-start font-normal sm:text-lg text-base' style={{ color: Themes.description }}>Desarrollador Full Stack con experiencia en tecnologías de frontend y backend, y me especializo en trabajar con Node.js, Express, Hapi, MongoDB y PostgreSQL . En el frontend, cuento con experiencia en React, Javascript, Redux, HTML, CSS y Bootstrap para el desarrollo de aplicaciones web. Me considero una persona que aprende rápido y estoy enfocado en profundizar mis conocimientos en lenguajes de programación y crear más proyectos tanto en solitario como en equipo.Además, soy un colaborador de equipo apasionado, siempre busco soluciones rápidas y dinámicas para los diferentes proyectos en los que he trabajado. En mi tiempo libre, disfruto de los viajes en moto y mantenerme actualizado sobre las últimas tendencias tecnológicas.Si necesitas un desarrollador de software confiable y apasionado, no dudes en contactarme.
          </p>
        </div>
        <div className='flex-1 flex justify-center relative ml-5 md:mt-0 mt-10'>
          <div className='sm:w-[320px] sm:h-[320px] h-[250px] w-[250px] rounded-xl bg-white relative overflow-hidden z-[2]'>
            <img src={image} className='w-full h-full object-cover' alt='' />
          </div>
          <BlobBlur positionStyles={{ top: '0', right: '0', height: '600px', width: '70%', opacity: '1' }} />
        </div>
      </div>
    </div>
  )
}
