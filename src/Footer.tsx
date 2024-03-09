import { FaFacebook, FaGoogle, FaMap, FaTwitter, FaWhatsapp } from "react-icons/fa6"

function Footer () {
  return (
    <>
      <div className="reachUs">
        <div className="socials">
          <p>Socials: </p>
          <div>
            <FaFacebook/><a href=""> Facebook</a>
          </div>
          <div>
            <FaWhatsapp/><a href=""> Whatsapp</a> 
          </div>
          <div>
            <FaTwitter/><a href=""> Twitter(X)</a>
          </div>
          <div>
            <FaGoogle/><a href=""> Gmail</a>
          </div>
        </div>
        <div className="location">
          <p>Location: </p>
          <div>
            <FaMap/><a href=""> Location: Accra, Ghana, West Africa</a>
          </div>

        </div>
      </div>
    </>
  )
}

export default Footer;