import React from "react";
import resumePDF from "../assets/resume/Luis_Revilla_resume.pdf";
import pdfIcon from "../assets/PNGs/pdf.png";

const myResumePDF = resumePDF;

function Resume() {
  return (
    <div className="resume-page">
      {/* Large inline PDF viewer */}
      <div className="resume-page__viewer">
        <iframe
          src={myResumePDF}
          className="resume-page__iframe"
          title="Resume PDF"
        />
      </div>

      {/* Download button */}
      <a
        href={myResumePDF}
        download
        className="resume-page__download-button"
        aria-label="Download Resume"
      >
        <img src={pdfIcon} alt="" className="resume-page__download-icon" />
        Download Resume
      </a>
    </div>
  );
}

export default Resume;
