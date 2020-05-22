const Projects = () => (
  <div className="my-12">
    <h2 className="text-2xl mb-8">
      <span className="w-2 h-1 bg-green-400 inline-block mr-1"></span>
      Side Projects
    </h2>

    <div className="grid md:grid-cols-2 row-gap-10 grid-cols-1 gap-6">
      <div>
        <h3 className="text-xl mb-2">📰 7Reads</h3>
        <p className="mb-1">7Reads is a minimal mindful reading list for Google Chrome.</p>
        <a href="https://7reads.now.sh/" title="7Reads" target="_blank" className="underline">Check project</a>
      </div>
      <div>
        <h3 className="text-xl mb-2">🧡 Skuap.com</h3>
        <p className="mb-1">Skuap is a platform designed for leaders to create high performing teams.</p>
        <a href="https://skuap.com" title="Skuap" target="_blank" className="underline">Check project</a>
      </div>
      <div>
        <h3 className="text-xl mb-2">💎 SheetAPI.co</h3>
        <p className="mb-1">SheetAPI allows to transform Google Sheet's into RESTful API's.</p>
        <a href="https://sheetapi.co" title="SheetAPI" target="_blank" className="underline">Check project</a>
      </div>
      <div>
        <h3 className="text-xl mb-2">📊 Updatefy.co</h3>
        <p className="mb-1">Updatefy is no-code platform to embed Google Sheet's into any webpage.</p>
        <a href="https://updatefy.co" title="Updatefy" target="_blank" className="underline">Check project</a>
      </div>
      <div>
        <h3 className="text-xl mb-2">🤑 CurrencyMenu.com</h3>
        <p className="mb-1">Discover exchange rates directly from your menu bar.</p>
        <a href="https://currencymenu.com" title="CurrencyMenu" target="_blank" className="underline">Check project</a>
      </div>
    </div>
  </div>
);

export default Projects;
