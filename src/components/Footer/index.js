import React from "react";

const Footer = () => {
  return (
    <footer className="bg-customPurple text-white p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">İletişim Bilgileri</h2>
            <p>Eti, Yükseliş Sk. No:5, 06570 Çankaya/Ankara</p>
            <p>Telefon: +905055050505</p>
            <p>Email: relic@info.com.tr</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Hakkımızda</h2>
            <p>
              Relic, müzik aletleri konusunda uzmanlaşmış bir e-ticaret
              platformudur.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Adres</h2>
            <p>Eti, Yükseliş Sk. No:5, 06570 Çankaya/Ankara</p>
            <div className="w-full h-48 bg-gray-600 rounded-lg overflow-hidden mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.445059996755!2d32.84406747598697!3d39.931433421521824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34efa2943c777%3A0x1c83699501e96360!2zR2F6acyHIMOcbmnMh3ZlcnNpzId0ZXNpzIcgTcO8aGVuZGlzbGlrIEZha8O8bHRlc2k!5e0!3m2!1str!2str!4v1705008155887!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2024 Relic. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;
