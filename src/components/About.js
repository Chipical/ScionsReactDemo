import aboutIMG from "../images/about.png";
import Title from "./Title";
const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutIMG} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>Scions of the Seventh Dawn</h3>
          <p>
            Welcome to the extraordinary realm of Eorzea, where the Scions of
            the Seventh Dawn take center stage as the guardians of hope and
            champions of justice! We are not just an organization; we are a
            fellowship united by a common purpose—to safeguard this vibrant
            world from the encroaching shadows that threaten to plunge it into
            chaos.
          </p>
          <p>
            Picture this: a diverse and dynamic group of individuals, each a
            powerhouse in their own right, coming together to face the
            challenges that would make lesser beings quiver. Led by the
            indomitable Minfilia Warde, we operate from our headquarters in the
            sun-soaked city of Vesper Bay, ready to dive into action whenever
            and wherever the call of duty beckons.
          </p>
          <p>
            Our members span the spectrum of talent and expertise, from
            battle-hardened adventurers to brilliant scholars, all rallying
            under the banner of the Scions. We're not just a team; we're a
            family, bound by the shared pursuit of a greater good. The Waking
            Sands is not just a headquarters; it's a hub of camaraderie,
            strategy, and unwavering dedication.
          </p>
          <p>
            The Scions of the Seventh Dawn aren't just here to play nice with
            politics—we transcend boundaries to face down primal threats,
            unravel the mysteries of the enigmatic Ascians, and stand tall
            against any force that seeks to plunge Eorzea into darkness. As the
            Warrior of Light, you won't just join an organization; you'll become
            a part of a legacy, fighting alongside us to ensure that the realm
            we call home remains a beacon of light in a world teetering on the
            edge. Welcome to the Scions—where heroes rise, alliances form, and
            the adventure of a lifetime awaits!
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
