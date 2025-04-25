
import Layout from "@/components/Layout";
import SeasonHero from "@/components/SeasonHero";

const Winter = () => {
  return (
    <Layout>
      <SeasonHero
        title="Зима"
        description="Время снега, льда и волшебной атмосферы праздников. Природа погружается в сон под белым покрывалом."
        imageSrc="https://source.unsplash.com/random/1200x800/?winter,snow"
        color="bg-blue-50"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Особенности зимы</h2>
            <p className="mb-4">
              Зима — самое холодное время года, характеризующееся короткими днями и долгими ночами. 
              В северном полушарии зима длится с декабря по февраль, а в южном — с июня по август.
            </p>
            <p>
              В это время года природа замирает: деревья сбрасывают листву, 
              многие животные впадают в спячку, а земля покрывается снежным покровом.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://source.unsplash.com/random/800x600/?winter,forest" 
              alt="Зимний лес" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="bg-blue-100 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-4">Зимние праздники</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4 shadow">
              <h3 className="text-xl font-semibold mb-2">Новый Год</h3>
              <p>Главный зимний праздник, отмечаемый во всем мире 31 декабря и 1 января.</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <h3 className="text-xl font-semibold mb-2">Рождество</h3>
              <p>Один из важнейших христианских праздников, отмечаемый 25 декабря и 7 января.</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <h3 className="text-xl font-semibold mb-2">Масленица</h3>
              <p>Древний славянский праздник проводов зимы и встречи весны с блинами и гуляниями.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">Зимние виды активности</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img 
                src="https://source.unsplash.com/random/600x400/?skiing" 
                alt="Лыжный спорт" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Лыжный спорт</h3>
                <p>Популярный зимний вид активности, который включает в себя как спортивные дисциплины, так и отдых.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img 
                src="https://source.unsplash.com/random/600x400/?ice-skating" 
                alt="Катание на коньках" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Катание на коньках</h3>
                <p>Одно из самых популярных зимних развлечений, доступное как на открытых катках, так и в крытых помещениях.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img 
                src="https://source.unsplash.com/random/600x400/?snowman" 
                alt="Лепка снеговика" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Лепка снеговика</h3>
                <p>Веселое зимнее занятие для всей семьи, которое дарит радость и оставляет приятные воспоминания.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Winter;
