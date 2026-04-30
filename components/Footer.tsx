// src/components/Footer.tsx

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-6 mt-10">
      <p>© {new Date().getFullYear()} EduERP. All rights reserved.</p>
    </footer>
  );
};

export default Footer;