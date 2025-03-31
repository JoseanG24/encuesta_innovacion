"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail, Phone } from "lucide-react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function SurveyLandingPage() {
  const router = useRouter()

  const handleStartSurvey = () => {
    router.push("/registro")
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.2, opacity: 0.8 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src="/background1.jpg"
            alt="Computadora"
            fill
            className="object-cover brightness-50"
            priority
          />
        </motion.div>
        <motion.div
          className="relative z-10 text-center px-4 md:px-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Bienvenidos a la encuesta de innovación 2025
          </h1>
        </motion.div>
      </section>

      {/* Survey Information Section */}
      <section className="py-12 px-4 md:px-6 max-w-4xl mx-auto">
        <motion.div
          className="bg-white rounded-lg shadow-md p-6 md:p-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-semibold text-center mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Una aproximación a la encuesta que a continuación va a hacer…
          </motion.h2>
          <div className="space-y-4 text-muted-foreground">
            {[
              "Gracias por ser parte de la Investigación en Innovación pionera en Centroamérica. La presente encuesta persigue poder conocer el estado en que se entiende la innovación en las empresas y cómo esta impacta dentro de las organizaciones y termina reflejando el grado de innovación en un país.",
              "A continuación se encontrarán con 54 preguntas que entregan una visión completa del nivel de innovación que existe en la organización, es clave por ello que las complete todas y con sinceridad e indistintamente los resultados que se obtengan, es una oportunidad muy interesante para evaluar sus fortalezas, debilidades y oportunidades de innovación dentro de la estructura de su organización.",
              "Muchas gracias por su participación y siga buscando y generando Innovación en su empresa, nosotros estamos seguros de que es la única estrategia que le dará sostenibilidad en el tiempo a su organización.",
            ].map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                className="text-lg md:text-xl"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button size="lg" className="px-8 hover:cursor-pointer" onClick={handleStartSurvey}>
              Comenzar Encuesta
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-slate-700 text-white py-8 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center space-y-6">
            <motion.div
              className="flex items-center justify-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 2 }}
            >
              <Image
                src="/rndu-08-150x150.png" // Asegúrate de colocar la ruta correcta de tu logo
                alt="Logo"
                width={160} // Ajusta el tamaño según tu necesidad
                height={64}
                className="rounded"
              />
            </motion.div>
            <motion.div
              className="flex flex-col items-center space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.2 }}
            >
              <motion.div className="flex items-center" whileHover={{ x: 5, transition: { duration: 0.2 } }}>
                <Phone className="h-4 w-4 mr-2" />
                <span>(+502) 3289-3042</span>
              </motion.div>
              <motion.div className="flex items-center" whileHover={{ x: 5, transition: { duration: 0.2 } }}>
                <Mail className="h-4 w-4 mr-2" />
                <span>oscarrojasmorillo@gmail.com</span>
              </motion.div>
            </motion.div>
            <motion.div
              className="text-sm text-slate-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.4 }}
            >
              © {new Date().getFullYear()} Todos los derechos reservados.
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  )
}
