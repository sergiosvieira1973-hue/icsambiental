import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import { toast } from '@/hooks/use-toast';

interface ContactFormProps {
  compact?: boolean;
}

const ContactForm = ({ compact = false }: ContactFormProps) => {
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreed) {
      toast({ title: 'Atenção', description: 'Você precisa concordar com a Política de Privacidade.', variant: 'destructive' });
      return;
    }
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      toast({ title: 'Mensagem enviada!', description: 'Retornaremos em breve. Obrigado!' });
      setLoading(false);
      (e.target as HTMLFormElement).reset();
      setAgreed(false);
    }, 1000);
  };

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="c-name">Nome</Label>
            <Input id="c-name" name="name" required placeholder="Seu nome" />
          </div>
          <div>
            <Label htmlFor="c-company">Empresa</Label>
            <Input id="c-company" name="company" required placeholder="Nome da empresa" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="c-email">E-mail</Label>
            <Input id="c-email" name="email" type="email" required placeholder="email@empresa.com" />
          </div>
          <div>
            <Label htmlFor="c-phone">WhatsApp</Label>
            <Input id="c-phone" name="phone" placeholder="(00) 00000-0000" />
          </div>
        </div>
        <div>
          <Label htmlFor="c-message">Mensagem</Label>
          <Textarea id="c-message" name="message" rows={3} placeholder="Como podemos ajudar?" />
        </div>
        <div className="flex items-start gap-2">
          <Checkbox id="c-agree" checked={agreed} onCheckedChange={(v) => setAgreed(v === true)} />
          <Label htmlFor="c-agree" className="text-xs text-muted-foreground leading-tight">
            Li e concordo com a{' '}
            <Link to="/politica-de-privacidade" className="underline hover:text-primary">Política de Privacidade</Link>.
          </Label>
        </div>
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? 'Enviando...' : 'Enviar mensagem'}
        </Button>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="f-name">Nome *</Label>
          <Input id="f-name" name="name" required placeholder="Seu nome completo" />
        </div>
        <div>
          <Label htmlFor="f-company">Empresa *</Label>
          <Input id="f-company" name="company" required placeholder="Nome da empresa" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="f-email">E-mail *</Label>
          <Input id="f-email" name="email" type="email" required placeholder="email@empresa.com" />
        </div>
        <div>
          <Label htmlFor="f-phone">Telefone / WhatsApp</Label>
          <Input id="f-phone" name="phone" placeholder="(00) 00000-0000" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="f-city">Cidade / UF</Label>
          <Input id="f-city" name="city" placeholder="Ex: Rio de Janeiro / RJ" />
        </div>
        <div>
          <Label htmlFor="f-service">Serviço desejado</Label>
          <Input id="f-service" name="service" placeholder="Ex: PGRS, Licenciamento..." />
        </div>
      </div>
      <div>
        <Label htmlFor="f-message">Mensagem *</Label>
        <Textarea id="f-message" name="message" required rows={5} placeholder="Descreva brevemente sua necessidade..." />
      </div>
      <div className="flex items-start gap-2">
        <Checkbox id="f-agree" checked={agreed} onCheckedChange={(v) => setAgreed(v === true)} />
        <Label htmlFor="f-agree" className="text-sm text-muted-foreground leading-tight">
          Li e concordo com a{' '}
          <Link to="/politica-de-privacidade" className="underline hover:text-primary">Política de Privacidade</Link>.
        </Label>
      </div>
      <Button type="submit" disabled={loading} size="lg" className="w-full sm:w-auto">
        {loading ? 'Enviando...' : 'Enviar mensagem'}
      </Button>
    </form>
  );
};

export default ContactForm;
