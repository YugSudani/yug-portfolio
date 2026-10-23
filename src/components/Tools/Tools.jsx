import { forwardRef, useState } from "react";
import { Download, ExternalLink, Loader2, Check } from "lucide-react";
import "./Tools.css";

const toolsData = [
  {
    title: "BeeSkip",
    badge: "Chrome Extension",
    description: (
      <>
        A lightweight browser extension that automatically{" "}
        <strong>skips YouTube ads</strong> with smooth bee animations and
        zero interruptions.
      </>
    ),
    tech: ["Chrome Extension", "Manifest V3", "JavaScript"],
    isDownload: true,
    url: "/beeSkip.zip",
    downloadName: "beeSkip.zip",
    buttonText: "Download ZIP",
  },
  {
    title: "AI Tools Web App",
    badge: "AI Web App",
    description:
      "Full-stack dashboard integrating multiple AI utilities with secure login, session handling, and dynamic tool routing.",
    tech: ["React", "Node.js", "Express", "MongoDB", "OpenAI API"],
    isDownload: false,
    url: "https://aitools-bs8f.onrender.com/",
    buttonText: "Live Demo",
  },
];

const Tools = forwardRef(({ asSection = false, className = "" }, ref) => {
  const [downloadStates, setDownloadStates] = useState({});

  const handleDownload = (tool) => {
    const currentStatus = downloadStates[tool.title] || "idle";
    if (currentStatus !== "idle") return;

    // Step 1: Starting... (600ms)
    setDownloadStates((prev) => ({ ...prev, [tool.title]: "starting" }));

    setTimeout(() => {
      // Step 2: Downloading... (1300ms) and trigger actual download
      setDownloadStates((prev) => ({ ...prev, [tool.title]: "downloading" }));

      const link = document.createElement("a");
      link.href = tool.url;
      link.download = tool.downloadName || "download.zip";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        // Step 3: Downloaded! (900ms)
        setDownloadStates((prev) => ({ ...prev, [tool.title]: "completed" }));

        setTimeout(() => {
          // Revert back to original state
          setDownloadStates((prev) => ({ ...prev, [tool.title]: "idle" }));
        }, 900);
      }, 1300);
    }, 600);
  };

  const content = (
    <div className="tools-inner-container">
      {toolsData.map((tool, index) => (
        <div key={tool.title} className="tool-block-wrapper">
          <div className="tool-item">
            <div className="tool-header">
              <div className="tool-title-wrap">
                <h4>{tool.title}</h4>
                <span className="project-badge">{tool.badge}</span>
              </div>
            </div>
            <p className="tool-description">{tool.description}</p>
            <div className="tool-tech">
              {tool.tech.map((tech, techIndex) => (
                <span key={techIndex}>{tech}</span>
              ))}
            </div>

            {tool.isDownload ? (
              (() => {
                const status = downloadStates[tool.title] || "idle";
                return (
                  <button
                    type="button"
                    onClick={() => handleDownload(tool)}
                    disabled={status !== "idle"}
                    className={`tool-action-btn btn btn-primary ${
                      status !== "idle" ? `is-${status}` : ""
                    }`}
                    aria-label={`Download ${tool.title}`}
                  >
                    {status === "starting" && (
                      <>
                        <Loader2 size={15} className="btn-spinner" />
                        <span>Starting...</span>
                      </>
                    )}
                    {status === "downloading" && (
                      <>
                        <Download size={15} className="btn-bounce" />
                        <span>Downloading...</span>
                        <div className="download-progress-bar" />
                      </>
                    )}
                    {status === "completed" && (
                      <>
                        <Check size={15} className="btn-check-pop" />
                        <span>Downloaded!</span>
                      </>
                    )}
                    {status === "idle" && (
                      <>
                        <Download size={15} />
                        <span>{tool.buttonText}</span>
                      </>
                    )}
                  </button>
                );
              })()
            ) : (
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="tool-action-btn btn btn-primary"
              >
                <span>{tool.buttonText}</span>
                <ExternalLink size={15} />
              </a>
            )}
          </div>

          {index < toolsData.length - 1 && (
            <div className="tools-card-divider" />
          )}
        </div>
      ))}
    </div>
  );


  if (asSection) {
    return (
      <section id="tools" className="section tools-section" ref={ref}>
        <div className="container">
          <h2 className="section-title gradient-text">Tools</h2>
          <div className="tools-standalone-grid">
            <div className={`tools-card glass ${className}`}>{content}</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div
      ref={ref}
      className={`project-card tools-card glass ${className}`}
    >
      {content}
    </div>
  );
});

Tools.displayName = "Tools";

export default Tools;
