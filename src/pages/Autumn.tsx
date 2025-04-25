
import Layout from "@/components/Layout";
import SeasonHero from "@/components/SeasonHero";

const Autumn = () => {
  return (
    <Layout>
      <SeasonHero
        title="Осень"
        description="Время урожая, золотых красок и подготовки к зиме. Природа постепенно засыпает, украшая себя в яркие оттенки."
        imageSrc="https://source.unsplash.com/random/1200x800/?autumn,leaves"
        color="bg-orange-50"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Особенности осени</h2>
            <p className="mb-4">
              Осень — время года, когда природа готовится к зимнему покою. 
              В северном полушарии осень длится с сентября по ноябрь, а в южном — с марта по май.
            </p>
            <p>
              В этот период листья на деревьях меняют цвет и опадают, 
              птицы улетают в тёплые края, а животные готовятся к зимней спячке.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://source.unsplash.com/random/800x600/?autumn,forest" 
              alt="Осенний лес" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="bg-orange-100 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-4">Осенние праздники</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4 shadow">
              <h3 className="text-xl font-semibold mb-2">День знаний</h3>
              <p>Начало учебного года, отмечаемое 1 сентября с торжественными линейками и букетами цветов.</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <h3 className="text-xl font-semibold mb-2">День учителя</h3>
              <p>Профессиональный праздник работников сферы образования, отмечаемый 5 октября.</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <h3 className="text-xl font-semibold mb-2">Хэллоуин</h3>
              <p>Современный праздник, отмечаемый 31 октября, накануне Дня всех святых.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">Осенние занятия</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img 
                src="https://source.unsplash.com/random/600x400/?harvest" 
                alt="Сбор урожая" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Сбор урожая</h3>
                <p>Осень — традиционное время сбора урожая фруктов, овощей и грибов, заготовок на зиму.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img 
                src="https://source.unsplash.com/random/600x400/?autumn,walk" 
                alt="Прогулки" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Прогулки в парке</h3>
                <p>Осенние парки с золотыми листьями создают особую атмосферу и прекрасные условия для фотосессий.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img 
                src="https://source.unsplash.com/random/600x400/?reading,autumn" 
                alt="Чтение книг" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Чтение книг</h3>
                <p>С наступлением холодов многие предпочитают проводить время дома за чтением интересных книг с чашкой горячего чая.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Autumn;
