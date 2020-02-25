const Bio = () => {
  return (
    <>
      <div className="bio">
        <img src="/me.jpg" alt="Me in NYC early 2020" width="100" />
        <h1>Hi!, I'm <strong>Maxi</strong> 🇦🇷</h1>

        <div className="tags">
          <span>👨‍💻 Developer</span>
          <span>✈️ Traveler</span>
          <span>🚀 Maker</span>
          <span>👨‍🍳 Chef Enthusiast</span>
          <span>🐶 Pet lover</span>
        </div>

        <p>I'm a passionate developer with 9+ years of experience working on tech companies.</p>
        <p>Always seeking new challenges to learn as much as possible in the process.</p>
        <p>Enjoy working on agile teams with clear goals and direction.</p>

        <div className="working">
          <p>Currently, I'm at <a href="https://ganintegrity.com" title="GAN Integrity" target="_blank">GAN Integrity</a> as Senior Front-end engineer in the 🇩🇰 Copenhagen offices.</p>
          <p>My job is to develop high performing code using the latest technologies aiming to have it fully covered (TDD & E2E) for the SaaS product.</p>
        </div>

        <p className="reach-out">If you want to reach out I'm on <a href="https://twitter.com/gmaxi_" title="Reach me out on twitter" target="_blank">Twitter</a> or <a href="https://github.com/maxigimenez" title="Check my Github profile" target="_blank">Github</a>.</p>
      </div>

      <style jsx>{`
        img {
          border-radius: 50%;
          height: 100px;
          object-fit: cover;
        }
        .bio {
          margin-top: 50px;
        }
        .reach-out {
          margin-top: 20px;
        }
        .tags {
          display: flex;
          margin: 0px 0 20px;
        }
        h1 {
          margin-bottom: 10px;
        }
        .tags span {
          background-color: rgba(0,0,0,.06);
          border-radius: 4px;
          padding: 0 8px;
          font-size: 13px;
          margin-right: 5px;
        }
        .working {
          margin-top: 20px;
        }
      `}</style>
    </>
  )
}

export default Bio;
