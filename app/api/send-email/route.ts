import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface EmailPayload {
  userName: string;
  userEmail: string;
  totalScore: number;
  maxScore: number;
  percentage: number;
  answers: Record<string, string>;
}

export async function POST(request: Request) {
  try {
    const { userName, userEmail, totalScore, maxScore, percentage, answers } =
      (await request.json()) as EmailPayload;

    // Log de los answers para verificación (elimina si no es necesario)
    console.log("Respuestas recibidas:", answers);

    const emailData = await resend.emails.send({
      from: "no-reply@investigacioninnovacion.com",
      to: [
        "oscarrojasmorillo@gmail.com",
        "jsandoval@industriaguate.com",
        "isamayoa@industriaguate.com",
      ],
      subject: `Resultados encuesta de ${userName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2563eb;">Resultados de Encuesta de Innovación</h1>
          <p>Se ha completado una nueva encuesta con los siguientes resultados:</p>
          
          <div style="background: #f3f4f6; padding: 16px; border-radius: 8px; margin: 16px 0;">
            <h2 style="color: #1e40af;">Información del Participante</h2>
            <p><strong>Nombre:</strong> ${userName}</p>
            <p><strong>Email:</strong> ${userEmail}</p>
          </div>
          
          <div style="background: #f0fdf4; padding: 16px; border-radius: 8px; margin: 16px 0;">
            <h2 style="color: #166534;">Resultados</h2>
            <p><strong>Puntaje obtenido:</strong> ${totalScore} / ${maxScore}</p>
            <p><strong>Porcentaje:</strong> ${percentage}%</p>
          </div>
          
          <div style="margin-top: 24px;">
            <h2 style="color: #7c3aed;">Detalle de respuestas</h2>
            ${Object.entries(answers)
              .map(
                ([questionId, answer]) => `
              <div style="margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px solid #e5e7eb;">
                <p style="margin: 0 0 4px 0; font-weight: 500;">Número de pregunta: ${questionId}</p>
                <p style="margin: 0; color: #4b5563;">Respuesta: ${answer}</p>
              </div>
            `
              )
              .join("")}
          </div>
          
          <div style="margin-top: 24px; font-size: 14px; color: #6b7280;">
            <p>Este email fue generado automáticamente. No responder.</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data: emailData });
  } catch (err) {
    const error = err as Error;
    console.error("Error al enviar resultados:", error.message);
    return NextResponse.json(
      { error: "Error al enviar resultados", details: error.message },
      { status: 500 }
    );
  }
}
