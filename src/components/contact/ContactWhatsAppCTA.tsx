import { WHATSAPP_LINK } from "@/components/contact/contact-data";

export default function ContactWhatsAppCTA() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Concierge Servisi"
      className="fixed bottom-6 right-6 z-[60] grid h-14 w-14 place-items-center rounded-full bg-[#FAF9F6]/90 border border-[#111111]/5 shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur-md transition-all duration-500 hover:scale-105 hover:bg-[#FAF9F6]"
      title="WhatsApp Concierge"
    >
      <svg viewBox="0 0 24 24" width="20" height="20" className="fill-[#111111] transition-transform duration-300 hover:rotate-12" aria-hidden="true">
        <path d="M12.04 2a9.9 9.9 0 0 0-8.5 15.1L2 22l4.98-1.5A9.96 9.96 0 1 0 12.04 2Zm0 1.8a8.16 8.16 0 0 1 6.97 12.46l-.22.35a8.16 8.16 0 0 1-11.2 2.13l-.3-.2-2.97.9.9-2.95-.2-.3A8.16 8.16 0 0 1 12.04 3.8Zm-3.2 4.3c-.15 0-.31.01-.45.06-.34.12-.85.4-.85 1.08 0 .63.43 1.48 1.22 2.46.72.88 2.18 2.34 4.65 3.24.65.23 1.16.36 1.58.36.71 0 1.17-.32 1.33-.94.16-.6.22-.93-.1-1.1-.27-.15-.61-.35-.95-.5-.27-.13-.59-.1-.8.17l-.2.26c-.2.27-.46.31-.73.2-.33-.13-1.24-.46-2.36-1.47-1.1-.95-1.48-1.7-1.64-2-.17-.28-.04-.54.16-.73l.23-.24c.2-.2.22-.5.12-.76-.13-.35-.58-1.12-.8-1.34-.2-.19-.44-.3-.73-.3Z" />
      </svg>
    </a>
  );
}