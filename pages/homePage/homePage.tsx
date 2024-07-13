import Image from "next/image";
import styles from "./homePage.module.css";
import TopNav from "../commonComponents/navigation/topNav";
import bannerImage from "./../../public/images/HomePage/banner.png";
import screenImage from "./../../public/images/HomePage/screen.png";
import desktopImage from "./../../public/images/HomePage/ourcreativespaces.png";
import gradientImage from "./../../public/images/HomePage/gradient.png";
import { useState } from "react";
import Card from "../commonComponents/components/card";
import luxuryIcon from "./../../public/images/HomePage/diamond1.svg";
import premiumIcon from "./../../public/images/HomePage/premium1.svg";
import economyIcon from "./../../public/images/HomePage/ecomomy1.svg";
import section4 from "./../../public/images/HomePage/section4.png";
import secondBanner from "./../../public/images/HomePage/secondBanner.png";
import miniPlex from "./../../public/images/HomePage/miniplex.png";
import projectImage1 from "./../../public/images/HomePage/projectImage1.png";
import MiniTheaterCards from "../commonComponents/projectsComponent/projectsComponent";
import TrustedPartners from "../commonComponents/partnersComponent";
import FAQ from "../commonComponents/faqComponent/faq";
import ContactForm from "../commonComponents/contactUs/contact";
import Footer from "../commonComponents/Footer/footer";
export default function HomePage() {
  const [selectedImage, setSelectedImage] = useState<any>(desktopImage); // default image

  const images: any = {
    residential: desktopImage,
    community: desktopImage,
    theatrical: desktopImage,
    galleries: desktopImage,
    popup: desktopImage,
  };

  const titles: any = {
    residential: "Residential Homes",
    community: "Community Centers",
    theatrical: "Small Theatrical Spaces",
    galleries: "Art Galleries",
    popup: "Pop-up Venues",
  };

  const [currentImage, setCurrentImage] = useState<any>(section4);

  const services = [
    {
      title: "Interior Design Services",
      description:
        "Providing tailored interior design solutions for mini theaters, including layout planning, decor selection, and furniture arrangement.",
      image: section4,
    },
    {
      title: "Home Theater Installation",
      description:
        "Offering comprehensive installation services for home theaters, including equipment setup, system integration, system calibration, and seating arrangements.",
      image: desktopImage,
    },
    {
      title: "Customized Furniture",
      description:
        "Designing and manufacturing custom seating solutions for mini theaters, ensuring comfort, style, and space optimization.",
      image: section4,
    },
    {
      title: "Lighting Design and Installation",
      description:
        "Designing and installing specialized lighting systems for mini theaters, including ambient lighting, projector lighting, and fixtures for enhanced viewing experiences.",
      image: section4,
    },
    {
      title: "Acoustic Solutions",
      description:
        "Implementing acoustic treatments and soundproofing solutions to optimize audio quality in mini theaters.",
      image: section4,
    },
  ];

  const handleImageChange = (key: any) => {
    setSelectedImage(images[key]);
  };
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <TopNav />
        <div className={styles.headBanner}>
          <Image src={bannerImage} alt="banner" height={1000} width={1951} />
          <div className={styles.contentContainer}>
            <div className={styles.headPara}>
              <p>Experience the Magic of Live Theatre</p>
            </div>
            <div className={styles.contentPara}>
              <p>
                Discover immersive performances in the comfort of your own home.
                Let our mini theaters bring stories to life!
              </p>
              <button className={styles.homePageButton}>
                Book your experience
              </button>
            </div>
          </div>
        </div>
        <div className={styles.aboutUsSection}>
          <div className={styles.aboutUsContainer}>
            <div className={styles.verticalText}>
              <p className={styles.aboutPara}>About Us</p>
            </div>
            <div className={styles.contentPara}>
              <p>
                Our passion for theater drives us to create unforgettable
                experiences in intimate settings. With a commitment to
                excellence, we transform ordinary spaces into extraordinary
                stages, bringing stories to life with creativity and innovation.
              </p>
              <p>
                Each production is meticulously crafted to captivate and
                inspire, ensuring every audience member feels a deep connection
                to the performance.
              </p>
              <p>
                Join us on this journey of exploration and imagination, where
                the magic of live theater knows no bounds.
              </p>
              <button className={styles.readMore}>Read more →</button>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src={screenImage}
                alt="About Us Image"
                className={styles.aboutImage}
              />
            </div>
          </div>
        </div>

        <div className={styles.spacesContainer}>
          <div className={styles.spacesHead}>
            <p className={styles.spacesHeadPara}>
              Our <span className={styles.gradientText}>creative spaces</span>
            </p>
            <p className={styles.spacesPara}>
              We can establish mini theaters in various locations
            </p>
          </div>
          <div className={styles.spacesImageContainer}>
            <div className={styles.imageWrapper}>
              <Image
                src={selectedImage}
                alt="Selected spaces image"
                width={907}
                height={666}
                className={styles.spacesImage}
              />
              <Image
                src={gradientImage}
                alt="Gradient overlay"
                width={907}
                height={666}
                className={styles.spacesGradient}
              />
            </div>
            <div className={styles.navigationContainer}>
              {Object.keys(titles).map((key) => (
                <button
                  key={key}
                  className={selectedImage === key ? styles.activeButton : ""}
                  onClick={() => handleImageChange(key)}
                >
                  {titles[key]}
                </button>
              ))}
            </div>
            <div className={styles.spacesParaContainer}>
              <p className={styles.spacesParaOne}>
                Some community centers offer suitable spaces for mini theater
                performances, providing a centralized location for local
                entertainment.
              </p>
              <p className={styles.spacesParaCommunityButton}>
                Community Centers{" "}
              </p>
            </div>
          </div>
          <div className={styles.cardContainer}>
            <div className={styles.titleContainer}>
              <h1 className={styles.title}>
                Selecting a Miniature Theater Company within Our Budget
              </h1>
            </div>

            <div className={styles.cards}>
              <Card
                title="Luxury"
                description="Elevate your entertainment experience with our premium services tailored to the most discerning tastes."
                linkText="Learn more"
                backgroundColor="linear-gradient(to bottom, #FF8660 0%, #536784 100%)"
                icon={luxuryIcon}
              />
              <Card
                title="Premium"
                description="Indulge in high-quality mini theater setups that strike the perfect balance between luxury and affordability."
                linkText="Learn more"
                backgroundColor="linear-gradient(to bottom, #A873FF 0%, #536784 100%)"
                icon={premiumIcon}
              />
              <Card
                title="Economy"
                description="Discover budget-friendly options without compromising on quality, ensuring an immersive mini theater experience within reach."
                linkText="Learn more"
                backgroundColor="linear-gradient(to bottom, #4FAAFF 0%, #536784 100%)"
                icon={economyIcon}
              />
            </div>
            <div className={styles.subtitleContainer}>
              <p className={styles.subtitle}>
                Exploring Affordable Options to Bring Quality Entertainment to
                Your Budget-Friendly Miniature Theater Experience
              </p>
            </div>
          </div>
          <div className={styles.movcontainer}>
            <div className={styles.imageContainer} id="image-container">
              <div className={styles.textOverlay}>
                <h1 className={styles.heading}>list of Our services</h1>
                <p className={styles.subheading}>
                  Certainly, here's a refined list of services focusing on
                  specific aspects of mini theater design and setup
                </p>
              </div>
              <div className={styles.imageContTry}>
                <Image
                  id="main-image"
                  src={currentImage}
                  alt="Service Image"
                  className={styles.mainImage}
                  width={740}
                  height={400}
                />
              </div>
            </div>
            <div className={styles.textContainer}>
              {services.map((service, index) => (
                <div
                  key={index}
                  className={styles.textItem}
                  onMouseEnter={() => setCurrentImage(service.image)}
                >
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>
                    {service.description}
                  </p>
                  <a href="#" className={styles.exploreLink}>
                    Explore know →
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div>
            <section className={styles.heroSection}>
              <Image
                src={secondBanner}
                alt="Hero Background"
                className={styles.heroImage}
              />
              <div className={styles.heroText}>
                <h1>Discover MiniPlex's Mini Theater Projects</h1>
                <div className={styles.heroTextPara}>
                  <p>
                    Explore portfolio of innovative mini theater installations
                    and designs tailored for various spaces and occasions.
                  </p>
                  <span>02/03</span>
                </div>
              </div>
            </section>
            <section className={styles.projectSection}>
              <div className={styles.projectSectioncontainer}>
                <div className={styles.projectText}>
                  <h1 className={styles.projectSectiontitle}>
                    The Parliament Mini Theater Project
                  </h1>
                  <p className={styles.projectSectiondescription}>
                    Embarking on the Parliament Mini Theater project, MiniPlex
                    infused creativity and technical prowess to revitalize a
                    neglected basement space. The transformation began with
                    thorough space optimization, ensuring optimal sightlines and
                    acoustics.
                  </p>
                </div>
                <div className={styles.projectSectionimageContainer}>
                  <Image
                    src={projectImage1}
                    alt="Theater Image 1"
                    width={500}
                    height={300}
                    className={styles.projectSectionimage}
                  />
                  <Image
                    src={projectImage1}
                    alt="Theater Image 2"
                    width={500}
                    height={300}
                    className={styles.projectSectionimage}
                  />
                  <Image
                    src={projectImage1}
                    alt="Theater Image 3"
                    width={500}
                    height={300}
                    className={styles.projectSectionimage}
                  />
                </div>
                <div className={styles.projectSectionTextContainer}>
                  <p className={styles.projectSectiontext}>
                    Custom acoustic panels were strategically placed to enhance
                    sound quality, while plush seating arrangements were
                    designed for comfort and intimacy. State-of-the-art
                    audiovisual equipment, including high-definition projectors
                    and surround sound systems, were installed to deliver
                    immersive viewing experiences. Dynamic lighting solutions
                    were implemented to set the mood and enhance the ambiance,
                    adapting seamlessly to each performance.
                  </p>
                </div>
                <div className={styles.projectSectionTextContainer}>
                  <p className={styles.projectSectiontextTwo}>
                    With meticulous attention to detail and a passion for
                    innovation, MiniPlex transformed the Parliament Mini Theater
                    into a premier destination for cinematic and theatrical
                    delights, captivating audiences with its blend of artistry
                    and technology.
                  </p>
                </div>
                <div className={styles.projectSectionTextContainer}>
                  <button className={styles.projectButton}>
                    {" "}
                    More Projects
                  </button>
                </div>
              </div>
            </section>
            <section>
              <div className={styles.exploreMiniplexContainer}>
                <div className={styles.exploreMiniplexheaderText}>
                  <p className={styles.headTextStyle}>
                    Explore MiniPlex Insights
                  </p>
                </div>
                <div className={styles.exploreMiniplexParaText}>
                  <p className={styles.paraTextStyles}>
                    Stay informed and inspired with MiniPlex's latest blog
                    posts, featuring industry news, theater tips, and
                    behind-the-scenes stories.
                  </p>
                </div>
                <div className={styles.miniplexImageCont}>
                  <Image
                    src={miniPlex}
                    alt="miniplex"
                    className={styles.miniplexImage}
                  />
                </div>
                <div className={styles.miniplexContainer}>
                  <p className={styles.miniplexParaOne}>
                    Stay informed and inspired with MiniPlex's latest blog
                    posts, featuring industry news, theater tips, and
                    behind-the-scenes stories.
                  </p>
                </div>
                <div className={styles.miniplexContainer}>
                  <p className={styles.miniplexParaTwo}>
                    Creating a mini theater in your home or space can be an
                    exciting endeavor, but it requires careful planning and
                    execution to ensure an unforgettable experience for you and
                    your guests. Here are ten tips to help you create the
                    ultimate mini theater experience <span> Read more</span>
                  </p>
                </div>
                <div className={styles.line}></div>
              </div>
            </section>
            <section>
              <MiniTheaterCards />
            </section>

            <section className={styles.partners}>
              <TrustedPartners />
            </section>

            <section className={styles.FaqSection}>
              <FAQ />
            </section>

            <section className={styles.contactUsSection}>
              <ContactForm />
            </section>

            <section className={styles.footerSection}>
              <Footer />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
