function sendWhatsAppMessage(event, phoneNumber) {
    // 1. Previene el envío del formulario para que no recargue la página
    event.preventDefault(); 

    // 2. Obtener los valores de los campos
    const name = document.getElementById('whatsapp-name').value;
    const email = document.getElementById('whatsapp-email').value;
    const phone = document.getElementById('whatsapp-phone').value;
    const news = document.getElementById('whatsapp-newsletter').checked;
    
    // 3. Construir el mensaje
    let message = `¡Hola ComputerBot! 👋\n`;
    message += `Quiero iniciar una conversación. Aquí están mis datos:\n\n`;
    message += `👤 Nombre: ${name}\n`;
    message += `📧 Email: ${email}\n`;
    message += `📞 Teléfono: ${phone}\n`;
    message += `📰 Noticias: ${news ? 'Acepto recibir noticias' : 'No deseo recibir noticias'}\n\n`;
    message += `Espero su respuesta.`;
    
    // 4. Codificar el mensaje para la URL (esto es crucial para que los espacios y saltos de línea funcionen)
    const encodedMessage = encodeURIComponent(message);

    // 5. Construir la URL de WhatsApp
    // Formato: https://wa.me/NUMERO?text=MENSAJE
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // 6. Redirigir al usuario al chat de WhatsApp
    window.open(whatsappUrl, '_blank');
}

// Opcional: Para cerrar el chat después de enviar
document.getElementById('whatsappForm').addEventListener('submit', function() {
    // Si tienes un checkbox para abrir/cerrar, lo desmarcamos para cerrar el chat
    document.getElementById('whatsapp-chat-toggler').checked = false;
});