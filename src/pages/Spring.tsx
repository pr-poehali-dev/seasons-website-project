
import Layout from "@/components/Layout";
import SeasonHero from "@/components/SeasonHero";

const Spring = () => {
  return (
    <Layout>
      <SeasonHero
        title="Весна"
        description="Время возрождения, цветения и надежд. Природа пробуждается от зимнего сна, наполняясь яркими красками и звуками."
        imageSrc="https://source.unsplash.com/random/1200x800/?spring,blossom"
        color="bg-green-50"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Особенности весны</h2>
            <p className="mb-4">
              Весна — время пробуждения природы после зимнего сна. В северном полушарии
              весна длится с марта по май, а в южном — с сентября по ноябрь.
            </p>
            <p>
              В этот период тают снега, распускаются почки на деревьях,
              зацветают первые цветы, птицы возвращаются из тёплых краёв и начинают вить гнёзда.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://source.unsplash.com/random/800x600/?spring,flowers" 
              alt="Весенние цветы" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="bg-green-100 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-4">Весенние праздники</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4 shadow">
              <h3 className="text-xl font-semibold mb-2">8 Марта</h3>
              <p>Международный женский день, отмечаемый ежегодно как день солидарности женщин в борьбе за равенство.</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <h3 className="text-xl font-semibold mb-2">Пасха</h3>
              <p>Главный христианский праздник, отмечающий воскресение Иисуса Христа из мёртвых.</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow">
              <h3 className="text-xl font-semibold mb-2">День Победы</h3>
              <p>Праздник победы Советского Союза над нацистской Германией в Великой Отечественной войне, отмечаемый 9 мая.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">Весенние явления природы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img 
                src="https://source.unsplash.com/random/600x400/?spring,river" 
                alt="Ледоход" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Ледоход</h3>
                <p>Разрушение ледяного покрова реки и движение льдин под действием течения — одно из самых зрелищных весенних явлений.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img 
                src="https://source.unsplash.com/random/600x400/?thunderstorm" 
                alt="Грозы" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Грозы</h3>
                <p>Весной, с повышением температуры, часто происходят первые грозы, сопровождающиеся молниями и громом.</p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img 
                src="https://source.unsplash.com/random/600x400/?rainbow" 
                alt="Радуга" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Радуга</h3>
                <p>Весенние дожди часто сменяются солнцем, создавая идеальные условия для появления разноцветных радуг на небе.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Spring;
