import Image from 'next/image'
import Reveal from './Reveal'

const Work = () => {
  const images = [
    {image:"/Works_img3.jpeg"},
    {image:"/Works_img1.jpeg"},
    {image:"/Works_img5.jpeg"},
    {image:"/Works_img4.jpeg"},
    {image:"/Works_img2.jpeg"},
    {image:"/Works_img6.jpeg"}
  ]

  return (
    <section id="work" style={{ padding: "100px 5%", background: "#060c12" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Reveal>
<h2 className="font-orbitron" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 900, textTransform: "uppercase", lineHeight: 1.1, color: "#fff" }}>
            OUR <span style={{ color: "#ff2020", textShadow: "0 0 20px #ff2020" }}>WORKS</span>
          </h2>

          <div className="section-divider" />

<div className='grid grid-cols-3 gap-4'>
{
            images.map((im,i)=>(
              <Image src={im.image} alt='work_img' width={300} height={300} className='w-full h-60 duration-300 ease-in-out hover:-translate-y-2 hoverBackground' key={i}/>
            ))
          }
</div>
          
        </Reveal>
      </div>
    </section>
  )
}

export default Work