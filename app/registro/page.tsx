"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import Image from "next/image"
import { useRouter } from "next/navigation"
import gsap from "gsap"

export default function RegistroPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
  })

  const backgroundRef = useRef(null)
  const circle1Ref = useRef(null)
  const circle2Ref = useRef(null)
  const circle3Ref = useRef(null)
  const formRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    // Create background animations with GSAP
    const tl = gsap.timeline()

    // Animate the circles
    tl.fromTo(
      circle1Ref.current,
      { x: -100, y: -100, opacity: 0 },
      { x: 0, y: 0, opacity: 0.7, duration: 1.5, ease: "power3.out" },
    )
      .fromTo(
        circle2Ref.current,
        { x: 100, y: -100, opacity: 0 },
        { x: 0, y: 0, opacity: 0.5, duration: 1.5, ease: "power3.out" },
        "-=1.3",
      )
      .fromTo(
        circle3Ref.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 0.6, duration: 1.5, ease: "power3.out" },
        "-=1.3",
      )

    // Animate the image
    tl.fromTo(imageRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power2.out" }, "-=1")

    // Animate the form
    tl.fromTo(formRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power2.out" }, "-=0.8")

    // Create floating animation for background elements
    gsap.to([circle1Ref.current, circle2Ref.current, circle3Ref.current], {
      y: "random(-20, 20)",
      x: "random(-20, 20)",
      rotation: "random(-5, 5)",
      duration: "random(3, 6)",
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      stagger: 0.2,
    })

    // Subtle hover animation for the image
    gsap.to(imageRef.current, {
      y: -10,
      duration: 3,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    })

    return () => {
      // Clean up animations
      gsap.killTweensOf([circle1Ref.current, circle2Ref.current, circle3Ref.current, formRef.current, imageRef.current])
    }
  }, [])

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    // Validate form
    if (!formData.nombre || !formData.email) {
      return
    }

    // Store user data in localStorage to access it in the survey page
    localStorage.setItem("surveyUser", JSON.stringify(formData))

    // Navigate to the survey page
    router.push("/encuesta")
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Background elements */}
      <div ref={backgroundRef} className="absolute inset-0 z-0 overflow-hidden">
        <div
          ref={circle1Ref}
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-200 opacity-0 blur-3xl"
        />
        <div
          ref={circle2Ref}
          className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-indigo-200 opacity-0 blur-3xl"
        />
        <div
          ref={circle3Ref}
          className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-72 h-72 rounded-full bg-purple-200 opacity-0 blur-3xl"
        />
      </div>

      {/* Main content */}
      <div className="z-10 w-full max-w-5xl grid md:grid-cols-1 gap-8 items-center justify-center">
        {/* Form section */}
        <div ref={formRef} className="opacity-0 w-full max-w-md mx-auto">
          <Card className="backdrop-blur-sm bg-white/90 shadow-xl p-8">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl font-bold">Encuesta De Innovación 2025</CardTitle>
            </CardHeader>

            {/* Mobile image - only shown on small screens */}
            <div className="md:hidden px-6 pb-4">
              <div className="relative w-full h-[200px]">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Innovación empresarial"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre Completo</Label>
                  <Input
                    id="nombre"
                    name="nombre"
                    placeholder="Ingrese su nombre completo"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="bg-white/80"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Correo Electrónico Empresarial</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="correo@empresa.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/80"
                  />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full hover:cursor-pointer" size="lg" onClick={handleSubmit}>
                Continuar
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
