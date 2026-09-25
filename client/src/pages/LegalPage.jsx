import { Link } from 'react-router-dom';
import BrandMark from '../components/BrandMark.jsx';

const content = {
  privacy: {
    title: 'Privacy Policy',
    body: [
      'जब आप lead form submit करते हैं, तो Herbal Wellness Hub Full Name, City, selected wellness concern और user द्वारा लिखी गई problem description collect करता है।',
      'Submitted information configured database में store होती है और protected admin area के through authorized access के लिए available रहती है।',
      'यह information आपकी enquiry manage करने, relevant communication करने और service process को support करने के लिए use की जा सकती है। Sensitive medical records, payment-card details या unnecessary personal data इस form में नहीं मांगा जाता।'
    ]
  },
  terms: {
    title: 'Terms & Conditions',
    body: [
      'यह website male sexual wellness information और product enquiry के लिए बनाई गई है। Website use करते समय दी गई information accurate और current रखने की जिम्मेदारी user की है।',
      'Website पर दी गई health information general awareness के लिए है और इसे diagnosis, prescription या guaranteed medical result नहीं माना जाना चाहिए।',
      'Regular price ₹3999/- और special price ₹1299/- दिखाया गया है। Cash on Delivery availability location और serviceability confirmation पर depend कर सकती है। Product usage के लिए actual pack label और relevant professional advice को follow करें।'
    ]
  },
  disclaimer: {
    title: 'Disclaimer',
    body: [
      'Sexual-health concerns के physical, psychological, medication-related और relationship-related कारण हो सकते हैं। हर व्यक्ति का experience अलग हो सकता है।',
      'यह website cure, fixed timing result, permanent recovery या guaranteed body-size change का दावा नहीं करती।',
      'अगर symptoms लगातार रहें, worsen हों, pain हो या किसी existing health condition/medicine के साथ concern हो, तो appropriately qualified healthcare professional से consult करें।'
    ]
  }
};

export default function LegalPage({ type }) {
  const item = content[type];
  return (
    <div className="min-h-screen bg-[#f7f9f4]">
      <header className="border-b border-emerald-950/10 bg-white">
        <div className="section-shell flex h-20 items-center justify-between"><BrandMark /><Link to="/" className="btn-secondary">Back to Home</Link></div>
      </header>
      <main className="section-shell py-16 sm:py-20">
        <article className="card mx-auto max-w-3xl p-7 sm:p-10">
          <span className="eyebrow">Herbal Wellness Hub</span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-[#173f2f]">{item.title}</h1>
          <div className="mt-7 space-y-5 text-base leading-7 text-slate-600">
            {item.body.map((p) => <p key={p}>{p}</p>)}
          </div>
        </article>
      </main>
    </div>
  );
}
