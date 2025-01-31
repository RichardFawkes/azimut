import { useState } from 'react';
import { services } from '../data/services';
import { ServiceCard } from './ServiceCard';
import { ServiceModal } from './ServiceModal';

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const selectedServiceData = services.find(s => s.id === selectedService);

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Nossos Serviços
          </h2>
          <p className="text-gray-600 text-lg">
            Oferecemos soluções completas em captação aérea e produção audiovisual,
            com equipamentos de última geração e profissionais experientes.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onClick={() => setSelectedService(service.id)}
            />
          ))}
        </div>
      </div>

      {selectedServiceData && (
        <ServiceModal
          service={selectedServiceData}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
}