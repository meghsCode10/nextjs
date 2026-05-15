import { useSession, signOut, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Profile() {
  const { data: session } = useSession();
  const router = useRouter();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Get session on component mount to ensure we have the latest data
    const fetchSession = async () => {
      const sessionData = await getSession();
      if (sessionData) {
        console.log("Session data:", sessionData); // Debug session data
        setUserData(sessionData.user);
      }
    };

    fetchSession();
  }, []);

  if (!session) {
    router.push("/signin"); // Redirect if not logged in
    return null;
  }

  // Display mobile number with fallback
  const mobileNumber =
    userData?.mobile || session?.user?.mobile || "No mobile number available";

  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <div className="main-content">
        <div id="navbar">
          <img src="/logo.svg" alt="Care Crumbs logo" className="logo" />
          <h1>Profile</h1>
          <div id="nav-icons">
            <Link href="/cart" className="nav-btn">
              <img src="/images/Cart.svg" alt="Cart" className="nav-icon" />
            </Link>
            <Link href="/profile" className="nav-btn">
              <img
                src="/images/Profile.svg"
                alt="Profile"
                className="nav-icon"
              />
            </Link>
          </div>
        </div>

        <div className="profile">
        <div className="profile-option">
          <div className="profilecard">
            {/* Profile Card */}
            <div className="profileimg">
              <img
                src={session.user.image || "/default-avatar.png"}
                alt="User Avatar"
              />
            </div>
            <div className="userdetails">
              <h2 className="username">{session.user.name} </h2>
              <p className="useremail">{session.user.email}</p>
              <p className="usermobile">{mobileNumber}</p>

              {/* Social Links */}
              <div className="userlinks">
                <a href="https://linkedin.com" className="linkedin-btn">
                  <img src="/images/Linkedin.svg" />
                </a>
                <a href="https://instagram.com" className="github-btn">
                  <img src="/images/Github.svg" />
                </a>
                <a href="https://instagram.com" className="website-btn">
                  <img src="/images/website.svg" />
                </a>
              </div>
            </div>
          </div>

          <div className="profileoptions">
            <a href="" className="">
              Edit Profile
            </a>
            <a href="" className="">
              About
            </a>
            <a href="" className="">
              Help & Feedback
            </a>
            <a href="" className="">
              Privacy & Security
            </a>
          </div>
          </div>

          <div className="terms-sign">
          {/* Terms & Services */}
          <div className="termsandservices">
            <h3>Terms & Services</h3>
            <p>
              Care Crumbs facilitates food donations. Users agree to donate and
              receive food responsibly, ensuring safety and accurate
              descriptions. We are not liable for food quality or health issues.
              Users are responsible for their conduct and information. We may
              modify these terms. Donors must follow food safety guidelines.
              Recipients must use donations appropriately. Misuse can lead to
              account termination. Participation is voluntary. For emergencies,
              contact local services.
            </p>
          </div>

          {/* Logout Button */}
          <button onClick={() => signOut()} className="signoutbutton">
            Signout
          </button>
        </div>
        </div>

        {/* Bottom Navigation */}
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
            font-family: "Nighty Demo", sans-serif;
            background-image: url("/images/Homepagemain.svg");
            background-size: cover;
            background-repeat: no-repeat;
            background-attachment: fixed;
            width: 100%;
            height: 100%;
          }
        `}</style>

        <style jsx>{`
          .main-content {
            display: flex;
            height: 100vh;  
            margin: 0;
            flex-direction: column;
            align-items: center;
            width: 100%;
            justify-content: cenetr;
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

        .nav-buttons {
         position: fixed;
         bottom: 50px;
         left: 50%;
         transform: translateX(-50%);
         width: 90%; /* Default width is 90% of the viewport */
         max-width: 800px; /* Limits the width for larger screens */
         height: 8vh; /* Default height is 8% of the viewport height */
         background-color: rgba(84, 82, 82, 0.3);
         backdrop-filter: blur(5px);
         color: white;
         display: flex;
         justify-content: space-between;
         align-items: center;
         border-radius: 50px;
         padding: 0 5vw; /* Default padding based on viewport width */
         z-index: 100;
         box-sizing: border-box; /* Ensures padding is included in width/height calculations */
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

          .social-btn {
            background-color: rgba(255, 255, 255, 0.1);
            padding: 0.5rem 1rem;
            border-radius: 20px;
            transition: all 0.3s ease;
            
          }

          .social-btn:hover {
            background-color: rgba(255, 255, 255, 0.2);
          }

         .profile {
           margin-top: 15vh; 
           margin-left: 5%; 
           margin-right: 5%; 
           background-color: ;
           display: flex;
           flex-direction: row;    //////
           width: 60%; 
           height: 65%; 
           box-sizing: border-box; 
           }

           .profile-option{
           display: flex;
           flex-direction:column;
           }

           .profileimg{
          border-radius: 50%;
          height: 25vh;
          
          display: flex;
          align-items: center;
          justify-content: center;
          }

          .profile img{
          border-radius: 50%;
          height: 25vh;
          }


          .profilecard{
          background-color: rgba(255, 255, 255, 0.2);
          diplay: flex;
          width: 42%;
          height: 25vh;
          display: flex;
          align-item: center;
          border-radius: 150px 50px 50px 150px;
          }

          .profileoptions{
          display:flex;
          flex-direction: column;
          }

          .userdetails{
          color: white;
          margin-left: 1%;
          width: 56%;
          height: 100%;
         
          display : flex;
          align-items: center;
          justify-content: space-between;
          flex-direction: column;
          border-radius: 40px;
          padding: 0 10px
          }

          .userdetails h2{
          font-size: 1.5rem;
          margin-top: 20px;
          margin-bottom: 0;
          color: #FE6807;
          background-color: rgba(255, 255, 255, 0.1);
          text-align: center;
          border-radius: 25px;
          padding: 5px 10px;
         
          }

          
          .userdetails p{
          font-size: 0.8rem;
           background-color: rgba(255, 255, 255, 0.1);
          text-align: center;
          border-radius: 25px;
          margin-bottom: 0;
          padding: 5px 10px;
          }

          .usermobile p{
          margin-botton 10px;
          }

          .userlinks{
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          height: 20vh;
          
          }

          
          .linkedin-btn{
          background-color: #Fe6807;
          Border-radius: 25px;
          padding: 5px 5px;
          }
          .github-btn{
          background-color: #Fe6807;
          Border-radius: 25px;
          padding: 5px 5px;
          }
          .website-btn{
          background-color: #Fe6807;
          Border-radius: 25px;
          padding: 5px 5px;
          }

          .userlinks img{
          height: 3vh;
          padding: px;
          transition: 0.5s;
          }

          .userlinks  img:hover {
          transform: translateY(-10px);
          height: 3vh; 
        }

        .terms-sign{
        display: flex;
        flex-direction: column;
        }

        .termsandservices{
        display: flex;
        background-color: ;
        flex-direction: column;  /* Items vertically aayenge */
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 50%;
        
         }
       
        .termsandservices h3{
        font-size: 2rem;
        color: white;
        }


        .termsandservices p{
        font-size: 1.5rem;
        color: white;
        }
 
         
        .profileoptions{
        display: flex;
        }
      
        .signoutbutton{
        background-color: #FE6807;
        
        border-radius: 25px;
        padding: 10px 20px;
        border:none;
        width: 100px;
        height: 50px;
        color: white;
        font-family: 'Nighty Demo', sans-serif;
        font-size: 20px;
        transition: 0.5s;
        }

        .signoutbutton:hover{
        background-color:rgb(255, 255, 255);
        
        border-radius: 25px;
        padding: 10px 20px;
        border:none;
        width: 100px;
        height: 50px;
        color: #FE6807;
        font-family: 'Nighty Demo', sans-serif;
        font-size: 20px;
        ;
        }

        `}</style>
      </div>
    </>
  );
}
