
import { useState } from 'react';
import { Upload, Download, FileText, Check } from 'lucide-react';

const Resume = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setIsUploading(true);
      // Simulate upload process
      setTimeout(() => {
        setUploadedFile(file);
        setIsUploading(false);
      }, 2000);
    }
  };

  const handleDownload = () => {
    // Simulate download
    if (uploadedFile) {
      const url = URL.createObjectURL(uploadedFile);
      const a = document.createElement('a');
      a.href = url;
      a.download = uploadedFile.name;
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">Resume</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Download my latest resume or upload your own for collaboration opportunities.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Upload Section */}
            <div className="bg-card border border-border rounded-xl p-8 card-hover">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Upload className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4">Upload Resume</h3>
                <p className="text-muted-foreground mb-6">
                  Upload your PDF resume for potential collaboration
                </p>

                <div className="relative">
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    data-cursor-hover
                  />
                  <button 
                    className="w-full px-6 py-3 border-2 border-dashed border-border rounded-lg hover:border-primary transition-colors flex items-center justify-center space-x-2"
                    disabled={isUploading}
                  >
                    {isUploading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                        <span>Uploading...</span>
                      </>
                    ) : uploadedFile ? (
                      <>
                        <Check className="w-4 h-4 text-green-500" />
                        <span>Uploaded: {uploadedFile.name}</span>
                      </>
                    ) : (
                      <>
                        <Upload className="w-4 h-4" />
                        <span>Choose PDF file</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Download Section */}
            <div className="bg-card border border-border rounded-xl p-8 card-hover">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <FileText className="w-8 h-8 text-accent-foreground" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4">My Resume</h3>
                <p className="text-muted-foreground mb-6">
                  Download my latest resume to learn more about my experience
                </p>

                <button 
                  onClick={handleDownload}
                  disabled={!uploadedFile}
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  data-cursor-hover
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Info */}
          <div className="mt-12 bg-muted/50 rounded-xl p-8">
            <h4 className="text-lg font-semibold mb-4 text-center">Quick Overview</h4>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">20+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
