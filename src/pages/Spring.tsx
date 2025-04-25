
import Layout from "@/components/Layout";
import SeasonHero from "@/components/SeasonHero";

const Spring = () => {
  return (
    <Layout>
      <SeasonHero 
        title="Весна" 
        description="Пробуждение природы, цветение и возрождение жизни после зимнего сна."
        imageSrc="https://source.unsplash.com/random/1200x800/?spring,blossom"
        color="bg-green-50"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Особенности весны</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2">🌱</span>
                <span>Таяние снега и льда, паводки</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🌱</span>
                <span>Пробуждение растений и появление первых цветов</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🌱</span>
                <span>Возвращение перелетных птиц</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🌱</span>
                <span>Увеличение светового дня</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🌱</span>
                <span>Праздники: 8 Марта, Масленица, Пасха</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-4">Весенние явления</h2>
            <p className="mb-4">
              Весна — время пробуждения природы от зимнего сна. Повышение температуры воздуха 
              приводит к таянию снега и льда. Начинается сокодвижение в деревьях, 
              распускаются почки, появляются первые цветы — подснежники, крокусы, пролески.
            </p>
            <p>
              Весной из теплых краев возвращаются перелетные птицы, животные выходят из спячки.
              Это время обновления и возрождения, когда природа словно заново рождается после 
              долгого зимнего сна. Весенние дожди способствуют росту растений, а грозы очищают 
              воздух и наполняют его свежестью.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Spring;
