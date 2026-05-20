import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Ad, e-posta ve mesaj alanları zorunludur." },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL || "Lion Hotel <onboarding@resend.dev>";

    if (!process.env.RESEND_API_KEY || !to) {
      return NextResponse.json(
        { ok: false, error: "Mail servis ayarları eksik." },
        { status: 500 }
      );
    }

    const { error } = await resend.emails.send({
      from,
      to,
      subject: `Lion Hotel Yeni İletişim Formu - ${name}`,
      replyTo: email,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111">
          <h2>Yeni İletişim Formu</h2>
          <p><strong>Ad Soyad:</strong> ${name}</p>
          <p><strong>E-posta:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${phone || "-"}</p>
          <p><strong>Mesaj:</strong></p>
          <p>${message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json(
        { ok: false, error: "Mail gönderilemedi." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Beklenmeyen bir hata oluştu." },
      { status: 500 }
    );
  }
}