import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    router.push("/signin"); // Agar login nahi hai to signin pe bhej do
    return null;
  }

  return (
    <>
      <Head>
        <title>Reciepts</title>
      </Head>
      <div className="main-content">
        <div id="navbar">
          <img src="/logo.svg" alt="Care Crumbs logo" className="logo"/>
          <h1>Reciepts</h1>
          <div id="nav-icons">
            <Link href="/cart" className="nav-btn">
              <img src="/images/Cart.svg" alt="Cart" className="nav-icon" />
            </Link>
            <Link href="/profile" className="nav-btn">
              <img src="/images/Profile.svg" alt="Profile" className="nav-icon" />
            </Link>
          </div>
        </div>

        {/* Navigation Links with SVG Icons */}
        <div className="nav-buttons">
          <Link href="/homepage" className="btn">
            <img src="/images/Home.svg" alt="Home" className="icon" />
          </Link>
          <Link href="/search-food" className="btn">
            <img src="/images/Search.svg" alt="Search Food" className="icon" />
          </Link>
          <Link href="/cart" className="btn">
            <img src="/images/Cart.svg" alt="Cart" className="icon" />
          </Link>
          <Link href="/receipt" className="btn">
            <img src="/images/Recipt.svg" alt="Receipt" className="icon" />
          </Link>
          <Link href="/dashboard" className="btn">
            <img src="/images/Dashboard.svg" alt="Dashboard" className="icon" />
          </Link>
          <Link href="/profile" className="btn">
            <img src="/images/Profile.svg" alt="Profile" className="icon" />
          </Link>
        </div>

        <style jsx global>{`
          body {
            margin: 0;
            padding: 0; 
            box-sizing: border-box;
            font-family: 'Nighty Demo', sans-serif;
            background-image: url('/images/Homepagemain.svg');
            background-size: cover;
            background-repeat: no-repeat;
            background-attachment: fixed;
            width: 100%;
            height: 100%;
          }
        `}</style>

        <style jsx>{`
          /* Your existing styles remain the same */
          .main-content {
            display: flex;
            height: 1085px;  
            margin: 0;
            flex-direction: column;
            align-items: flex-start;
            width: 100%;
          }
          
          /* Media queries remain the same */
          @media (max-width: 1024px) {
            .main-content{ height: 650px; }
          }
          @media (max-width: 768px) {
            .main-content{ height: 650px; }
          }
          @media (max-width: 480px) {
            .main-content{ height: 650px; }
          }
          @media (max-width: 320px) {
            .main-content{ height: 650px; }
          }
          @media (max-width: 1200px) {
            .main-content{ height: 840px; }
          }
          @media (max-width: 1600px) {
            .main-content{ height: 840px; }
          }
          @media (max-width: 1920px) {
            .main-content{ height: 840px; }
          }

          #navbar{
            position: fixed;
            width: 100%;
            height: 90px;
            background-color: rgba(81, 80, 80, 0.3);
            backdrop-filter: blur(5px); 
            display: flex;
            align-items: center;
            justify-content: space-between;
            z-index: 100;
          }

          .logo{
            height: 15vh;
            margin-left: 20px;
          }

          #navbar h1{
            color: white;
            font-size: 40px;
            font-family: 'Nighty Demo', sans-serif;
          }
          
          #nav-icons{
            width: 120px;
            height: 100px;
            margin-right: 60px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .nav-buttons{
            position: fixed;
            bottom: 50px;
            left: 50%;
            transform: translateX(-50%);
            width: 800px;
            height: 90px;
            background-color: rgba(84, 82, 82, 0.3);
            backdrop-filter: blur(5px); 
            color: white;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-radius: 50px;
            padding: 0 50px;
            z-index: 100;
          }

          .dish-box{
            position: absolute;
            width: 300px;
            height: 300px;
            background-color: red;
          }

          .grid-container{
            height: 500px;
            width: 600px;
            background-color: white;
          }

          .nav-icon, .icon {
            width: 30px;
            height: 30px;
          }

          .btn, .nav-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }
        `}</style>
      </div>
    </>
  );
}