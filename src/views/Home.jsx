import React from 'react';
import NavbarComponent from '../components/Navbar/Navbar';
import { Input } from 'reactstrap';
import { BiSearch } from 'react-icons/bi';
import styles from '../assets/styles/styles';
import '../assets/styles/style.css';

import CardMedium from '../components/CardMedium/CardMedium';
import Card from '../components/Card/Card';
import Footer from '../components/Footer/Footer';

import bgVector from '../assets/img/bgvector.webp';
import vegetable from '../assets/img/vegetable.webp';
import foodOne from '../assets/img/foodone.webp';

const Home = () => {
  return (
    <>
      <NavbarComponent />
      <div className="container-fluid" style={styles.containerHome}>
        <div className="row">
          <div className="col-sm" style={styles.content} />
          <div className="col-3" style={styles.bgDecoration} />
        </div>
        <div className="container-lg" style={styles.boxAction}>
          <div className="row">
            <div className="col" style={styles.content}>
              <h1 className="font" style={styles.titleContent}>
                Discover Recipe & Delicious Food
              </h1>
              <div style={styles.search}>
                <BiSearch style={styles.iconSearch} />
                <Input
                  className="font outlineNone"
                  placeholder="search recipe"
                  style={styles.searchInput}
                />
              </div>
            </div>
            <div className="col">
              <div style={styles.decoration}>
                <img src={bgVector} alt="vector" style={styles.bgVector} />
                <img src={vegetable} alt="vegetable" style={styles.vegetable} />
                <img src={foodOne} alt="Food" style={styles.foodOne} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="container-fluid" style={styles.boxPopular}>
          <h1 style={styles.titlePopular} className="font">
            Popular For You
          </h1>
          <div className="row" style={styles.mtMedium}>
            <div className="col-sm" style={styles.imagePopularContainer}>
              <CardMedium
                src="https://s3-alpha-sig.figma.com/img/fb0d/a674/ee224fca0fd31394f7e036dec5eeb4ca?Expires=1650844800&Signature=gPXeHdgMPMqVtGz6~SGrs0d2YG822sa-bVWEoh0wOUSgajin6YbRtHTd0S8F9NjIgFOoHyB-VaPUYqIS7KxCS8yYwq0ckPgLIqejYFrEqwI9AJKGTxmXAXDxH~PMIZ5wuZYvaD8quPTA7q8HNbz1bKeyGZja0Kv94H3lcyzcoXhKghmWuN9BqNt8pY2E9Zms4OFaxakIdTW9XPbs7ED9~30H64oHrOxmbQY6Mv7pqLX5S3-flBAtmzmErvNuUGQ-l1JfQ7d5slAT42vUpesfEJKNBGk-dArS36WgXrRmHh6-5HxWPUdBYJFI5v308xrapnAX06cUKVbnpgrloI8MWw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                title="Pizza Lamoa"
                alt="Pizza Lamoa"
                href="/"
              />
            </div>
            <div className="col-sm" style={styles.imagePopularContainer}>
              <CardMedium
                src="https://s3-alpha-sig.figma.com/img/b704/55ae/6c4d7c1bef2c9e97e8df92d4be8a1d1a?Expires=1650844800&Signature=HlwCLfdHWtZA7ssS3Zo27Gsziiye8wPWDK1qW8vdDugIEN0iA9JkX34T35enJYdhcBxsg~J2RbDGJhMDwaeq-3Z15H1d5KR7IpQmcylteLmaCPdPcDe0GWRlVvneCZXIJb1b~E4Vp0NF4rTpmpiGBUStz36hAVCoA26MnFnOpdnFGI7YrpGhH7yTS~anexY9EYIu5ySVWaZnc1uC4BnAfVtFVbGUTs9c70f8JIKLagNUBIF-OLRQWttHC~UBP0XXokE7oXA8a4dntVkyDaVVevN56au87d0Aeimu6CyT0iD9d-bWV6xuHxqUMyQMCoLBCINZscHQgucEs2VWVmrK3w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                title="King Burger"
                alt="King Burger"
                href="/"
              />
            </div>
          </div>
        </div>

        <div className="container-fluid" style={styles.boxPopular}>
          <h1 style={styles.titlePopular} className="font">
            New Recipe
          </h1>
          <div className="row" style={styles.mtMedium}>
            <div className="col-sm" style={styles.containerNewRecipe}>
              <div style={styles.bgObject} />
              <div style={styles.boxCard}>
                <CardMedium
                  src="https://s3-alpha-sig.figma.com/img/a940/c01b/c2792cef25a0bfa97a2bd8c65b80f9c5?Expires=1650844800&Signature=IqXV5VER~KytLlE8ceWM2junqiT-ZBiY5A8A9nJ4V7hirYHrdAHK6y8XViTx1FEQyEYmvBjNpg1myRCM8ss6nMkpJoZbv2pV4LVcBAUl-7xdaYKHKPh3ymqSC~18Nl7eUfhVdxoaHxbf5OVLa8HNdoQZof8xAxyfFtCi2vy63DqPGWW5fP1BKkcf647W8YMWfrtaxJ6XqzrRp~EVNsXZ5Nd~G9U~ToagswAnz9qPAVRONj5QpNrLqjH4wi3Hehlttq4FodSFj7MVfid5HRrO8DVYaMzAx789n4mCszmrb5TjlyVa~lOa4URyPRM7xigBPSHw~Z6NihWmHbv8WJOgbA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  alt="Chicken Bone"
                />
              </div>
            </div>
            <div className="col-sm" style={styles.boxAboutRecipe}>
              <div>
                <h1 className="font" style={styles.aboutTitle}>
                  Healthy Bone Broth Ramen (Quick & Easy)
                </h1>
                <div style={styles.line} />
                <p style={styles.textAbout}>
                  Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen
                  in a hurry? That’s right!
                </p>
                <button className="button">Learn More</button>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid" style={styles.boxPopular}>
          <h1 style={styles.titlePopular} className="font">
            Show Recipe
          </h1>
          <div className="container">
            <div className="row" style={styles.mtMedium}>
              <div className="col-sm">
                <Card
                  src="https://s3-alpha-sig.figma.com/img/82f1/1a10/572da9a89bc5f8fe0da12c9a18c352e7?Expires=1650844800&Signature=P8q7Bb6s2~uAHfWwZ5Dz2w39agA~TWLvueU-XRVyqDHwkSB54LGik~CBXcXkunmd0ZBkSU3mGQYepeTXBX-zk3EJCcyCSjD380wh83ew4BeYBJk2p6WiKxiaTTYpox2CmMyLmlal7Ohho5ReEp1liXc-tgWbg8LJfZkX~pCq9MgZPdV-zI704mrIaDriAvGfjSODJpFLUjp9Mxr-F37YZ84KjmfcgAObeVwCit2xWcuk4FJeBHsMly7gFEhoOWKKA5u7x0YMzogTVxTu4Y0uC2iwc6dtQcnAwG2NMixGxA5UUzRBK9KqVLeva6vIOBei7cs1tsSOEi9yeaWBXqmFSw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  title="Chiken Kare"
                  alt="Chicken Kare"
                  href="/"
                />
              </div>
              <div className="col-sm">
                <Card
                  src="https://s3-alpha-sig.figma.com/img/a8f2/635e/cd160da3e1426c3f659218e145224ffc?Expires=1650844800&Signature=AWqVesCc60Bx9-jbZQUCkxJ8F-hHJ6tcvRoEbbbtN1ir4lyqOwUd7B3QsajZZL8HzF~am7NZfx8J2UR3HXcze-WGo21aUQLZHn7xny1vrd6ukJplpZiGxjWEZwQR788HrsGboKK2tRwQvIUiWf10azIYts9rk3LkYU05Ygxdm7aTpsRtVYdiXhvB98wiRXIuRL3eBIpsUbG3qoNZi-HcQWsi6q2HdMtBJ92rBIw4OvE~2OGNM~GJerfG6WZRGMlXmQDx2OwtHrf1Z30djIBZyDOy9aOVNrPlAvaH9qZnjyHuQnFOUKRVtlXqAg1NA9YqQ5MDs6p68ZwsofjnYOOlCQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  title="Bomb Chicken"
                  alt="Bomb Chicken"
                  href="/"
                />
              </div>
              <div className="col-sm">
                <Card
                  src="https://s3-alpha-sig.figma.com/img/bde4/c043/7c36ec9fa871caac4eb5b3658eea9aaa?Expires=1650844800&Signature=gCc-LO6k1~z8w0--bzkD8V5EdG53KHfcAO68dDd3XmM7Zq85qzc7tIUnMSmBnZTw9peHdcS8CjF0vIhqIiaQbLxadlWoa0jDBrZMk0TEAxSLqCYxYTy430H3k5yEfaDhm2Yg-nk1xySLj3Yz5kD32cM-BJTBTaJcCmyblyWgUfBwNjgWwA3jjdPwOg-V~3jgPlLs4vH66NcXETE9HqVwYYxKiuOwqB9DCbcXSpYvCA5qkJfzZEr0-YxpvrBt2jYXWZCk9~469SXUA4arlK5nwMPTHfhLEocEcuDmqT23w2aw5m3HqyukFwBFHmeiixNpT3I3MqfYOoca8fuTBQ4k-w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  title="Banana Smothie Pop"
                  alt="Banana Smothie Pop"
                  href="/"
                />
              </div>
            </div>

            <div className="row" style={styles.mtMedium}>
              <div className="col-sm">
                <Card
                  src="https://s3-alpha-sig.figma.com/img/72b9/af51/19713936f65f2db089da584640f4b823?Expires=1650844800&Signature=XA8oC-ToCYUoPSBdCQQsPUTm8rofv-pXbkypwa42BM7C8xFx6IhB5rWn56YutTF98bpFZ6a3A6y4JEnBTotUdqj3Gi-N-~9TGSANWOMtQxysQ3U1YAb1aUisM6gVB9Lu8zIj1kqolfKM2~59WPU83dZN2D9EcemYScs~Xygdzftqg8~rJo3t4t99tAoJa4O2fOxoPXdtoHnD9EQ4kjNiqQs3DsG8k5b4NmZDUI21FEl~EtihKRewZoTYeS~JFNaa3rzh7vhhshRoQtC--hrPD~T~Jj5MhLjkeSNiKPo540tR3tD1onhslxHn0GzLIgRWr6u1qwX5VCTRy~-QDrBlWA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  title="Coffe Lava Cake"
                  alt="Coffe Lava Cake"
                  href="/"
                />
              </div>
              <div className="col-sm">
                <Card
                  src="https://s3-alpha-sig.figma.com/img/d978/3164/ec253e0e662a4e3aa070cee5202021e3?Expires=1650844800&Signature=VsVFot52rEf2h7~Qf89BFV7C2Fxn~0CpXzfw5G5ZPNfgUathUis0EYuptZiZBjMyiAv5UvT4ydEd-YZzVq3taK0oPdusI36tuFVcB4TVM4rv~htvkFvw8xBg8X5iGYno1Yb2hPN-2QsCKJUo6EZRKezBFZJm2hjXMqBbKtbKKslMdo8xARUXJC2jxudE2eacVaRY2AvI9mmAshZvIbOibnGlvKEGYoPsYgQooxe9Uc2vDLxBvD-RGoEbDrd5N145BvDXFrX7d543nTKsZAG8VWax1GnjHGwCo7UADa5GePgAotHloi1whD6gwddwSfuWn95RZL25tDAWLcjaTfFW7g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  title="Sugar Salmon"
                  alt="Sugar Salmon"
                  href="/"
                />
              </div>
              <div className="col-sm" style={styles.mbMedium}>
                <Card
                  src="https://s3-alpha-sig.figma.com/img/0f19/c165/bb6555764d018e0687640abdfde17ba9?Expires=1650844800&Signature=edV6gYzdGd9GyPHxIiqNEaNL4neIUirOGSs~ssgNRRpWtMSnW3kL6J8bMxE3F1Xw4ONzR9g1oHOCE4h-~WGMG6BbnmBAG3UTzvv5IlhcRTGTZlDUUZeikPACtm3Cti3xWDzSXJuA-2u6diC6kFa9DEXV2QNPX1GbCcABN5hjtHIdUyy2vDnU84GN6scaOoIZdTsIpLoqffcF-FrSHpjNj4GOX9z7KxBE~NbJbGX4d5EdaHnj9susAyxkqKNRJeMz6pE8dRPO65C~PPxJOSOb860QZCHivzOW~mN2luw7CFKJohMKkOF3WmLgEuv5t4b6G5DeVN8~NMheCakrx1ihYQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  title="Indian Salad"
                  alt="Indian Salad"
                  href="/"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
