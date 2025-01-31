import { Service } from '../types';

type ServiceCardProps = {
  service: Service;
  onClick: () => void;
};

export function ServiceCard({ service, onClick }: ServiceCardProps) {
  return (
    <div
      className="group relative p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">
        {service.icon}
        <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
        <p className="text-gray-600">{service.description}</p>
      </div>
    </div>
  );
}