import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function WhatsApp() {
  return (
    <div className="whatsapp-container">
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/233XXXXXXXXX?text=Hi%20Faako%20team%2C%20I%27m%20interested%20in%20learning%20more%20about%20your%20ERP%20system"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
      </a>
    </div>
  );
}


      