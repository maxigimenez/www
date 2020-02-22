const Bio = () => {
  return (
    <>
      <div className="bio">
        <img src="/me.jpg" alt="Me in NYC early 2020" width="100" />
        <h1>Hi!, I'm <strong>Maxi</strong> 🇦🇷</h1>
        <p>I'm a passionate developer with 9+ years of experience working on tech companies.</p>
        <p>Always seeking new challenges to learn as much as possible in the process.</p>
        <p>Enjoy working on agile teams with clear goals and direction.</p>
        <p className="reach-out">If you want to reach out I'm on <a href="https://twitter.com/gmaxi_" title="Reach me out on twitter">Twitter</a> or <a href="https://github.com/maxigimenez" title="Check my Github profile">Github</a>.</p>
      </div>

      <style jsx>{`
        .bio {
          margin-top: 80px;
        }
        .reach-out {
          margin-top: 20px;
        }
      `}</style>
    </>
  )
}

export default Bio;
