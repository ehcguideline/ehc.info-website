import { useState } from "react"; import { motion } from "framer-motion"; import Image from "next/image";

export default function Home() { const [language, setLanguage] = useState("en");

const t = { en: { title: "Ethical Hacking Community Guideline", about: "We promote ethical hacking practices and cybersecurity awareness.", services: "Our Services", reviews: "Client Reviews", contact: "Contact Us" }, bn: { title: "এথিকাল হ্যাকিং কমিউনিটি গাইডলাইন", about: "আমরা নৈতিক হ্যাকিং চর্চা এবং সাইবার নিরাপত্তা সম্পর্কে সচেতনতা ছড়িয়ে দিই।", services: "আমাদের সেবা", reviews: "ক্লায়েন্ট রিভিউ", contact: "যোগাযোগ করুন" } };

return ( <main className="bg-black text-white min-h-screen font-mono"> <nav className="flex justify-between items-center p-4 border-b border-green-500"> <h1 className="text-xl text-green-400">{t[language].title}</h1> <button onClick={() => setLanguage(language === "en" ? "bn" : "en")} className="bg-green-600 px-3 py-1 rounded hover:bg-green-700" > {language === "en" ? "বাংলা" : "English"} </button> </nav>

<section className="p-6 text-center">
    <motion.h2 
      className="text-3xl mb-4 text-green-300"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {t[language].about}
    </motion.h2>
  </section>

  <section className="p-6 border-t border-b border-green-800">
    <h3 className="text-2xl text-green-400 mb-4">{t[language].services}</h3>
    <ul className="space-y-2 text-gray-300">
      <li>- Penetration Testing</li>
      <li>- Cybersecurity Awareness Training</li>
      <li>- Vulnerability Assessment</li>
    </ul>
  </section>

  <section className="p-6">
    <h3 className="text-2xl text-green-400 mb-4">{t[language].reviews}</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Images loaded from public/reviews/ folder */}
      {["1.jpg", "2.jpg", "3.jpg"].map((img, i) => (
        <Image
          key={i}
          src={`/reviews/${img}`}
          alt={`Review ${i + 1}`}
          width={400}
          height={300}
          className="rounded-lg border border-green-500"
        />
      ))}
    </div>
  </section>

  <section className="p-6 border-t border-green-800">
    <h3 className="text-2xl text-green-400 mb-4">{t[language].contact}</h3>
    <form className="flex flex-col space-y-3 max-w-md mx-auto">
      <input className="p-2 rounded bg-gray-900 border border-green-700" type="text" placeholder="Name" />
      <input className="p-2 rounded bg-gray-900 border border-green-700" type="email" placeholder="Email" />
      <textarea className="p-2 rounded bg-gray-900 border border-green-700" placeholder="Message"></textarea>
      <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded">Send</button>
    </form>
  </section>
</main>

); }
