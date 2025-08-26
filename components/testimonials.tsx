import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Sempre fui muito ansioso e achava que isso fazia parte de mim. Com a Kalynna aprendi a me organizar melhor e hoje consigo viver de forma mais leve.",
      name: "Saulo R.",
      title: "Paciente há 1 ano",
      avatar: "SR",
    },
    {
      quote:
        "A terapia me ajudou a entender melhor minhas emoções. Hoje consigo lidar de forma mais tranquila com situações que antes me deixavam muito estressado.",
      name: "Larissa S.",
      title: "Paciente há 1 ano e meio",
      avatar: "LS",
    },
    {
      quote:
        "Eu tinha dificuldade em me abrir e falar sobre o que sentia. Aos poucos, fui ganhando confiança e hoje consigo me expressar sem tanto peso.",
      name: "João P.",
      title: "Paciente há 3 anos",
      avatar: "JP",
    },
  ]
  

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-[#D4E9F7] to-[#fff] ">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground mb-2 bg-[#D4E9F7]">
              Depoimentos
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Você Não Está sozinho(a)</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Conheça experiências de pessoas que enfrentaram dificuldades e encontraram apoio, escuta e novos caminhos.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full flex flex-col">
              <CardContent className="pt-6 flex-grow">
                <div className="mb-4 text-4xl">"</div>
                <p className="italic text-muted-foreground">{testimonial.quote}</p>
              </CardContent>
              <CardFooter className="border-t pt-4">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
