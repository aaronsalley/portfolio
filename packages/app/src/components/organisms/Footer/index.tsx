import { post } from '@/src/inc/post';
import Link from 'next/link';
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
  const Blog = (posts: any) => {
    if (!posts) return null;

    const items = [];
    const maxItems = Object.entries(posts).length;

    for (let i = 0; i < maxItems; i++) {
      items.push(
        <li>
          <Link href={posts[i].uri}>{posts[i].title}</Link>
        </li>
      );
    }

    return (
      <section id='blog'>
        <h2>Leadership</h2>
        <ul>{items}</ul>
      </section>
    );
  };

  const AboutMe = () => (
    <section id='about'>
      <h2>About me</h2>
      <p>{bio}</p>
      <h2>Contact</h2>
      <Link href={'#'}>{email}</Link>
      <Link href={'#'}>{phone}</Link>
      <address>{address}</address>
      <Link href={resume.uri}>{resume.label}</Link>
    </section>
  );

  return (
    <footer className={styles['container']}>
      <Blog {...blog} />
      <AboutMe />
    </footer>
  );
}
