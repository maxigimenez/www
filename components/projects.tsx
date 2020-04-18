const Projects = () => {
  return (
    <>
      <div className="projects">
        <h2>Side Projects</h2>

        <div className="projects__container">
          <div>
            <h3>📰 7Reads</h3>
            <p>7Reads is a minimal mindful reading list for Google Chrome.</p>
            <a href="https://7reads.now.sh/" title="7Reads" target="_blank">Check project</a>
          </div>
          <div>
            <h3>🧡 Skuap.com</h3>
            <p>Skuap is a platform designed for leaders to create high performing teams.</p>
            <a href="https://skuap.com" title="Skuap" target="_blank">Check project</a>
          </div>
          <div>
            <h3>💎 SheetAPI.co</h3>
            <p>SheetAPI allows to transform Google Sheet's into RESTful API's.</p>
            <a href="https://sheetapi.co" title="SheetAPI" target="_blank">Check project</a>
          </div>
          <div>
            <h3>📊 Updatefy.co</h3>
            <p>Updatefy is no-code platform to embed Google Sheet's into any webpage.</p>
            <a href="https://updatefy.co" title="Updatefy" target="_blank">Check project</a>
          </div>
          <div>
            <h3>🤑 CurrencyMenu.com</h3>
            <p>Discover exchange rates directly from your menu bar.</p>
            <a href="https://currencymenu.com" title="CurrencyMenu" target="_blank">Check project</a>
          </div>
        </div>
      </div>

      <style jsx>{`
      .projects {
        margin-top: 60px;
      }
      .projects__container {
        display: flex;
        flex-wrap: wrap;
      }
      .projects__container div {
        width: 48%;
        margin-bottom: 15px;
      }
      .projects__container p {
        font-size: 14px;
        margin: 10px 0;
      }
      .projects__container div:nth-child(odd) {
        margin-right: 4%;
      }
      .tag--wip {
        background-color: #fddb3a;
        border-radius: 4px;
        padding: 0 8px;
        font-size: 12px;
      }
      @media only screen and (max-width: 600px) {
        .projects__container div {
          width: 100%;
        }
      }
      `}</style>
    </>
  )
}

export default Projects;
