import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  MessageSquare,
  Send,
  Copy,
  Check,
  Globe,
} from 'lucide-react';

interface ContactCard {
  name: string;
  value: string;
  icon: React.ElementType;
  href: string;
  color: string;
  isExternal: boolean;
}

const contactCards: ContactCard[] = [
  {
    name: 'Phone',
    value: '(+40) 316678901',
    icon: Phone,
    href: 'tel:+40316678901',
    color: '#10B981',
    isExternal: false,
  },
  {
    name: 'Email',
    value: 'petru.constantin.try@outlook.com',
    icon: Mail,
    href: 'mailto:petru.constantin.try@outlook.com',
    color: '#EA4335',
    isExternal: false,
  },
  {
    name: 'GitHub',
    value: 'github.com/PetruCTech',
    icon: Github,
    href: 'https://github.com/PetruCTech',
    color: '#333',
    isExternal: true,
  },
  {
    name: 'LinkedIn',
    value: 'linkedin.com/in/petru-constantin-913945427',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/petru-constantin-913945427/',
    color: '#0A66C2',
    isExternal: true,
  },
  {
    name: 'Portfolio',
    value: 'petructech.github.io/portfolio',
    icon: Globe,
    href: 'https://petructech.github.io/portfolio/',
    color: '#0ea5e9',
    isExternal: true,
  },
];

const CONTACT_EMAIL = 'jackmitchel723@gmail.com';

const Contact: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleCopy = (value: string, name: string) => {
    navigator.clipboard.writeText(value);
    setCopiedField(name);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setStatusMessage('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio contact from ${formData.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.message || 'Failed to send message');
      }

      setStatus('success');
      setStatusMessage('Message sent successfully. I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
      setStatusMessage('Could not send your message. Please email me directly or try again.');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="min-h-full px-4 py-8 particle-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="inline-block px-4 py-1 rounded-full glass-card text-sm text-sky-600 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            Get In Touch
          </motion.span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div initial="hidden" animate="visible" variants={containerVariants}>
            <motion.h2
              className="text-xl font-bold mb-6 flex items-center gap-2"
              variants={itemVariants}
            >
              <MessageSquare className="w-5 h-5 text-sky-600" />
              Contact Information
            </motion.h2>

            <div className="grid grid-cols-1 gap-4">
              {contactCards.map((card) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.name}
                    className="glass-card p-4 md:p-5 group"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.02,
                      borderColor: card.color,
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <motion.div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${card.color}20` }}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                      >
                        <Icon className="w-6 h-6" style={{ color: card.color }} />
                      </motion.div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm text-muted-foreground mb-1">{card.name}</h3>
                        <p className="font-medium truncate">{card.value}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <motion.button
                          onClick={() => handleCopy(card.value, card.name)}
                          className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          title="Copy"
                        >
                          {copiedField === card.name ? (
                            <Check className="w-4 h-4 text-green-400" />
                          ) : (
                            <Copy className="w-4 h-4 text-muted-foreground" />
                          )}
                        </motion.button>

                        <motion.a
                          href={card.href}
                          target={card.isExternal ? '_blank' : undefined}
                          rel={card.isExternal ? 'noopener noreferrer' : undefined}
                          className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          title={card.isExternal ? 'Open' : 'Contact'}
                        >
                          <ExternalLink className="w-4 h-4 text-muted-foreground" />
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div className="glass-card p-5 mt-6" variants={itemVariants}>
              <div className="flex items-center gap-3">
                <motion.div
                  className="w-3 h-3 rounded-full bg-green-400"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <div>
                  <h3 className="font-medium">Open to opportunities</h3>
                  <p className="text-sm text-muted-foreground">
                    Typically responds within 24 hours · Bucharest, Romania
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={containerVariants}>
            <motion.h2
              className="text-xl font-bold mb-6 flex items-center gap-2"
              variants={itemVariants}
            >
              <Send className="w-5 h-5 text-sky-600" />
              Send a Message
            </motion.h2>

            <motion.form
              onSubmit={handleSubmit}
              className="glass-card p-5 md:p-6"
              variants={itemVariants}
            >
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl glass-card bg-transparent border border-transparent focus:border-sky-500/50 focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl glass-card bg-transparent border border-transparent focus:border-sky-500/50 focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project or collaboration idea..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl glass-card bg-transparent border border-transparent focus:border-sky-500/50 focus:outline-none transition-colors resize-none"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full glass-button flex items-center justify-center gap-2 py-3 disabled:opacity-60 disabled:cursor-not-allowed"
                  whileHover={status === 'sending' ? undefined : { scale: 1.02 }}
                  whileTap={status === 'sending' ? undefined : { scale: 0.98 }}
                >
                  <Send className="w-4 h-4" />
                  <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                </motion.button>

                {statusMessage && (
                  <p
                    className={`text-sm text-center ${
                      status === 'success' ? 'text-green-600' : 'text-red-500'
                    }`}
                    role="status"
                  >
                    {statusMessage}
                  </p>
                )}
              </div>
            </motion.form>

            <motion.div className="mt-6" variants={itemVariants}>
              <h3 className="text-sm font-medium text-muted-foreground mb-3">
                Or connect on social media
              </h3>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: 'https://github.com/PetruCTech', color: '#333' },
                  {
                    icon: Linkedin,
                    href: 'https://www.linkedin.com/in/petru-constantin-913945427/',
                    color: '#0A66C2',
                  },
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl glass-card flex items-center justify-center"
                      whileHover={{
                        scale: 1.1,
                        borderColor: social.color,
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
