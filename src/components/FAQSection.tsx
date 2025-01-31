import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Quais regiões vocês atendem?',
    answer: 'Atendemos em toda a região metropolitana e litoral, com disponibilidade para viagens conforme necessidade do projeto.'
  },
  {
    question: 'Qual o prazo de entrega das imagens?',
    answer: 'O prazo varia conforme o projeto, mas geralmente entregamos as imagens em até 5 dias úteis após a captação.'
  },
  {
    question: 'Vocês têm seguro para os equipamentos?',
    answer: 'Sim, todos os nossos equipamentos são segurados e operamos com todas as licenças necessárias da ANAC.'
  },
  {
    question: 'Como funciona o processo de orçamento?',
    answer: 'Após o contato inicial, agendamos uma reunião para entender suas necessidades e apresentamos uma proposta detalhada em até 24 horas.'
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-400 text-lg">
            Tire suas dúvidas sobre nossos serviços
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 bg-gray-800/50 rounded-xl overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-400">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}