
interface SeasonHeroProps {
  title: string;
  description: string;
  imageSrc: string;
  color: string;
}

const SeasonHero = ({ title, description, imageSrc, color }: SeasonHeroProps) => {
  return (
    <div className={`${color} py-24`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-1/2">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">{title}</h1>
            <p className="text-xl opacity-90 max-w-2xl">{description}</p>
          </div>
          <div className="lg:w-1/2">
            <img 
              src={imageSrc} 
              alt={title} 
              className="rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 w-full h-[300px] md:h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeasonHero;
