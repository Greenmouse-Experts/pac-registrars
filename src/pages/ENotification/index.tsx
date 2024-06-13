import { ReactNode, useState } from "react";
import Banner from "../../components/Banner";
import SmallCardWithIcon2 from "../../components/cards/SmallCardWithIcon2";
import List from "../../components/List";
import NotificationFaq from "../../components/NotificationFaq";

function CardWithIcon({ children }: { children: ReactNode }) {
  return (
    <div className=" flex flex-col items-center justify-start card-shadow px-10 rounded-[10px] pb-14 pt-5 bg-white relative">
      {children}
      <img
        src="/icons/insert.svg"
        alt=""
        className="absolute bottom-0 right-0"
      />
    </div>
  );
}

interface INum{
  number:string;
  title:string;
  text: string;
}

function NumberedList({ number, title, text }: INum) {
  return (
    <div className="flex items-start gap-8">
      <p className=" font-kaushan  text-[2.5rem]">{number}</p>
      <div>
        <p>
          <span className="font-semibold">{title}: </span>
          {text}
        </p>
      </div>
    </div>
  );
}

function ENotification() {
  const [showFaq, setShowFaq] = useState(false);
  return (
    <>
      <Banner page="e-Notification" link="" img="/images/notify-banner.png" />
      <section className="lg:pt-24 pt-16 bg-white flex lg:flex-row flex-col items-center lg:gap-20 gap-10 ">
        <div className="lg:w-[44%] w-full">
          <img
            src="/images/notify-1.png"
            alt=""
            className="w-full object-cover rounded-[20px]"
          />
        </div>
        <div className="lg:w-[56%] w-full font-syne">
          <h4 className=" font-bold font-syne capitalize text-black">
            E-Notifications
          </h4>
          <p className=" 2xl:mt-3 mt-3 font-sora ">
            E-notifications short messages or alerts sent from mobile apps,
            websites, or servers to a shareholder/unitholder/bondholder’s
            device, typically in the form of transaction message, clients
            corporate action notification by text, images, or interactive
            buttons. These notifications are designed to inform, engage, or
            prompt a holder to take a specific action.
          </p>
          <p className=" 2xl:mt-5 mt-3 font-sora ">
            It can be delivered in real-time before corporation action of client
            and appear on the holder’s device screen, even when the app or
            website is not actively in use. E-notifications are a common
            communication tool used to keep users informed about updates,
            events, promotions, or other relevant information, enhancing user
            engagement and retention. Users can often customize their
            notification preferences and choose to opt in or opt out of
            receiving them from specific apps or websites.
          </p>
        </div>
      </section>

      <section className="lg:pt-24 pt-16 bg-white flex lg:flex-row flex-col items-center lg:gap-20 gap-10 ">
        <div className="lg:w-[56%] w-full font-syne">
          <p className=" 2xl:mt-3 mt-3 font-sora ">
            A highly effective form of mobile-first two-way communication. A
            mobile app can send these brief alerts to a user’s smartphone, which
            will appear on the lock screen when the app is not in use.
          </p>
          <p className=" 2xl:mt-5 mt-3 font-sora ">
            They can be delivered immediately or scheduled for a later time. The
            message works like SMS. It enables companies to quickly share
            messages, deals, and other information with customers. They can
            broadcast Annual General Meeting, Court Order Meeting, other
            corporate announcement, dividend declaration, transaction update,
            receive electronic annual report, encourage holders to take their
            Right offer, holders to download coupons or announce upcoming sales.
          </p>
          <p className=" 2xl:mt-5 mt-3 font-sora ">
            It resembles standard SMS messages but are delivered only to those
            who have register to the application.
          </p>
        </div>
        <div className="lg:w-[44%] w-full">
          <img
            src="/images/notify-2.png"
            alt=""
            className="w-full object-cover rounded-[20px]"
          />
        </div>
      </section>

      <section className="lg:pt-24 pt-16">
        <div className="xl:w-[50%] w-full">
          <h4 className=" font-bold font-syne capitalize text-black">
            E-Notifications
          </h4>

          <p className="font-semibold mt-3">
            E-Notifications offer several benefits for businesses as well as
            users. Here are some of the key advantages
          </p>
        </div>
        <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-14">
          <SmallCardWithIcon2 img="/icons/notf-1.svg">
            <p className="font-semibold mb-3">Instant Communication</p>
            <p>
              E-Notification provide a direct and immediate way to reach users.
              Messages are delivered in real-time, ensuring that important
              information or updates are promptly conveyed.
            </p>
          </SmallCardWithIcon2>
          <SmallCardWithIcon2 img="/icons/notf-2.svg">
            <p className="font-semibold mb-3">Increased User Engagement</p>
            <p>
              E-Notification can boost user engagement by reminding users of
              your app’s existence and encouraging them to open it. This can
              help reduce user churn and increase overall user retention
            </p>
          </SmallCardWithIcon2>
          <SmallCardWithIcon2 img="/icons/notf-3.svg">
            <p className="font-semibold mb-3">Personalization</p>
            <p>
              Apps can use user data and preferences to send personalized
              notifications. This personalization can lead to higher conversion
              rates as users receive content that is relevant to their interests
              and behaviors.
            </p>
          </SmallCardWithIcon2>
          <SmallCardWithIcon2 img="/icons/notf-4.svg">
            <p className="font-semibold mb-3">Enhanced User Experience</p>
            <p>
              E-Notification can provide valuable information, such as news
              updates, promotions, or relevant content, directly to users’
              devices. This can improve the overall user experience by keeping
              users informed and entertained.
            </p>
          </SmallCardWithIcon2>
          <SmallCardWithIcon2 img="/icons/notf-5.svg">
            <p className="font-semibold mb-3">Promotion and Marketing</p>
            <p>
              E-Notification are an effective tool for marketing and promotion.
              They can be used to announce new products, special offers, sales,
              and events, driving traffic and sales for businesses.
            </p>
          </SmallCardWithIcon2>
          <SmallCardWithIcon2 img="/icons/notf-6.svg">
            <p className="font-semibold mb-3 text-center">App Updates</p>
            <p>
              Developers can use e-Notification to inform users about app
              updates, bug fixes, or new features. This ensures that users have
              access to the latest improvements and enhancements.
            </p>
          </SmallCardWithIcon2>
          <SmallCardWithIcon2 img="/icons/notf-7.svg">
            <p className="font-semibold mb-3">Segmentation</p>
            <p>
              E-notification platforms often allow businesses to segment their
              user base based on various criteria, such as Volume of holding,
              location, or demographics. This enables more targeted and relevant
              messaging.
            </p>
          </SmallCardWithIcon2>
          <SmallCardWithIcon2 img="/icons/notf-8.svg">
            <p className="font-semibold mb-3">Cost-Effective</p>
            <p>
              notf-ared to other marketing channels, e-Notification are often
              more cost-effective. They don’t require postage, printing, or
              advertising fees, making them a budget-friendly option.
            </p>
          </SmallCardWithIcon2>

          <SmallCardWithIcon2 img="/icons/notf-9.svg">
            <p className="font-semibold mb-3">Analytics and Insights</p>
            <p>
              Businesses can track the performance of e-Notification through
              analytics tools. This allows them to measure open rates,
              click-through rates, conversion rates, and other key metrics to
              refine their messaging strategy.
            </p>
          </SmallCardWithIcon2>
          <SmallCardWithIcon2 img="/icons/notf-10.svg">
            <p className="font-semibold mb-3">Cross-Platform</p>
            <p className="hyphens-none">
              E-Notification are supported on various platforms, including iOS,
              Android, and web browsers, making them a versatile communication
              tool that can reach a wide audience.
            </p>
          </SmallCardWithIcon2>

          <SmallCardWithIcon2 img="/icons/notf-11.svg">
            <p className="font-semibold mb-3">Offering Opt-in Option</p>
            <p className="hyphens-none">
              E-Notification are supported on various platforms, including iOS,
              Android, and web browsers, making them a versatile communication
              tool that can reach a wide audience.
            </p>
          </SmallCardWithIcon2>
          <SmallCardWithIcon2 img="/icons/notf-12.svg">
            <p className="font-semibold mb-3">
              Getting more high-quality leads
            </p>
            <p className="hyphens-none">
              Website e-Notification let you add subscribers with one click and
              engage users without requesting personal details. Also,
              e-Notification need permission to be turned on. This means that
              when a message is sent, it will always go to the open browser of a
              real subscriber.
            </p>
          </SmallCardWithIcon2>
          <SmallCardWithIcon2 img="/icons/notf-13.svg">
            <p className="font-semibold mb-3">Saves time</p>
            <p className="hyphens-none">
              You can capitalize on existing opportunities using e-Notification
              by communicating with your users properly. Overuse or poorly
              targeted notifications can lead to user annoyance and result in
              users disabling notifications. Striking the right balance and
              delivering value to users is crucial for the success of
              e-notification campaigns.
            </p>
          </SmallCardWithIcon2>
        </div>
        <div>
          <p className="mt-16">
            In today’s mobile-centric culture, businesses need browser
            e-Notification for real-time communication, user engagement,
            retention, re-engagement, personalisation, customisation, marketing,
            and user experience. It can help increase user loyalty, customer
            happiness, and app usage by sending timely, relevant, and customised
            messages to app users.
          </p>
        </div>
      </section>
      <section className="lg:pt-24 pt-16">
        <div className="xl:w-[60%] w-full">
          <h4 className=" font-bold font-syne capitalize text-black">
            Different Categories Of E-Notification
          </h4>

          <p className="font-semibold mt-3">
            There are various categories of e-notification services:
          </p>
        </div>
        <div className="grid lg:grid-cols-2  grid-cols-1 gap-x-20 gap-y-16 mt-14">
          <CardWithIcon>
            <img src="/icons/notify-13.svg" alt="" className=" scale-90" />
            <p className="font-semibold mb-3">Time-Sensitive Notifications</p>
            <p className="hyphens-none">
              Send consumers time-sensitive e-Notification to generate a sense
              of urgency. You can notify customers of upcoming Annual General
              Meeting, Court Order Meeting, Corporate actions, limited-time
              offers for shares and Rights, expiration dates for transactions,
              flash deals, etc. Your users will want to take advantage of the
              deal. Time-bound e-notification messages must specify an expiry
              date after the offer period ends to avoid users clicking through
              to expired deals. You can use it to announce one-day sales,
              specials, or other deals.
            </p>
          </CardWithIcon>
          <CardWithIcon>
            <img src="/icons/notify-14.svg" alt="" className=" scale-90" />
            <p className="font-semibold mb-3">Reminder Notifications</p>
            <p className="hyphens-none">
              You can schedule messages for a certain time or day. These can be
              delivered to users within a specific area.
            </p>
          </CardWithIcon>
          <CardWithIcon>
            <img src="/icons/notify-15.svg" alt="" className=" scale-90" />
            <p className="font-semibold mb-3">Recurring Notifications</p>
            <p className="hyphens-none">
              Businesses may use this powerful new Messaging System feature to
              send recurring communications to clients to create long-term
              relationships and accelerate results. Create recurring messages
              that are sent on a predetermined schedule. Use well-timed
              Recurring mobile web e-Notification to boost retention, welcome
              visitors, and promote new offers. Set the frequency and time of
              Recurring e-Notification. When you choose, all devices meeting the
              requirements will receive the message.
            </p>
          </CardWithIcon>
          <CardWithIcon>
            <img src="/icons/notify-16.svg" alt="" className=" scale-90" />
            <p className="font-semibold mb-3">
              Geolocation-Based Interest Notifications
            </p>
            <p className="hyphens-none">
              You can configure a notification to the user when they arrive or
              leave a specified location. These alerts are great for finding
              nearby stores and a lot more. For example: If you want to provide
              your consumers with deals on luxurious restaurants in their
              present location, send them notifications based on their choices
              in the nearby area.
            </p>
          </CardWithIcon>
          <CardWithIcon>
            <img src="/icons/notify-17.svg" alt="" className=" scale-90" />
            <p className="font-semibold mb-3">Targeted Notifications</p>
            <p className="hyphens-none">
              Tags allow you to send targeted e-Notification to users based on
              their interests, likes, holders with unclaimed dividend, etc.
              E-Notification enable proactive buyer journey tracking. After a
              subscriber enters the campaign funnel, automated browser
              e-Notification can be sent to them according to a set of rules and
              using data in real-time. If you have a target audience, you can
              create customised target groups of subscribers.
            </p>
          </CardWithIcon>
          <CardWithIcon>
            <img src="/icons/notify-18.svg" alt="" className=" scale-90" />
            <p className="font-semibold mb-3">
              For Your Information (FYI) Messages
            </p>
            <p className="hyphens-none">
              Want to keep your users up to date on the latest in the company?
              Send these individuals this alert about outcome of a meeting news!
              Similarly, you can update them on the latest stock prices, brand
              level adjustments, industry news, and more.
            </p>
          </CardWithIcon>
        </div>
      </section>
      <section className="lg:py-24 py-16 text-white bg-bluePrimary mt-24">
        <div className="xl:w-[60%] w-full">
          <h4 className=" font-bold font-syne capitalize text-white">
            How Does e-Notification Work?
          </h4>

          <p className=" mt-3">
            E-Notification work through a combination of technologies and
            processes involving a sender (usually a server or an app), a
            e-notification service, and the recipient’s device. Here’s a
            step-by-step explanation of how e-Notification work:
          </p>
        </div>

        <div className="flex mt-14 flex-col items-start gap-20  xl:flex-row">
          <div className=" flex flex-col gap-4">
            <NumberedList
              number="01"
              title="User Opt-In"
              text=" Before an app or website can send e-Notification to a user, the user typically needs to grant permission or opt in to receive them. This permission is usually requested when the user installs an app or visits a website for the first time."
            />
            <NumberedList
              number="02"
              title="Registration"
              text="When a user grants permission, their device registers with the e-notification service associated with the app or website. This registration involves generating a unique token or identifier for the device and associating it with the user’s preferences and the specific app or website.
"
            />
            <NumberedList
              number="03"
              title="Content Creation "
              text=" The sender (app or server) creates a e-notification message. This message can contain text, images, interactive buttons, and other media elements. It also includes information about where to deliver the message (the recipient’s device) and how to display it."
            />
            <NumberedList
              number="04"
              title="Sending the Notification"
              text=" The sender submits the e-notification message to the e-notification service. This service acts as an intermediary between the sender and the recipient’s device."
            />
            <NumberedList
              number="05"
              title="Analytics and Feedback "
              text=" The sender can track the performance of e-Notification through analytics tools. They can monitor metrics like open rates, click-through rates, and conversion rates to evaluate the effectiveness of their notifications and refine their messaging strategy."
            />
          </div>
          <div className="flex flex-col gap-4">
            <NumberedList
              number="06"
              title="Routing and Delivery "
              text="The e-notification service routes the message to the recipient’s device using the unique identifier registered during the opt-in process. The service is responsible for ensuring that the message is delivered to the correct device."
            />
            <NumberedList
              number="07"
              title="Displaying the Notification"
              text="When the recipient’s device receives the e-notification, it displays the message on the screen, often accompanied by a sound or vibration to get the user’s attention."
            />
            <NumberedList
              number="08"
              title="User Interaction: "
              text="  Depending on the content of the notification, the user can interact with it in various ways. For example, they may tap the notification to open the associated app, dismiss the notification, or take specific actions within the notification itself, such as replying to a message or clicking on a link."
            />
            <NumberedList
              number="09"
              title="Notification Center"
              text=" On mobile devices, e-Notification are typically stored in a notification center or tray, allowing users to review past notifications even if they didn’t interact with them when they first appeared."
            />
          </div>
        </div>
      </section>

      <section className="lg:pt-24 pt-16 mt-24">
        <div className="xl:w-[60%] w-full">
          <h4 className=" font-bold font-syne capitalize text-black">
            The Elements Of An Effective E-notification Strategy
          </h4>

          <p className=" mt-3">
            E-Notification are appealing and easy-to-respond-to communications.
            This makes them a good way for companies to engage their audience
            off-site. Browser e-Notification have multiple elements.
          </p>
        </div>

        <div className="grid xl:grid-cols-4 lg:grid-cols-2  grid-cols-1 gap-10 mt-14">
          <CardWithIcon>
            <p className="font-semibold mb-3">Create Engaging Content</p>
            <p className="hyphens-none">
              Content should be tailored to your audience. Answer your targeted
              audience’s questions with content. Additionally, you can also
              simplify your information with images.
            </p>
          </CardWithIcon>

          <CardWithIcon>
            <p className="font-semibold mb-3">
              Use Your Current List Of Subscribers
            </p>
            <p className="hyphens-none">
              If you have many email subscribers, you can insert a link to your
              webpage in the newsletters and route them to a push message opt-in
              page.
            </p>
          </CardWithIcon>

          <CardWithIcon>
            <p className="font-semibold mb-3">Make Use Of Social Proof</p>
            <p className="hyphens-none">
              Gain brand awareness and engagement across many social media
              platforms. Your profile bio can connect to your web page using an
              opt-in trigger, and you can conduct various marketing campaigns
              and ads.
            </p>
          </CardWithIcon>

          <CardWithIcon>
            <p className="font-semibold mb-3">Send Appropriate Notifications</p>
            <p className="hyphens-none">
              You can send an informative, time-sensitive, or simple reminder
              notification. Using A/B testing, you may determine which mobile
              e-notification format is more effective at reaching your target
              audience. It’s crucial to send messages to your users’
              preferences.
            </p>
          </CardWithIcon>

          <CardWithIcon>
            <p className="font-semibold mb-3">Segment And Customisef</p>
            <p className="hyphens-none">
              You always go the extra mile when you add something unique to your
              marketing plan. Identify customer segmentation factors and send
              targeted pushes to the relevant segment to boost engagement.
            </p>
          </CardWithIcon>
        </div>
      </section>

      <section className="lg:pt-24 pt-16 bg-white flex lg:flex-row flex-col items-center lg:gap-20 gap-10 ">
        <div className="lg:w-[56%] w-full font-syne">
          <h4 className=" font-bold font-syne capitalize text-black">
            Popular Industries Using E-Notification
          </h4>
          <p className=" 2xl:mt-3 mt-3 font-sora ">
            Web e-Notification are used for advertising, re-engagement, and
            keeping customers. As a result, they are the preferred red marketing
            automation route for content publishers, blog writers, and eCommerce
            businesses. They have been shown to work well in a wide range of
            businesses.
          </p>
          <div className="mt-10 ml-14">
            <List
              items={[
                "E-commerce and Finance",
                "Gaming",
                "Cosmetics",
                "Tourism and the hospitality industry",
                "Job portals",
                "Health and Fitness",
                "Weather",
                "Traffic",
              ]}
            />
          </div>
        </div>
        <div className="lg:w-[44%] w-full">
          <img
            src="/images/notify-3.png"
            alt=""
            className="w-full object-cover rounded-[20px]"
          />
        </div>
      </section>

      <section className="lg:pt-24 pt-16 bg-white flex lg:flex-row flex-col items-center lg:gap-20 gap-10 ">
        <div className="lg:w-[44%] w-full">
          <img
            src="/images/notify-4.png"
            alt=""
            className="w-full object-cover rounded-[20px]"
          />
        </div>
        <div className="lg:w-[56%] w-full font-syne">
          <h4 className=" font-bold font-syne capitalize text-black">
            Advantages Of E-Notification
          </h4>
          <p className=" 2xl:mt-3 mt-3 font-sora ">
            E-Notification can be useful since they allow you to do the
            following:
          </p>
          <div className="mt-10 ml-14">
            <List
              items={[
                "Motivate customers to take action.                ",
                "Maintain communication with your audience.                ",
                "Recognise user behaviour and provide information about your target audience.                ",
                "Make your brand more “human” by making it relevant and relational.",
                "Communicate immediately with clients.",
                "Send highly interactive, media-rich messages. ",
                "Communicate cost-effectively.                ",
                "They are cheaper than SMS messages.                ",
                "They can be tailored to certain behaviours and demographics.",
                "Higher open rates than telephone calls and SMS ",
                "Marketing efforts and communication are automated",
                "Increases user satisfaction and improves the user experience                ",
                "Increases user engagement and business opportunities                ",
                "Allows for real-time response",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-16 lg:px-[10%] bg-[#F9F9F9] flex lg:flex-row flex-col items-center lg:gap-20 gap-10 mt-20">
        <p className=" text-2xl font-semibold">
          Do you want your properties and agents to be onboarded on the B2B
          platform, send an email to hello@proptyplus.com or
          info@pacregistrars.com Our staff will contact you for the necessary
          assistance.
        </p>
      </section>

      <section className="lg:py-24 py-16">
        <p
          className="bg-bluePrimary text-white w-fit py-3 px-5 cursor-pointer"
          onClick={() => setShowFaq((prev) => !prev)}
        >
          Click to view FAQs
        </p>

        <div className="mt-20">{showFaq && <NotificationFaq />}</div>
      </section>
    </>
  );
}

export default ENotification;
