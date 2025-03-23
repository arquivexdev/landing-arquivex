import { useEffect } from "react";

export default function TypebotChat() {
  useEffect(() => {
    // Criar o script dinamicamente
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://cdn.jsdelivr.net/npm/@typebot.io/js@0.3.14/dist/web.js";

    script.onload = () => {
      if (window.Typebot) {
        window.Typebot.initBubble({
          typebot: "chat-arquivex-site",
          apiHost: "https://viewer.arquivex.com",
          theme: {
            button: { backgroundColor: "#033F73" },
            chatWindow: { backgroundColor: "#033F73" },
          },
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // O componente não precisa renderizar nada na tela
}