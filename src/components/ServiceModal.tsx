import { Service } from '../types';
import { X } from 'lucide-react';

type ServiceModalProps = {
  service: Service;
  onClose: () => void;
};

export function ServiceModal({ service, onClose }: ServiceModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div 
        className="bg-white text-black rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              {service.title}
            </h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-6 w-6 text-gray-500" />
            </button>
          </div>
          <img
            src={service.details.image}
            alt={service.title}
            className="w-full h-80 object-cover rounded-xl mb-8"
          />
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            {service.details.overview}
          </p>
          <h4 className="text-xl font-semibold mb-4 text-gray-900">Recursos e Benefícios</h4>
          <ul className="grid gap-3">
            {service.details.features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-700">
                <div className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-3" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}