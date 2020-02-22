const OSProjects = () => {
  return (
    <>
      <div className="open-source">
          <h2>OS Projects & Contributions</h2>

          <div className="open-source__project">
            <h3><span className="tag--wip">WIP</span> TypeScript Model Decorator</h3>
            <p>The goal of this library is to expose a typescript decorator to model classes with default values, immutable data and more.</p>
            <a href="https://github.com/maxigimenez/ts-model-decorator" title="ts-model-decorator" target="_blank">See more</a>
          </div>

          <div className="open-source__project">
            <h3>Base React App</h3>
            <p>Layer on top of createReactApp adding most common libraries such as StyledComponents, React-Router, Jest and more.</p>
            <a href="https://github.com/maxigimenez/base-react-app" title="base-react-app" target="_blank">See more</a>
          </div>

          <div className="open-source__contributions">
            Check out my <a href="https://github.com/maxigimenez" title="Check my Github profile" target="_blank">Github</a> and <a href="https://gitlab.com/maxigimenez" title="Check my GitLab profile" target="_blank">GitLab</a> profiles for more information.
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
