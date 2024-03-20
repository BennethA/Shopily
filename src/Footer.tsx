import { FaFacebook, FaGoogle, FaMap, FaTwitter, FaWhatsapp } from "react-icons/fa6"

function Footer () {
  return (
    <>
      <div className="reachUs">
        <div className="socials">
          <p>Socials: </p>
          <div>
            <FaFacebook/><a href="http://www.facebook.com/shopily"> Facebook</a>
          </div>
          <div>
            <FaWhatsapp/><a href="http://wa.me/0508529031"> Whatsapp</a> 
          </div>
          <div>
            <FaTwitter/><a href="http://www.twitter.com/shopily"> Twitter(X)</a>
          </div>
          <div>
            <FaGoogle/><a href="mailto:addobenneth6@gmail.com"> Gmail</a>
          </div>
        </div>
        <div className="location">
          <p>Location: </p>
          <div>
            <FaMap/><a href="http://www.google.com/maps?q=Accra"> Location: Accra, Ghana, West Africa</a>
          </div>

        </div>
      </div>
    </>
  )
}

export default Footer;