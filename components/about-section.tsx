"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#FDE2E4]">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          
          <motion.div
            className="relative" 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 -z-0 rounded-xl overflow-hidden">
              <div className="relative w-full h-full ">
                <Image
                  src="/logos/Simbolo-Grafico.png"        
                  alt="Fundo decorativo"
                  fill
                  className="object-cover opacity-15 pointer-events-none"
                  priority
                />
                <div className="absolute inset-0 bg-white/5" />
              </div>
            </div>

            <div className="relative z-10 space-y-4 p-6 md:p-8 rounded-xl">
              <div className="inline-block rounded-lg bg-[#ec7894] px-3 py-1 text-sm text-primary-foreground mb-2">
                Psicóloga Kalynna Moreira
              </div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                Atendimento especializado com acolhimento
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Com sólida formação e experiência clínica, sou  dedicada a promover o bem-estar integral de meus pacientes. Minha atuação une técnicas baseadas em evidências científicas a uma abordagem humanizada, que valoriza a pessoa em sua totalidade — mente, corpo e emoções.
              </p>
              <div className="space-y-4 mt-6">
                <p>
                  Ao longo da minha trajetória, tenho auxiliado pessoas a compreender melhor suas questões emocionais, cognitivas e comportamentais, por meio de avaliações psicológicas e psicodiagnósticos, psicopedagogia clínica e atendimento especializado a pessoas com Transtorno do Espectro Autista (TEA). Também realizo avaliações para cirurgias bariátricas, vasectomia, laqueadura e posse e porte de arma, sempre seguindo rigorosos critérios éticos e legais.
                </p>
                <p>
                  Com um olhar atento e empático, adapto cada intervenção às necessidades individuais, criando um espaço seguro e acolhedor para que meus pacientes encontrem clareza, equilíbrio e qualidade de vida. 
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative lg:ml-10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 md:-top-8 md:-left-8 lg:-top-10 lg:-left-10 z-30">
              <Image
                src="/logos/Marca-d_agua.png"
                alt="Logo Psicóloga Kalynna Moreira"
                width={40}
                height={40}
                className="rounded-full shadow-lg w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px]"
                priority
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/Kalynna.jpg"
                alt="Psicóloga Kalynna Moreira"
                fill
                className="object-cover object-[center_20%] absolute inset-0 w-full h-full"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-background rounded-lg p-4 shadow-lg border">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-[#ec7894]" />
                <span className="font-medium">Terapeuta Gestalt</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
