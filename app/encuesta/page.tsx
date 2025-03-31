"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Mail, Phone, ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import gsap from "gsap";
import { questions } from "@/lib/questions";
import { useRouter } from "next/navigation";

export default function EncuestaPage() {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [totalScore, setTotalScore] = useState<number>(0);
  const [userName, setUserName] = useState<string>("");
  const [completed, setCompleted] = useState<boolean>(false);

  const questionCardRef = useRef<HTMLDivElement>(null);
  const MAX_SCORE = questions.length * 5;
  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;
  const finalPercentage = Math.round((totalScore / MAX_SCORE) * 100);

  useEffect(() => {
    const userData = localStorage.getItem("surveyUser");
    if (userData) {
      const { nombre } = JSON.parse(userData);
      setUserName(nombre);
    }

    if (questionCardRef.current) {
      gsap.fromTo(
        questionCardRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    }

    return () => {
      if (questionCardRef.current) gsap.killTweensOf(questionCardRef.current);
    };
  }, [currentQuestionIndex]);

  const handleAnswerChange = (value: string) => {
    const currentQuestionId = questions[currentQuestionIndex].id;
    const previousAnswer = answers[currentQuestionId];

    const selectedOption = questions[currentQuestionIndex].options.find(
      (option) => option.value === value
    );
    const selectedScore = selectedOption ? selectedOption.score : 0;

    if (previousAnswer !== undefined) {
      const previousOption = questions[currentQuestionIndex].options.find(
        (option) => option.value === previousAnswer
      );
      const previousScore = previousOption ? previousOption.score : 0;
      setTotalScore((prevScore) => prevScore - previousScore);
    }

    setAnswers({
      ...answers,
      [currentQuestionId]: value,
    });
    setTotalScore((prevScore) => prevScore + selectedScore);
  };

  const handleNext = () => {
    if (currentQuestionIndex >= questions.length - 1) {
      handleSubmit();
      return;
    }

    gsap.to(questionCardRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      },
    });
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      gsap.to(questionCardRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setCurrentQuestionIndex(currentQuestionIndex - 1);
        },
      });
    }
  };

  const handleSubmit = async () => {
    // Obtener datos del usuario desde localStorage
    const userData = JSON.parse(localStorage.getItem("surveyUser") || "{}");
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userName: userData.nombre,
          userEmail: userData.email,
          totalScore,
          maxScore: MAX_SCORE,
          percentage: finalPercentage,
          answers
        })
      });
  
      if (!response.ok) throw new Error('Error al enviar resultados');
      
      const result = await response.json();
      console.log('Email enviado:', result);
      
      // Mostrar confirmación
      alert('¡Encuesta completada! Los resultados han sido enviados.');
      
      setCompleted(true);
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al enviar los resultados. Por favor intente nuevamente.');
    }
  };

  if (completed) {
    return (
      <div className="min-h-screen flex flex-col bg-slate-50">
        <main className="flex-grow flex items-center justify-center py-8 px-4 md:px-6">
          <Card className="shadow-md text-center py-12 px-6 max-w-md w-full">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">¡Encuesta Completada!</h2>
            <p className="text-muted-foreground mb-6">
              Gracias por participar en nuestra encuesta. Tus respuestas han sido registradas.
            </p>
            <Button 
              onClick={() => router.push('/')}
              className="mx-auto"
            >
              Volver al inicio
            </Button>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <header className="bg-white shadow-sm py-4 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2">
            Encuesta De Innovación 2025
          </h2>
          <div className="w-full">
            <div className="flex justify-between text-sm text-muted-foreground mb-1">
              <span>
                Pregunta {currentQuestionIndex + 1} de {questions.length}
              </span>
              <span>{Math.round(progressPercentage)}% completado</span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
          </div>
        </div>
      </header>

      <main className="flex-grow py-8 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <Card ref={questionCardRef} className="shadow-md">
            <CardContent className="pt-6">
              {userName && (
                <p className="text-muted-foreground mb-4">
                  Hola {userName}, por favor responda la siguiente pregunta:
                </p>
              )}

              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-6">
                  {questions[currentQuestionIndex].text}
                </h2>

                <RadioGroup
                  value={answers[questions[currentQuestionIndex].id] || ""}
                  onValueChange={handleAnswerChange}
                  className="space-y-3"
                >
                  {questions[currentQuestionIndex].options.map((option) => (
                    <div
                      key={option.value}
                      className={`flex items-start rounded-lg border p-4 transition-colors cursor-pointer ${
                        answers[questions[currentQuestionIndex].id] === option.value
                          ? "bg-primary/5 border-primary"
                          : "hover:bg-accent/50"
                      }`}
                      onClick={() => handleAnswerChange(option.value)}
                    >
                      <div className="flex items-center h-5 mt-0.5 mr-3">
                        <RadioGroupItem
                          value={option.value}
                          id={`option-${option.value}`}
                          className="cursor-pointer"
                        />
                      </div>
                      <Label
                        htmlFor={`option-${option.value}`}
                        className="flex-grow cursor-pointer"
                      >
                        <div className="flex justify-between items-center w-full">
                          <span>{option.label}</span>
                          <span className="text-sm font-medium text-muted-foreground ml-2">
                            ({option.score} pts)
                          </span>
                        </div>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="flex justify-between pt-4">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Anterior
                </Button>

                <Button
                  onClick={
                    currentQuestionIndex === questions.length - 1
                      ? handleSubmit
                      : handleNext
                  }
                  disabled={!answers[questions[currentQuestionIndex].id]}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  {currentQuestionIndex === questions.length - 1 ? (
                    <>
                      Finalizar
                      <CheckCircle className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Siguiente
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="bg-slate-900 text-white py-6 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* <div className="flex items-center mb-4 md:mb-0">
              <div className="w-32 h-12 bg-slate-800 flex items-center justify-center rounded mr-4">
                <span className="font-bold">LOGO</span>
              </div>
            </div> */}

            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>(+502) 3289-3042</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>oscarrojasmorillo@gmail.com</span>
              </div>
            </div>

            <div className="text-sm text-slate-400 mt-4 md:mt-0">
              © {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}