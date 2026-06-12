import { Reveal } from '@/components/Reveal';
import { FAQS } from '../_constants';
import { FaqItem } from './FaqItem';

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export function Faq() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-28 sm:py-32">
      <Reveal>
        <h2 className="mb-10 text-center text-2xl font-extrabold sm:text-3xl">자주 묻는 질문</h2>
      </Reveal>
      <Reveal delay={80}>
        <div className="border-t border-gray-200">
          {FAQS.map(({ q, a }) => (
            <FaqItem key={q} q={q} a={a} />
          ))}
        </div>
      </Reveal>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
}
