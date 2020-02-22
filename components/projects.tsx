const Projects = () => {
  return (
    <>
      <div className="projects">
        <h2>Side Projects</h2>

        <div className="projects__container">
          <div>
            <h3>🧡 Skuap.com</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <a href="https://skuap.com" title="Skuap">See more</a>
          </div>
          <div>
            <h3>💎 SheetAPI.co</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <a href="https://sheetapi.co" title="SheetAPI">See more</a>
          </div>
          <div>
            <h3>📊 Updatefy.co</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <a href="https://updatefy.co" title="Updatefy">See more</a>
          </div>
          <div>
            <h3>🤑 CurrencyMenu.com</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <a href="https://currencymenu.com" title="CurrencyMenu">See more</a>
          </div>
        </div>
      </div>

      <style jsx>{`
      .projects {
        margin-top: 80px;
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
      }
      .projects__container div:nth-child(odd) {
        margin-right: 4%;
      }
      `}</style>
    </>
  )
}

export default Projects;
