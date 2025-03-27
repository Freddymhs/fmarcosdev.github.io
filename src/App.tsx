import "./App.css";
import Home from "./components/pages/aboutme/Home";
import pdfPath from "./generate-resume-files-by-workflow/cv.pdf";

function App() {
  //   const handleDownloadCV = () => {
  //     const link = document.createElement("a");
  //     link.href = pdfPath;
  //     link.download = "cv.pdf";

  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   };
  //   <button
  //   onClick={handleDownloadCV}
  //   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  // >
  //   Download CV PDF
  // </button>
  return <Home />;
}

export default App;
