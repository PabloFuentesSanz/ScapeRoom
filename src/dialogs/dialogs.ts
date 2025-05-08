import type { NarrationDialogs } from "../domain/Game";
import type { User } from "../domain/User";

export const narrationDialogs = (user?: User) => {
  return {
    intro: [
      "Inicializando sistema...",
      "Bienvenido a LUMON INDUSTRIES, Terminal División MDR.",
      `${user?.firstName || "Usuario"}, has sido seleccionado para un procedimiento de disociación temporal.`,
      "Esta evaluación determinará tu aptitud para ser transferido al departamento subrutinas.",
      "¿Estás preparado para comenzar? (Yes | No)",
    ],
    briefing: [
      "El procedimiento es simple. Deberás resolver una serie de desafíos para demostrar tu valía.",
      "Cada desafío pondrá a prueba diferentes habilidades cognitivas.",
      "Ten cuidado. Cualquier violación del protocolo será registrada en tu expediente permanente.",
      "Buena suerte. El tiempo corre.",
    ],
    failure: [
      "Has fallado en completar la evaluación.",
      "Tus datos han sido registrados en el sistema.",
      "Serás reasignado a refinamiento de datos.",
      "Por favor, espera instrucciones adicionales.",
    ],
    success: [
      "Felicitaciones. Has completado la evaluación satisfactoriamente.",
      "Tu perfil ha sido actualizado en la base de datos central.",
      "El departamento O&D está esperando tu transferencia.",
      "Prepárate para experimentar la verdadera naturaleza de nuestro trabajo.",
    ],
    ending: [
      "Conexión terminada.",
      "Gracias por tu participación.",
      "Que tengas un excelente día de severancia.",
    ],
  } as NarrationDialogs;
};
