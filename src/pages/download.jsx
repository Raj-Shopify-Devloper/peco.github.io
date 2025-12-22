import React, { useEffect } from 'react';
import '../style/download.css';
import { initHomeAnimations } from '../script/home-section';

const Download = () => {
    useEffect(() => {
        initHomeAnimations();
    }, []);

    const pdfUrl = "/pdf/PECO - brochure.pdf";

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'PECO - brochure.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="download-page">
            <div className="container">
                <div className="download-content">
                    <h1 className="section-title f-110 f-m-48 white-color w-700 first-font">DOWNLOAD PDF</h1>

                    <div className="pdf-preview-container">
                        <iframe
                            src={pdfUrl}
                            title="PDF Preview"
                            className="pdf-preview-frame"
                        />
                    </div>

                    <button onClick={handleDownload} className="download-btn second-font">
                        DOWNLOAD NOW
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Download;
