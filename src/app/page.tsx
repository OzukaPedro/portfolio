import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { LuMail } from 'react-icons/lu';
import AboutCards from './_components/AboutCards';
import IconsList from './_components/IconsList';

export default function Home() {
  return (
    <main className="flex flex-col items-center mt-16">
      <div className="flex flex-col justify-center items-center max-w-160 py-20 gap-10 min-h-screen">
        <h2 className="text-foreground font-bold text-6xl mt-10">Pedro Campagnoli</h2>
        <span className="text-primary text-xl font-medium brightness-200">Desenvolvedor Full Stack</span>
        <p className="text-primary-text text-center">Construo experiencias digitais de alta performance com foco em design, acessibilidade e codigo limpo. Apaixonado por transformar ideias em produtos reais</p>

        <div className="flex gap-8">
          <a className="text-white text-sm bg-primary  rounded-2xl px-6 py-4
          dark:brightness-150 brightness-125 hover:scale-110 transition-all duration-300" 
          href="">Ver Projetos</a>
          <a className="text-foreground text-sm rounded-2xl px-6 py-4 hover:scale-110 duration-300" href="">Contato</a>
        </div>

        <div className="flex text-primary-text  gap-4">
          <a href="https://github.com/OzukaPedro" target='_blank'>
            <FaGithub className='hover:text-primary transition-all duration-300 hover:scale-125' size={40}/>
          </a>
          <a href="https://www.linkedin.com/in/pedro-campagnoli-52737325b/" target='_blank'>
            <FaLinkedinIn className='hover:text-primary transition-all duration-300 hover:scale-125' size={40}/>
          </a>
          <a href="mailto:dev.pedro.campagnoli@gmail.com" target='_blank'>
            <LuMail className='hover:text-primary transition-all duration-300 hover:scale-125' size={40}/>
          </a>
        </div>
      </div>

      <section className='w-full flex justify-center items-center gap-20' id='about'>
        <div className='flex flex-col gap-4'>
          <span className='text-primary'>/ /Sobre mim</span>

          <h3 className='text-foreground font-semibold text-3xl'>Um pouco sobre mim</h3>
          <div className='text-primary-text max-w-lg text-justify'>
            <p>
              Sou um desenvolvedor full stack com paixao por criar solucoes digitais elegantes e eficientes.
              Com experiencia em diversas tecnologias, busco sempre entregar produtos que combinam otima experiencia do usuario com codigo de qualidade.
            </p>
            <p>
              <br/>
              Atualmente focado em React, Next.js, TypeScript e Node.js, tenho trabalhado em projetos que vao desde landing pages ate aplicacoes complexas de SaaS.
              Acredito que bom software nasce da interseção entre design e engenharia.
            </p>
          </div>

          <IconsList  />
        </div>

        <AboutCards />
      </section>

      <section>
        
      </section>
    </main>
  );
}
