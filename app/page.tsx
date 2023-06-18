import Image from "next/image";
import styles from "./page.module.css";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";
 

export default async function Home() {
  console.log({authOptions})
  const session = await getServerSession(authOptions);
 
 
  if (!session){
    // redirect('/api/auth/signin');
    return(
      <main className={styles.main}>
         <p>You must be signed in...</p>
      </main>
    )
  }
  return (
    <main className={styles.main}>
      <div>
        <h1>Welcome to Social Space!</h1>
        <p>
          A next-gen social media app to connect with frens inspired by MySpace
        </p>
        <p>To get started, sign up for an account</p>
      </div>
    </main>
  );
}
