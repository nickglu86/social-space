export const dynamic = 'force-static';

import { Metadata } from 'next';

export const metadata: Metadata = {
 
  title: 'About Us',
  description: 'About SocialSpace',
 
};

export default function About() {
      return(
            <main>
                  <h1>About</h1>
                  <p>We are soical media company</p>
            </main>
      )
}