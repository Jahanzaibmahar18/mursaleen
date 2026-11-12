
const phoneNumber = "923282017045";

export const whatsappUrl = `https://wa.me/${phoneNumber}`;

export function WhatsAppIcon({ className = "h-7 w-7" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className={className}
      fill="none"
    >
      <path
        d="M16 3.5a12.4 12.4 0 0 0-10.6 18.8L4 28l6.1-1.6A12.4 12.4 0 1 0 16 3.5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
      <path
        d="M11.5 9.8c-.3 0-.7.1-1 .5-.4.4-1.4 1.3-1.4 3.2s1.4 3.7 1.6 4c.2.3 2.8 4.4 6.8 6 3.4 1.3 4.1 1 4.8.9.7-.1 2.3-.9 2.7-1.9.3-.9.3-1.7.2-1.9-.1-.2-.4-.3-.8-.5l-2.6-1.3c-.4-.2-.7-.2-1 .2-.3.4-1 1.3-1.3 1.5-.2.3-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.6.1-.3 0-.5 0-.7l-1.1-2.7c-.3-.7-.6-.7-.9-.7h-.9Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Whatsapp() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#00c853] text-white shadow-[0_8px_28px_rgba(0,200,83,0.42)] transition duration-300 hover:scale-105 hover:bg-[#00b84a] hover:shadow-[0_10px_34px_rgba(0,200,83,0.52)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00c853] active:scale-95 sm:bottom-7 sm:right-7"
    >
      <WhatsAppIcon className="h-8 w-8" />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-white px-3 py-2 text-xs font-semibold text-slate-800 opacity-0 shadow-lg transition duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
      >
        Chat on WhatsApp
      </span>
    </a>
  );
}
