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

        <p>I'm a passionate developer with 10+ years of experience, who enjoys work with agile teams, where the main fuel is to create amazing and high-performance applications while having fun.</p>
        <p>I believe that anyone can learn and teach at the same time, that's why I love to share knowledge and learn as much as possible from my co-workers.</p>

        <p className="reach-out">💬Wanna talk? Reach me out on <a href="https://twitter.com/gmaxi_" title="Reach me out on twitter" target="_blank">Twitter</a>!</p>
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
