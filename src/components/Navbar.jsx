const styles = {
  navigation: {
    width: "100%",
    height: "50px",
    backgroundColor: "blue",
  },

  ul: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-end",
    margin: "20px 0px",
    padding: "0 25px",
  },

  li: {
    listStyleType: "none",
    paddingRight: "10px",
  },
};

export default function Navbar() {
  return (
    <>
      <div className="navigation" style={styles.navigation}>
        <ul style={styles.ul}>
          <li style={styles.li}>Home</li>
          <li style={styles.li}>Projects</li>
          <li style={styles.li}>Pricing</li>
          <li style={styles.li}>Contact</li>
        </ul>
      </div>
    </>
  );
}
