import React from 'react';
import NavbarComponent from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Card from '../components/Card/Card';

const Home = () => {
  return (
    <>
      <NavbarComponent />
      <h1>Halaman Home</h1>
      <Card
        src="https://s3-alpha-sig.figma.com/img/82f1/1a10/572da9a89bc5f8fe0da12c9a18c352e7?Expires=1650844800&Signature=P8q7Bb6s2~uAHfWwZ5Dz2w39agA~TWLvueU-XRVyqDHwkSB54LGik~CBXcXkunmd0ZBkSU3mGQYepeTXBX-zk3EJCcyCSjD380wh83ew4BeYBJk2p6WiKxiaTTYpox2CmMyLmlal7Ohho5ReEp1liXc-tgWbg8LJfZkX~pCq9MgZPdV-zI704mrIaDriAvGfjSODJpFLUjp9Mxr-F37YZ84KjmfcgAObeVwCit2xWcuk4FJeBHsMly7gFEhoOWKKA5u7x0YMzogTVxTu4Y0uC2iwc6dtQcnAwG2NMixGxA5UUzRBK9KqVLeva6vIOBei7cs1tsSOEi9yeaWBXqmFSw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        title="Chicken Kare"
      />
      <Footer />
    </>
  );
};

export default Home;
