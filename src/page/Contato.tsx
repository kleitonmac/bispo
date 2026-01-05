import '../style/Contact.css'
import { IconMapPin, IconClockHour12 } from "@tabler/icons-react";



const Contact = () => {
  const whatsappNumber = '5527997695973' // ajuste para o número real

  return (
    <section className="contact">
      {/* HEADER */}
      <header className="contact-header">
        <h1>Fale Conosco</h1>
        <p>
          Entre em contato com o Bar do Bispo. Será um prazer atender você.
        </p>
      </header>

      <div className="contact-container">
        {/* FORMULÁRIO */}
        <form className="contact-form">
          <h2>Envie uma mensagem</h2>

          <label>
            Nome
            <input type="text" placeholder="Seu nome" required />
          </label>

          <label>
            WhatsApp
            <input type="tel" placeholder="(99) 99999-9999" required />
          </label>

          <label>
            Mensagem
            <textarea placeholder="Escreva sua mensagem" rows={4} required />
          </label>

          <button type="submit">Enviar mensagem</button>
        </form>

        {/* INFORMAÇÕES */}
        <aside className="contact-info">
          <h2>Contato direto</h2>

          <p>
            <IconMapPin className="contact-icon" /> <strong>Endereço:</strong><br />
            Rua Principal, 123 – Centro
          </p>

          <p>
            <IconClockHour12 className="contact-icon" /> <strong>Horário:</strong><br />
            Terça a Domingo – 18h às 02h
          </p>

          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-link"
          >
            Falar no WhatsApp
          </a>
        </aside>
      </div>
    </section>
  )
}

export default Contact
