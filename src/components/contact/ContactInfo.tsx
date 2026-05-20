"use client";

import React, { useState } from "react";
import Reveal from "@/components/shared/Reveal";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type SubmitStatus = "idle" | "success" | "error";

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactInfo() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("idle");

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      message: formData.message.trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus("error");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setFormData(initialFormData);
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateField =
    (field: keyof FormData) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((current) => ({ ...current, [field]: event.target.value }));
      if (status !== "idle") setStatus("idle");
    };

  const statusMessage =
    status === "success"
      ? "Mesajınız başarıyla gönderildi."
      : status === "error"
        ? "Mesaj gönderilemedi. Lütfen tekrar deneyin."
        : "";

  const statusClass =
    status === "success"
      ? "text-[#2F6B4F]"
      : status === "error"
        ? "text-[#6E1B1F]"
        : "";

  const submitDisabled = isSubmitting;

  const buttonLabel = isSubmitting ? "Gönderiliyor..." : "MESAJI GÖNDER";

  return (
    <Reveal as="section" className="bg-[#FAF9F6] text-[#111111] py-24 md:py-32">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16 grid gap-16 md:grid-cols-[2fr_3fr] items-start">
        
        <div className="space-y-12">
          <div>
            <p className="text-[10px] font-medium tracking-[0.2em] text-[#6E6A63] uppercase mb-2">
              KANALLARIMIZ
            </p>
            <h2
              className="text-[32px] font-light tracking-tight text-[#111111] sm:text-[42px]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Hızlı Erişim Bilgileri
            </h2>
          </div>

          <address className="space-y-6 not-italic text-sm font-light text-[#6E6A63]">
            <div className="border-l border-[#7A1E1E] pl-4">
              <span className="block text-[10px] font-medium tracking-widest text-[#111111] uppercase mb-1">
                Doğrudan Hat
              </span>
              <a className="text-base text-[#111111] transition-colors hover:text-[#7A1E1E]" href="tel:+905319713134">
                +90 (531) 971 31 34
              </a>
            </div>

            <div className="border-l border-[#7A1E1E] pl-4">
              <span className="block text-[10px] font-medium tracking-widest text-[#111111] uppercase mb-1">
                E-Posta Adresi
              </span>
              <a className="text-base text-[#111111] transition-colors hover:text-[#7A1E1E]" href="mailto:lionhotelcinarcik@gmail.com">
                lionhotelcinarcik@gmail.com
              </a>
            </div>

            <div className="border-l border-[#7A1E1E] pl-4">
              <span className="block text-[10px] font-medium tracking-widest text-[#111111] uppercase mb-1">
                Lokasyon / Rezidans
              </span>
              <p className="text-base text-[#111111] leading-relaxed">
                Harmanlar Mahallesi, Vali Akı Caddesi No:20
                <span className="block text-sm text-[#6E6A63] mt-0.5">Çınarcık / Yalova</span>
              </p>
            </div>
          </address>
        </div>

        {/* Sağ Kolon: Editoryal Minimal İletişim Formu */}
        <div className="bg-[#F7F5F0] p-8 md:p-12 rounded-sm border border-[#111111]/5">
          <p className="text-[10px] font-medium tracking-[0.2em] text-[#6E6A63] uppercase mb-3">
            DİJİTAL RESEPSİYON
          </p>
          <h3 className="text-xl font-light text-[#111111] mb-8" style={{ fontFamily: "var(--font-playfair)" }}>
            Talep ve Mesaj Formu
          </h3>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="relative">
              <input
                type="text"
                name="name"
                required
                placeholder="Adınız Soyadınız"
                className="w-full bg-transparent border-b border-[#111111]/15 py-2 text-sm font-light text-[#111111] focus:border-[#7A1E1E] focus:outline-none placeholder-[#6E6A63]/50 transition-colors"
                value={formData.name}
                onChange={updateField("name")}
                disabled={isSubmitting}
              />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                required
                placeholder="E-Posta Adresiniz"
                className="w-full bg-transparent border-b border-[#111111]/15 py-2 text-sm font-light text-[#111111] focus:border-[#7A1E1E] focus:outline-none placeholder-[#6E6A63]/50 transition-colors"
                value={formData.email}
                onChange={updateField("email")}
                disabled={isSubmitting}
              />
            </div>

            <div className="relative">
              <input
                type="tel"
                name="phone"
                placeholder="Telefon Numaranız"
                className="w-full bg-transparent border-b border-[#111111]/15 py-2 text-sm font-light text-[#111111] focus:border-[#7A1E1E] focus:outline-none placeholder-[#6E6A63]/50 transition-colors"
                value={formData.phone}
                onChange={updateField("phone")}
                disabled={isSubmitting}
              />
            </div>

            <div className="relative">
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Mesajınız veya Rezervasyon Detaylarınız..."
                className="w-full bg-transparent border-b border-[#111111]/15 py-2 text-sm font-light text-[#111111] focus:border-[#7A1E1E] focus:outline-none placeholder-[#6E6A63]/50 transition-colors resize-none"
                value={formData.message}
                onChange={updateField("message")}
                disabled={isSubmitting}
              />
            </div>

            {statusMessage ? (
              <p className={`text-sm font-light tracking-wide ${statusClass}`} aria-live="polite">
                {statusMessage}
              </p>
            ) : null}

            <div className="pt-4">
              <button
                type="submit"
                disabled={submitDisabled}
                className="w-full h-12 inline-flex items-center justify-center rounded-full bg-[#111111] text-[#FAF9F6] text-[11px] font-medium tracking-[0.20em] transition-all duration-300 hover:bg-[#7A1E1E] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {buttonLabel}
              </button>
            </div>
          </form>
        </div>

      </div>
    </Reveal>
  );
}
