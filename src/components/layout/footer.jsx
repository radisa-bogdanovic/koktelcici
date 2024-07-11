function Footer() {
  return (
    <div style={{ padding: "8px", backgroundColor: "#000", color: "#fff" }}>
      <p style={{ textAlign: "center" }}>
        Ovo je vezbanje od strane Radise godine {new Date().getFullYear()}
      </p>
    </div>
  );
}

export default Footer;
