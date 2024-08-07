import { useEffect } from "react";

import globalStyles from "../../App.module.sass";
import styles from "./Terms.module.sass";

const TermsPage = () => {
  useEffect(() => {
    document.title = "Terms & Conditions";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.title}>Terms & Conditions</div>
        <div className={styles.terms_list}>
          <div className={styles.term}>
            <div className={styles.theme}>
              <div className={styles.point}>✦</div>
              Information we collect
            </div>
            <div className={styles.description}>
              <div className={styles.title}>
                We collect both personal and non-personal information in various ways, including but not limited to:
              </div>
              <div className={styles.subtitle}>Personal Information:</div>
              <div className={styles.items_list}>
                <div className={styles.item}>
                  <div className={styles.point}>✦</div>
                  Contact Information: Name, address, email address, phone number.
                </div>
                <div className={styles.item}>
                  <div className={styles.point}>✦</div>
                  Booking Information: Arrival and departure dates, room preferences, payment information.
                </div>
                <div className={styles.item}>
                  <div className={styles.point}>✦</div>
                  Identification: Government-issued ID, passport, or driver's license (as required by law).
                </div>
                <div className={styles.item}>
                  <div className={styles.point}>✦</div>
                  Special Requests: Dietary restrictions, accessibility requirements, or other preferences.
                </div>
              </div>
              <div className={styles.subtitle}>Non-Personal Information:</div>
              <div className={styles.items_list}>
                <div className={styles.item}>
                  <div className={styles.point}>✦</div>
                  Usage Data: Information about your interactions with our website, including IP address, browser type, pages
                  viewed, and the duration of your visit.
                </div>
                <div className={styles.item}>
                  <div className={styles.point}>✦</div>
                  Cookies: We use cookies and similar technologies to enhance your browsing experience and analyze website
                  traffic. You can manage your cookie preferences through your browser settings.
                </div>
                <div className={styles.item}>
                  <div className={styles.point}>✦</div>
                  Identification: Government-issued ID, passport, or driver's license (as required by law).
                </div>
                <div className={styles.item}>
                  <div className={styles.point}>✦</div>
                  Special Requests: Dietary restrictions, accessibility requirements, or other preferences.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.term}>
            <div className={styles.theme}>
              <div className={styles.point}>✦</div>How we use your information
            </div>
            <div className={styles.description}>
              <div className={styles.title}>
                We use the collected information for various purposes, including but not limited to:
              </div>
              <div className={styles.subtitle_empty} />
              <div className={styles.items_list}>
                <div className={styles.item}>
                  <div className={styles.point}>✦</div>Processing Reservations: To facilitate your bookings and manage your
                  stay.
                </div>
                <div className={styles.item}>
                  <div className={styles.point}>✦</div>Guest Services: To provide personalized services and respond to your
                  requests and inquiries.
                </div>
                <div className={styles.item}>
                  <div className={styles.point}>✦</div>Payment Processing: To process payments and prevent fraudulent
                  transactions.
                </div>
                <div className={styles.item}>
                  <div className={styles.point}>✦</div>Marketing Communications: With your consent, to send promotional
                  offers, newsletters, and updates.
                </div>
                <div className={styles.item}>
                  <div className={styles.point}>✦</div>Legal Obligations: To comply with applicable laws and regulations.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.term}>
            <div className={styles.theme}>
              <div className={styles.point}>✦</div>Information Sharing
            </div>
            <div className={styles.description}>
              <div className={styles.title}>
                We may share your information with third parties in the following circumstances:
              </div>
              <div className={styles.subtitle_empty} />
              <div className={styles.items_list}>
                <div className={styles.item}>
                  <div className={styles.point}>✦</div>Service Providers: We may engage trusted third-party service providers
                  to assist us in delivering our services, such as payment processors, IT support, and marketing agencies.
                </div>
                <div className={styles.item}>
                  <div className={styles.point}>✦</div>Legal Compliance: We may disclose your information to comply with
                  legal obligations, protect our rights, or respond to lawful requests from authorities.
                </div>
                <div className={styles.item}>
                  <div className={styles.point}>✦</div>Business Transfers: In the event of a merger, acquisition, or sale of
                  our assets, your information may be transferred to the acquiring entity.
                </div>
                <div className={styles.item}>
                  <div className={styles.point}>✦</div>Consent: We will only share your information with third parties when
                  you provide explicit consent.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.term}>
            <div className={styles.theme}>
              <div className={styles.point}>✦</div>Data Security
            </div>
            <div className={styles.description}>
              <div className={styles.title}>
                We implement reasonable measures to safeguard your information from unauthorized access, disclosure,
                alteration, and destruction. However, no method of data transmission over the internet is completely secure,
                and we cannot guarantee the absolute security of your data.
              </div>
            </div>
          </div>
          <div className={styles.term}>
            <div className={styles.theme}>
              <div className={styles.point}>✦</div>Your Choices
            </div>
            <div className={styles.description}>
              <div className={styles.title}>
                You have certain rights regarding your personal information, including the right to access, correct, or
                delete your data. To exercise these rights or opt-out of marketing communications, please contact us using
                the contact details provided below.
              </div>
            </div>
          </div>
          <div className={styles.term}>
            <div className={styles.theme}>
              <div className={styles.point}>✦</div>Changes to this Privacy Policy
            </div>
            <div className={styles.description}>
              <div className={styles.title}>
                We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. The
                revised policy will be posted on our website with the updated "Last Updated" date.
              </div>
            </div>
          </div>
          <div className={styles.term}>
            <div className={styles.theme}>
              <div className={styles.point}>✦</div>Any questions?
            </div>
            <div className={styles.description}>
              <div className={styles.title}>
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
              </div>
              <div className={styles.subtitle_emtpy} />
              <div className={styles.items_list}>
                <div className={styles.item}>
                  <div className={styles.point}>✦</div>Stay@luxhotel.no
                </div>
                <div className={styles.item}>
                  <div className={styles.point}>✦</div>Norway, Landstads gate 60, 2000 Lillestrøm
                </div>
              </div>
              <div className={styles.thanks}>
                Thank you for choosing LUX Hotel. We value your privacy and strive to provide you with the best possible
                service during your stay with us.
              </div>
              <button type="button" className={globalStyles.secondary}>
                <div className={globalStyles.content}>Book apartment</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
