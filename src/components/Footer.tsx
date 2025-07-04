const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-teal-900 text-white py-8">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm text-teal-100">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-1">
              <li>Dr. Serena Blake, PsyD</li>
              <li>Clinical Psychologist</li>
              <li>1287 Maplewood Drive</li>
              <li>Los Angeles, CA 90026</li>
              <li>📞 (323) 555-0192</li>
              <li>📧 serena@blakepsychology.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Office Hours</h3>
            <ul className="space-y-1">
              <li className="font-medium">In-person Sessions:</li>
              <li>Tuesday & Thursday</li>
              <li>10:00 AM – 6:00 PM</li>
              <li className="mt-3 font-medium">Virtual Sessions (Zoom):</li>
              <li>Monday, Wednesday & Friday</li>
              <li>1:00 PM – 5:00 PM</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-1">
              <li>• Anxiety & Stress Management</li>
              <li>• Relationship Counseling</li>
              <li>• Trauma Recovery</li>
              <li className="mt-3 font-medium">Session Fees:</li>
              <li>Individual: $200</li>
              <li>Couples: $240</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-teal-800 text-center text-teal-200 text-sm">
          <p>&copy; {year} Dr. Serena Blake Psychology Practice. All rights reserved.</p>
          <p className="mt-2">
            This website is for informational purposes only and does not constitute medical advice. 
            Please consult with a qualified healthcare provider for personalized treatment recommendations.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
