
interface SeasonHeroProps {
  title: string;
  description: string;
  imageSrc: string;
  color: string;
}

const SeasonHero = ({ title, description, imageSrc, color }: SeasonHeroProps) => {
  return (
    <div className={`py-16 ${color}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <p className="text-lg">{description}</p>
          </div>
          <div className="md:w-1/2">
            <img 
              src={imageSrc} 
              alt={title} 
              className="rounded-lg shadow-lg w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeasonHero;
