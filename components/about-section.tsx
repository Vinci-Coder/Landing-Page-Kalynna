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
          
          {/* Coluna de texto com imagem de fundo */}
          <motion.div
            className="relative" // necessário para o posicionamento absoluto do fundo
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Fundo atrás do texto */}
            <div className="absolute inset-0 -z-0 rounded-xl overflow-hidden">
              <Image
                src="/logos/Simbolo-Grafico.png"         // ajuste o caminho da imagem de fundo
                alt="Fundo decorativo"
                fill
                className="object-cover opacity-20 pointer-events-none"
                priority
              />
              {/* Opcional: leve véu para contraste do texto */}
              <div className="absolute inset-0 bg-white/5" />
            </div>

            {/* Conteúdo sobre o fundo */}
            <div className="relative z-10 space-y-4 p-6 md:p-8 rounded-xl">
              <div className="inline-block rounded-lg bg-[#ec7894] px-3 py-1 text-sm text-primary-foreground mb-2">
                Psicóloga Kalynna Moreira
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Psicóloga experiente dedicada ao seu bem-estar
              </h2>
              <p className="text-muted-foreground md:text-xl">
                Com 10 anos de experiência, Kalynna Moreira é uma psicóloga dedicada a promover o bem-estar integral de seus
                pacientes. Sua atuação combina técnicas comprovadas cientificamente com uma abordagem humanizada, que considera a
                pessoa em sua totalidade — mente, corpo e espírito.
              </p>
              <div className="space-y-4 mt-6">
                <p>
                  Ao longo de sua trajetória, Kalynna tem auxiliado pessoas a enfrentar desafios como ansiedade, depressão,
                  dificuldades nos relacionamentos e processos de autodesenvolvimento. Seu consultório é um espaço seguro e
                  acolhedor, onde cada indivíduo pode expressar seus sentimentos livremente, sem julgamentos.
                </p>
                <p>
                  Com um olhar atento e empático, ela adapta sua metodologia às necessidades específicas de cada paciente,
                  oferecendo suporte efetivo para que encontrem equilíbrio, clareza e qualidade de vida.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Coluna com a foto e selo de experiência */}
          <motion.div
            className="relative lg:ml-10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/Kalynna.jpg"
                alt="Psicóloga Kalynna Moreira"
                width={600}
                height={600}
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white">Psicóloga Kalynna Moreira</h3>
                <p className="text-white/80">Terapeuta Gestalt</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-background rounded-lg p-4 shadow-lg border">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <span className="font-medium">10+ Anos de Experiência</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
