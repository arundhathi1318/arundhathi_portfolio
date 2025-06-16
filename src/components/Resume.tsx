import { Download, FileText } from 'lucide-react';

const Resume = () => {
  const resumeUrl = '/NagaArundhathi_WebDevlopment_Resume.pdf' ;// Replace with your actual file path

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = resumeUrl;
    a.download = 'Arundhathi_Resume.pdf';
    a.click();
  };

  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Resume</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Click below to download my latest resume and learn more about my experience.
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-card border border-border rounded-xl p-10 text-center">
          <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-6">
            <FileText className="w-8 h-8 text-accent-foreground" />
          </div>

          <h3 className="text-xl font-semibold mb-4">My Resume</h3>
          <p className="text-muted-foreground mb-6">
            Download the PDF version of my resume to see my qualifications and projects.
          </p>

          <button
            onClick={handleDownload}
            className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
          >
            <Download className="w-4 h-4" />
            <span>Download Resume</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resume;
