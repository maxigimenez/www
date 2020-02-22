const OSProjects = () => {
  return (
    <>
      <div className="open-source">
          <h2>OS Projects & Contributions</h2>

          <div className="open-source__project">
            <h3><span className="tag--wip">WIP</span> TypeScript Model Decorator</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <a href="https://github.com/maxigimenez/ts-model-decorator" title="ts-model-decorator">See more</a>
          </div>

          <div className="open-source__project">
            <h3>Base React App</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <a href="https://github.com/maxigimenez/base-react-app" title="base-react-app">See more</a>
          </div>

          <div className="open-source__contributions">
            Check out my <a href="https://github.com/maxigimenez">Github</a> and <a href="https://gitlab.com/maxigimenez">GitLab</a> profiles for more information.
          </div>
        </div>

        <style jsx>{`
          .open-source {
            margin-top: 60px;
          }
          .open-source__project {
            margin: 30px 0;
          }
          .open-source__contributions {
            text-align: center;
            font-size: 14px;
            margin-bottom: 30px;
          }
          .tag--wip {
            background-color: #fddb3a;
            border-radius: 4px;
            padding: 0 8px;
            font-size: 12px;
          }
        `}</style>
    </>
  )
}

export default OSProjects;
