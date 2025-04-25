
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Index = () => {
  const seasons = [
    {
      name: "Зима",
      description: "Холодное время года, когда природа спит под белым покрывалом снега.",
      image: "https://source.unsplash.com/random/800x600/?winter",
      path: "/winter",
      color: "bg-blue-100"
    },
    {
      name: "Весна",
      description: "Пробуждение природы, цветение и возрождение жизни после зимнего сна.",
      image: "https://source.unsplash.com/random/800x600/?spring",
      path: "/spring",
      color: "bg-green-100"
    },
    {
      name: "Лето",
      description: "Теплое время года, полное ярких красок, солнца и активности.",
      image: "https://source.unsplash.com/random/800x600/?summer",
      path: "/summer",
      color: "bg-yellow-100"
    },
    {
      name: "Осень",
      description: "Время урожая, золотых красок и подготовки природы к зимнему отдыху.",
      image: "https://source.unsplash.com/random/800x600/?autumn",
      path: "/autumn",
      color: "bg-orange-100"
    }
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-b from-blue-50 to-green-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">Времена года</h1>
          <p className="text-lg text-center max-w-3xl mx-auto mb-12">
            Природа проходит через четыре разных сезона, каждый из которых имеет свои особенности, 
            красоту и значение в природном цикле. Познакомьтесь со всеми временами года и их удивительными особенностями.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {seasons.map((season) => (
              <Link to={season.path} key={season.name}>
                <Card className={`hover:shadow-lg transition-shadow ${season.color}`}>
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <img 
                      src={season.image} 
                      alt={season.name} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h2 className="text-2xl font-bold mb-2">{season.name}</h2>
                    <p className="text-gray-700">{season.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
