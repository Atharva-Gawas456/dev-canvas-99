const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-nav-bg border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-muted-foreground font-poppins">
            © {currentYear} <span className="text-primary font-medium">[Your Name]</span>. 
            <span className="hidden sm:inline"> Built with passion and precision.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;