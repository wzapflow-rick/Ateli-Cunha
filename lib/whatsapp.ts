// Número de WhatsApp do Ateliê Cunha (formato internacional, sem símbolos)
export const WHATSAPP_NUMBER = "5579991518380";

// Número formatado para exibição
export const WHATSAPP_DISPLAY = "(79) 99151-8380";

// Gera um link wa.me com mensagem pré-preenchida opcional
export function whatsappLink(
  message = "Olá! Vim pelo site e gostaria de saber mais sobre os produtos personalizados do Ateliê Cunha."
) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
