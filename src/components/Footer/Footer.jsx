import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-text">
            <span>Made with</span>
            <span className="heart">❤️</span>
            <span>by Himanshu Sahu</span>
          </div>

          <div className="footer-copyright">© {new Date().getFullYear()} All rights reserved.</div>
        </div>

        
      </div>
    </footer>
  )
}

export default Footer
