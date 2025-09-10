import React from "react";
import "./Team.css";
import { Link } from "react-scroll";
import { FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { teamMembers } from "../../data";
import { Autoplay } from "swiper/modules";

const Teem = () => {
  return (
    <section id="team">
      <div className="container">
        <div className="section__header">
          <h3 className="title">Meet Our Experts</h3>
          <h3 className="sub__heading">Building with Excellence</h3>
          <p className="description">
            Meet the experts who bring excellence and innovation to every
            project. Get to know our dedicated team making your vision a
            reality.
          </p>
          <Link to="contact" className="flex__center btn primary">
            Let's Talk No <FaArrowRight />{" "}
          </Link>
        </div>
        <div>
          <Swiper
            grabCursor={true}
            slidesPerView={1}
            loop={true}
            spaceBetween={15}
            autoplay={true}
            speed={5000}
            modules={[Autoplay]}
            breakpoints={{
              600: {
                slidesPerView: 2,
              },
            }}
            className="members__container"
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide className="member" key={index}>
                <div className="image__container">
                  <img src={member.image} alt="" />
                </div>
                <div className="details">
                  <h4>{member.fullName}</h4>
                  <p className="muted">{member.title}</p>
                </div>
                <div className="flex__center social__container">
                  {member.socialMedias.map((social, index) => (
                    <a
                      href={social.href}
                      target="_blank"
                      className="flex__center icon"
                      key={index}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Teem;
