import Image from "next/image";

const whatsappMessage = encodeURIComponent(
  "Olá! Gostaria de solicitar um orçamento.",
);
const whatsappUrl = `https://wa.me/5519993927219?text=${whatsappMessage}`;

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Solicitar orçamento pelo WhatsApp"
      className="floating-whatsapp fixed bottom-5 right-4 z-[80] inline-flex h-14 w-14 items-center justify-center rounded-full transition-smooth hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25d366] focus:ring-offset-2 focus:ring-offset-background-clean sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <Image
        src="/icons/whatsapp.png"
        alt=""
        width={64}
        height={64}
        className="h-full w-full object-contain"
      />
    </a>
  );
}
