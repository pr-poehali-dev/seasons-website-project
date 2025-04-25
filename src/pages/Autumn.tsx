
import Layout from "@/components/Layout";
import SeasonHero from "@/components/SeasonHero";

const Autumn = () => {
  return (
    <Layout>
      <SeasonHero 
        title="Осень" 
        description="Время урожая, золотых красок и подготовки природы к зимнему отдыху."
        imageSrc="https://source.unsplash.com/random/1200x800/?autumn,fall"
        color="bg-orange-50"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Особенности осени</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2">🍂</span>
                <span>Изменение окраски листьев и листопад</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🍂</span>
                <span>Сбор урожая фруктов, овощей и грибов</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🍂</span>
                <span>Отлет перелетных птиц в теплые края</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🍂</span>
                <span>Подготовка животных к зиме</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🍂</span>
                <span>Праздники: День знаний, День учителя, Хэллоуин</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-4">Осенние явления</h2>
            <p className="mb-4">
              Осень — время года, когда природа готовится к зимнему сну. Температура воздуха 
              постепенно снижается, листья на деревьях меняют свою окраску на желтую, 
              оранжевую и красную, а затем опадают. Это происходит из-за уменьшения 
              количества хлорофилла в листьях.
            </p>
            <p>
              Осенью созревает большинство плодов и ягод, поэтому это время традиционно 
              связано со сбором урожая. Животные готовятся к зиме: делают запасы, утепляют 
              свои жилища, накапливают жировые отложения или мигрируют в более теплые 
              регионы. Для человека осень — это время возвращения к учебе, работе 
              после летних отпусков, а также наслаждения красотой преображенной природы.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Autumn;
