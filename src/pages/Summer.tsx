
import Layout from "@/components/Layout";
import SeasonHero from "@/components/SeasonHero";

const Summer = () => {
  return (
    <Layout>
      <SeasonHero
        title="Лето"
        description="Время тепла, солнца и ярких впечатлений. Природа в своём расцвете дарит изобилие красок и богатый урожай."
        imageSrc="https://source.unsplash.com/random/1200x800/?summer,beach"
        color="bg-yellow-50"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Особенности лета</h2>
            <p className="mb-4">
              Лето — самое тёплое время года с длинными днями и короткими ночами. 
              В северном полушарии лето длится с июня по август, а в южном — с декабря по февраль.
            </p>
            <p>
              В это время природа находится в полном расцвете: деревья покрыты густой листвой, 
              цветут многие растения, созревают ягоды, фрукты и овощи.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://source.unsplash.com/random/800x600/?summer,meadow" 
              alt="Летний луг" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="bg-yellow-100 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-4">Летние праздники</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4 shadow">
              <h3 className="text-xl font-semibold mb-2">День Ивана Купалы</h3>
              <p>Древний славянский праздник летнего солнцестояния, отмечаемый в ночь с 6 на 7 июля.</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <h3 className="text-xl font-semibold mb-2">День России</h3>
              <p>Государственный праздник Российской Федерации, отмечаемый ежегодно 12 июня.</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <h3 className="text-xl font-semibold mb-2">День молодёжи</h3>
              <p>Национальный праздник молодых людей, отмечаемый 27 июня с концертами и фестивалями.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">Летние развлечения</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img 
                src="https://source.unsplash.com/random/600x400/?swimming" 
                alt="Купание" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Купание</h3>
                <p>Одно из самых популярных летних развлечений — купание в море, озёрах, реках или бассейнах.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img 
                src="https://source.unsplash.com/random/600x400/?hiking" 
                alt="Походы" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Походы</h3>
                <p>Лето — идеальное время для пеших прогулок, походов в горы и знакомства с природными достопримечательностями.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img 
                src="https://source.unsplash.com/random/600x400/?picnic" 
                alt="Пикники" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Пикники</h3>
                <p>Отдых на природе с едой, играми и общением — одно из самых приятных летних времяпрепровождений.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Summer;
