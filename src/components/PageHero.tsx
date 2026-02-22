interface PageHeroProps {
  title: string;
  description?: string;
  image: string;
  children?: React.ReactNode;
}

const PageHero = ({ title, description, image, children }: PageHeroProps) => (
  <section className="relative overflow-hidden border-b border-border">
    <div className="absolute inset-0">
      <img src={image} alt="" className="w-full h-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-foreground/75" />
    </div>
    <div className="relative container mx-auto px-4 py-14 md:py-20">
      <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-3">{title}</h1>
      {description && <p className="text-primary-foreground/80 max-w-2xl">{description}</p>}
      {children}
    </div>
  </section>
);

export default PageHero;
