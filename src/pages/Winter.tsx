
import Layout from "@/components/Layout";
import SeasonHero from "@/components/SeasonHero";

const Winter = () => {
  return (
    <Layout>
      <SeasonHero 
        title="Зима" 
        description="Холодное время года, когда природа отдыхает под снежным покрывалом."
        imageSrc="https://source.unsplash.com/random/1200x800/?winter,snow"
        color="bg-blue-50"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Особенности зимы</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2">❄️</span>
                <span>Короткий световой день и длинные ночи</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">❄️</span>
                <span>Низкие температуры и снегопады</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">❄️</span>
                <span>Замерзание водоемов и образование льда</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">❄️</span>
                <span>Впадение многих животных в спячку</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">❄️</span>
                <span>Праздники: Новый год, Рождество, Крещение</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-4">Зимние явления</h2>
            <p className="mb-4">
              Зима — это время года, когда природа находится в состоянии покоя. Деревья сбрасывают листву, 
              многие животные впадают в спячку или мигрируют в более теплые края. Земля покрывается 
              белым снежным одеялом, которое защищает почву и растения от сильных морозов.
            </p>
            <p>
              Несмотря на суровые условия, зима имеет свое неповторимое очарование: искрящийся на 
              солнце снег, морозные узоры на окнах, снежинки, каждая из которых уникальна по своей 
              структуре. Зимние виды спорта и развлечения: катание на лыжах, коньках, санках делают 
              это время года особенно интересным для активного отдыха.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Winter;
