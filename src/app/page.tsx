import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { LuMail } from 'react-icons/lu';

export default function Home() {
  return (
    <main className="flex flex-col items-center mt-16">
      <div className="flex flex-col justify-center items-center max-w-160 py-20 gap-10">
        <h2 className="text-foreground font-bold text-6xl mt-10">Pedro Campagnoli</h2>
        <span className="text-primary text-xl font-medium">Desenvolvedor Full Stack</span>
        <p className="text-primary-text text-center">Construo experiencias digitais de alta performance com foco em design, acessibilidade e codigo limpo. Apaixonado por transformar ideias em produtos reais</p>

        <div className="flex gap-8">
          <a className="text-white text-sm bg-primary  rounded-2xl px-6 py-4
          dark:brightness-150 brightness-125 hover:scale-110 transition-all duration-300" 
          href="">Ver Projetos</a>
          <a className="text-foreground text-sm rounded-2xl px-6 py-4 hover:scale-110 duration-300" href="">Contato</a>
        </div>

        <div className="flex text-primary-text  gap-4">
          <FaGithub className='hover:text-primary transition-all duration-300 hover:scale-125' size={40}/>
          <FaLinkedinIn className='hover:text-primary transition-all duration-300 hover:scale-125' size={40}/>
          <LuMail className='hover:text-primary transition-all duration-300 hover:scale-125' size={40}/>
        </div>
      </div>

      <section className='w-full px-16'>
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
      </section>
    </main>
  );
}
