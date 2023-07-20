import Link from 'next/link';
import BlogList from '../BlogList';
import styles from './index.module.scss';

interface SiteFooter {
  blog:
    | [
        {
          title: string;
          uri: string;
        }
      ]
    | undefined;
  bio: string;
  email: string;
  phone: string;
  address: string;
  resume: {
    label: string;
    uri: string;
  };
}

export default function SiteFooter({
  blog = [
    {
      title: '',
      uri: '',
    },
  ],
  bio = `NYU Stern MBA specializing in Innovation and Management of Technology
and certified SAFe® 5 Product Owner / Product Manager. More than a
decade in customer and enterprise digital products across healthcare,
e-commerce, nonprofit, and human resource management industries. A
strong, cross-functional leader of diverse teams recognized for
creating delightful digital solutions for real-world human problems.
Intention.
Integration.
Illumination.`,
  email = 'me@aaronsalley.com',
  phone = '917-715-7859',
  address = 'New York, NY',
  resume = {
    label: 'Download Resume (PDF)',
    uri: '',
  },
}: SiteFooter) {
  const AboutMe = () => (
    <section id='about'>
      <h2>About me</h2>
      <p>{bio}</p>
      <h2>Contact</h2>
      <Link href={'mailto:' + email}>{email}</Link>
      <Link href={'tel:' + phone}>{phone}</Link>
      <address>{address}</address>
      <Link href={resume.uri} target='_blank'>
        {resume.label}
      </Link>
    </section>
  );

  return (
    <footer className={styles['container']}>
      <BlogList {...blog} />
      <AboutMe />
    </footer>
  );
}
