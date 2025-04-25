
import Layout from "@/components/Layout";
import SeasonHero from "@/components/SeasonHero";

const Summer = () => {
  return (
    <Layout>
      <SeasonHero 
        title="Лето" 
        description="Теплое время года, полное ярких красок, солнца и активности."
        imageSrc="https://source.unsplash.com/random/1200x800/?summer,beach"
        color="bg-yellow-50"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Особенности лета</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2">☀️</span>
                <span>Длинный световой день и короткие ночи</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☀️</span>
                <span>Высокие температуры воздуха и воды</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☀️</span>
                <span>Пышная зелень и цветение многих растений</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☀️</span>
                <span>Грозы и ливневые дожди</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">☀️</span>
                <span>Праздники: Иван Купала, Троица, День России</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-4">Летние явления</h2>
            <p className="mb-4">
              Лето — самое теплое время года, когда природа находится в расцвете сил. 
              Все растения покрыты густой листвой, цветут цветы, созревают ягоды и фрукты. 
              Благодаря высоким температурам воздуха и обильным осадкам, происходит интенсивный 
              рост растений.
            </p>
            <p>
              Летом жизнь природы наиболее активна. Насекомые опыляют растения, птицы выводят 
              потомство, животные выращивают детенышей. Для человека лето — это время отпусков, 
              пляжного отдыха, походов и путешествий. Это сезон, когда можно наслаждаться 
              купанием в реках и озерах, собирать грибы и ягоды, заниматься садоводством.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Summer;
