'use client';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    type: 'Techo Sol y Sombra',
    district: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Crear el mensaje para WhatsApp con el número correcto
    const text = `Hola Comfort Studio, soy ${formData.name}. Me interesa un proyecto de *${formData.type}* en *${formData.district}*. ${formData.message}`;
    // Redirigir a WhatsApp
    window.open(`https://wa.me/51936230958?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacto" style={{ padding: '6rem 5%', backgroundColor: '#faf8f1', overflow: 'hidden' }}>
      <div className="container-safe" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>

        {/* COLUMNA IZQUIERDA: Información */}
        <div>
          <span style={{ color: '#b07357', fontWeight: 700, letterSpacing: '2px', fontSize: '0.85rem', textTransform: 'uppercase', display: 'block', marginBottom: '1rem' }}>
            EMPECEMOS
          </span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', lineHeight: 1.1, color: '#2c2c2c', marginBottom: '1.5rem', fontFamily: 'var(--font-montserrat)' }}>
            Hablemos de tu <br />
            <span style={{ color: '#b07357', fontFamily: 'var(--font-serif)', fontStyle: 'italic' }}>próximo espacio.</span>
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#555', marginBottom: '2.5rem', maxWidth: '450px' }}>
            ¿Listo para transformar tu terraza? Cuéntanos tu idea y recibe una asesoría inicial y un estimado de presupuesto.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem', color: '#2c2c2c', fontWeight: 600 }}>Horario de Atención</h4>
              <p style={{ color: '#555' }}>Lunes a Sábado: 9:00 am - 6:00 pm</p>
            </div>
            <div>
              <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem', color: '#2c2c2c', fontWeight: 600 }}>Contacto Directo</h4>
              <p>
                <a href="tel:+51936230958" style={{ color: '#555', textDecoration: 'none' }} className="hover:text-[#b07357] transition-colors">
                  +51 936 230 958
                </a>
              </p>
              <p style={{ marginTop: '5px' }}>
                <a href="mailto:contacto@comfortstudioperu.com" style={{ color: '#555', textDecoration: 'none', fontSize: '0.95rem' }} className="hover:text-[#b07357] transition-colors">
                  contacto@comfortstudioperu.com
                </a>
              </p>
              <p>
                <a href="mailto:info.comfortperu@gmail.com" style={{ color: '#555', textDecoration: 'none', fontSize: '0.95rem' }} className="hover:text-[#b07357] transition-colors">
                  info.comfortperu@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: Formulario */}
        <div style={{
          backgroundColor: '#ffffff',
          padding: '3rem',
          borderRadius: '4px',
          boxShadow: '0 20px 40px rgba(176, 115, 87, 0.1)'
        }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Campo Nombre */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="name" style={{ fontSize: '0.8rem', fontWeight: 600, color: '#2c2c2c', textTransform: 'uppercase' }}>Nombre Completo</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Ej. Juan Pérez"
                onChange={handleChange}
                style={{
                  padding: '1rem',
                  border: '1px solid #e0e0e0',
                  backgroundColor: '#faf8f1',
                  fontSize: '0.95rem',
                  outline: 'none',
                  transition: 'border-color 0.3s'
                }}
              />
            </div>

            {/* Campo Tipo de Proyecto */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="type" style={{ fontSize: '0.8rem', fontWeight: 600, color: '#2c2c2c', textTransform: 'uppercase' }}>Tipo de Proyecto</label>
              <select
                name="type"
                onChange={handleChange}
                style={{
                  padding: '1rem',
                  border: '1px solid #e0e0e0',
                  backgroundColor: '#faf8f1',
                  fontSize: '0.95rem',
                  outline: 'none'
                }}
              >
                <option value="Techo Sol y Sombra">Techo Sol y Sombra</option>
                <option value="Outdoor Kitchen / Parrilla">Outdoor Kitchen / Parrilla</option>
                <option value="Techo Bioclimático">Techo Bioclimático</option>
                <option value="Proyecto Integral (Terraza completa)">Proyecto Integral</option>
                <option value="Otro">Otro</option>
              </select>
            </div>

            {/* Campo Distrito */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="district" style={{ fontSize: '0.8rem', fontWeight: 600, color: '#2c2c2c', textTransform: 'uppercase' }}>Distrito</label>
              <input
                type="text"
                name="district"
                required
                placeholder="Ej. Miraflores, La Molina..."
                onChange={handleChange}
                style={{
                  padding: '1rem',
                  border: '1px solid #e0e0e0',
                  backgroundColor: '#faf8f1',
                  fontSize: '0.95rem',
                  outline: 'none'
                }}
              />
            </div>

            {/* Campo Mensaje */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="message" style={{ fontSize: '0.8rem', fontWeight: 600, color: '#2c2c2c', textTransform: 'uppercase' }}>Detalles adicionales</label>
              <textarea
                name="message"
                rows={4}
                placeholder="Cuéntanos brevemente qué tienes en mente..."
                onChange={handleChange}
                style={{
                  padding: '1rem',
                  border: '1px solid #e0e0e0',
                  backgroundColor: '#faf8f1',
                  fontSize: '0.95rem',
                  outline: 'none',
                  resize: 'none'
                }}
              ></textarea>
            </div>

            {/* Botón Enviar */}
            <button
              type="submit"
              className="btn-primary"
              style={{
                marginTop: '1rem',
                width: '100%',
                justifyContent: 'center',
                padding: '1.2rem'
              }}
            >
              ENVIAR A WHATSAPP →
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}