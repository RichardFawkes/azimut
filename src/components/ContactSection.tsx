import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin,
  MessageSquare,
  Send,
  CheckCircle
} from 'lucide-react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Telefone',
    value: '+55 (11) 98765-4321',
    href: 'tel:+5511987654321'
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp',
    value: '+55 (11) 98765-4321',
    href: 'https://wa.me/5511987654321'
  },
  {
    icon: Mail,
    title: 'E-mail',
    value: 'contato@azimutvision.com.br',
    href: 'mailto:contato@azimutvision.com.br'
  },
  {
    icon: MapPin,
    title: 'Localização',
    value: 'São Paulo, SP - Brasil',
    href: '#'
  }
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 relative" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Entre em <span className="text-blue-400">Contato</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Solicite um orçamento personalizado para seu projeto
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Fale Conosco
            </h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-colors group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{info.title}</h4>
                      <p className="text-gray-400">{info.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            {submitted ? (
              <motion.div
                className="bg-green-500/10 border border-green-500/30 rounded-xl p-8 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Mensagem Enviada!</h3>
                <p className="text-gray-300">
                  Obrigado pelo seu interesse. Nossa equipe entrará em contato em breve.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Telefone/WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors"
                      placeholder="(11) 98765-4321"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Serviço
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:border-blue-400 focus:outline-none transition-colors"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="eventos">Eventos e Casamentos</option>
                      <option value="industrial">Inspeção Industrial</option>
                      <option value="arquitetura">Arquitetura e Construção</option>
                      <option value="corporativo">Vídeos Corporativos</option>
                      <option value="turismo">Turismo e Paisagens</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors resize-none"
                    placeholder="Descreva seu projeto..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold text-white hover:scale-105 transition-transform disabled:opacity-50 disabled:scale-100"
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                >
                  <span className="flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Enviar Mensagem
                      </>
                    )}
                  </span>
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}