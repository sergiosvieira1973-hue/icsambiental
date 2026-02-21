import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { EMAIL, PHONE_DISPLAY, WHATSAPP_URL } from '@/lib/constants';

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="font-heading text-lg font-bold mb-4">ICS SERVIÇOS ESPECIALIZADOS</h3>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Consultoria ambiental especializada em licenciamento, gestão de resíduos e compliance para empresas.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold mb-4 uppercase tracking-wider">Navegação</h4>
          <nav className="flex flex-col gap-2">
            {[
              { to: '/servicos', label: 'Serviços' },
              { to: '/quem-somos', label: 'Quem somos' },
              { to: '/parcerias', label: 'Parcerias' },
              { to: '/artigos', label: 'Artigos' },
              { to: '/contato', label: 'Contato' },
            ].map(link => (
              <Link key={link.to} to={link.to} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold mb-4 uppercase tracking-wider">Contato</h4>
          <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
              <Phone size={14} />
              {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
              <Mail size={14} />
              {EMAIL}
            </a>
            <span className="flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 shrink-0" />
              Rio de Janeiro, RJ — Brasil
            </span>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-sm font-semibold mb-4 uppercase tracking-wider">Legal</h4>
          <nav className="flex flex-col gap-2">
            <Link to="/politica-de-privacidade" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Política de Privacidade
            </Link>
            <Link to="/termos-de-uso" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Termos de Uso
            </Link>
          </nav>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-8 pt-8 text-center">
        <p className="text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} ICS Serviços Especializados. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
