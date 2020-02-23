const Footer = () => {
  return (
    <>
      <div className="footer">
        <a href="https://twitter.com/gmaxi_" title="Reach me out on twitter" target="_blank">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="https://instagram.com/gmaxi_" title="Follow me on Instagram" target="_blank">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="mailto:gimenez.maxi@gmail.com" title="Send me an email!" target="_blank">
          <i className="fa fa-at"></i>
        </a>
        <a href="https://github.com/maxigimenez" title="Check my Github profile" target="_blank">
          <i className="fa fa-github"></i>
        </a>
        <a href="https://gitlab.com/maxigimenez" title="Check my GitLab profile" target="_blank">
          <i className="fa fa-gitlab"></i>
        </a>
        <a href="https://angel.co/maxigimenez" title="Check my Angel List profile" target="_blank">
          <i className="fa fa-angellist"></i>
        </a>
        <a href="https://www.producthunt.com/@gmaxi_" title="Check my Product Hunt profile" target="_blank">
          <i className="fa fa-product-hunt"></i>
        </a>
        <a href="https://www.linkedin.com/in/maxigimenez/" title="Check my LinkedIn profile" target="_blank">
          <i className="fa fa-linkedin"></i>
        </a>
      </div>
      <style jsx>{`
      .footer {
        margin-top: 70px;
        border-top: 1px dotted rgba(0,0,0,.34);
        padding: 20px 0;
        text-align: center;
      }
      .footer a {
        font-size: 20px;
        color: rgba(0,0,0,.54);
        margin: 0 10px;
      }
      .footer a:hover {
        color: var(--green);
      }
      `}</style>
    </>
  )
}

export default Footer;
