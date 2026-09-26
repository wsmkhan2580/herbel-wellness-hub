import { Star, MessageSquareText } from 'lucide-react';
import Reveal from './Reveal.jsx';

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          size={17}
          className="text-[#c9963f]"
          fill={value <= rating ? 'currentColor' : 'none'}
        />
      ))}
    </div>
  );
}

const reviews = [
  {
    name: 'Rahul Sharma',
    city: 'Delhi',
    rating: 5,
    message:
      'Product use karne ka experience kaafi achha raha. Packaging proper thi aur overall service bhi smooth rahi. Team ne queries ka bhi properly response diya.',
  },
  {
    name: 'Amit Verma',
    city: 'Noida',
    rating: 5,
    message:
      'Overall experience genuine aur satisfactory raha. Product ki quality achhi lagi aur delivery bhi expected time par receive hui.',
  },
  {
    name: 'Vikas Kumar',
    city: 'Lucknow',
    rating: 4,
    message:
      'Mera overall experience positive raha. Ordering process simple tha aur support team se bhi easily contact ho gaya.',
  },
  {
    name: 'Mohit Singh',
    city: 'Jaipur',
    rating: 5,
    message:
      'Service ka experience achha raha. Product properly packed tha aur complete process simple aur convenient laga.',
  },
  {
    name: 'Arjun Mehta',
    city: 'Gurugram',
    rating: 5,
    message:
      'Website se order karna easy tha aur communication bhi clear raha. Overall buying experience smooth aur professional laga.',
  },
];

export default function BuyerFeedback() {
  return (
    <section id="testimonials" className="section-pad scroll-mt-24 bg-[#f6f1e2]">
      <div className="section-shell">
        <Reveal>
          <div className="max-w-3xl">
            <span className="eyebrow">Buyer Feedback</span>
            <h2 className="h2">What Buyers Say</h2>
            <p className="copy">
              Genuine product and service experiences shared by our buyers.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-10 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
            <div className="flex gap-5 w-max">
              {reviews.map((item, index) => (
                <article
                  key={index}
                  className="card w-[300px] shrink-0 snap-start bg-white p-6 sm:w-[350px] lg:w-[380px]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#f0e8d2] text-[#173f2f]">
                      <MessageSquareText size={20} />
                    </span>

                    <Stars rating={item.rating} />
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-700">
                    “{item.message}”
                  </p>

                  <div className="mt-5 border-t border-slate-100 pt-4">
                    <strong className="block text-sm font-bold text-[#173f2f]">
                      {item.name}
                    </strong>

                    <span className="mt-1 block text-xs text-slate-500">
                      {item.city}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-2 flex justify-center gap-2 text-xs text-slate-400 sm:hidden">
          <span>← Swipe to see more reviews →</span>
        </div>
      </div>
    </section>
  );
}
