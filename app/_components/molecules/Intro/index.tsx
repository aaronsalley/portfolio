import styles from './index.module.scss';

export default function Intro() {
  return (
    <section className={styles['container']}>
      <h1>
        <p>Hi, I’m Aaron.</p>
        <p>I craft solutions that delight and engage people.</p>
      </h1>
      <h2>
        With a strong record of leading cross-functional teams, I bridge the
        technical and business worlds to build products from conceptualization
        to market launch.
      </h2>
      <div>
        <div>
          <h3>Intention</h3>
          ideation & visioning
          <br />
          market research
          <br />
          strategic roadmapping
        </div>
        <div>
          <h3>Integration</h3>
          implementation
          <br />
          cross-functional collaboration
          <br />
          GTM launching
        </div>
        <div>
          <h3>Illumination</h3>
          impact & ROI analysis
          <br />
          data-driven scaling & growth
          <br />
          responsive agility
        </div>
      </div>
    </section>
  );
}
