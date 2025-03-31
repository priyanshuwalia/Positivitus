import { React, useState } from "react";
import "./WorkingProcess.css";

const WorkingProcess = () => {
  const [expandedSection, setExpandedSection] = useState(0);

  const processes = [
    {
      id: 1,
      title: "Consultation",
      description:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: 2,
      title: "Research and Strategy Development",
      description:
        "We conduct thorough market research and develop comprehensive strategies aligned with your objectives.",
    },
    {
      id: 3,
      title: "Implementation",
      description:
        "We execute the developed strategies with precision and attention to detail.",
    },
    {
      id: 4,
      title: "Monitoring and Optimization",
      description:
        "Continuous monitoring of performance metrics and optimization of strategies as needed.",
    },
    {
      id: 5,
      title: "Reporting and Communication",
      description:
        "Regular updates and detailed reports on progress and results.",
    },
    {
      id: 6,
      title: "Continual Improvement",
      description:
        "Ongoing refinement and enhancement of strategies based on performance data.",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">
          Our Working Process
        </h2>
        <p className="text-sm text-gray-600 font-medium">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>

      <div className="space-y-4">
        {processes.map((process) => (
          <div
            key={process.id}
            className={`rounded-xl transition-all duration-300 ease-in-out transform hover:shadow-md
                ${
                  expandedSection === process.id
                    ? "bg-gradient-to-r from-green-100 to-green-50 shadow-md"
                    : "bg-white hover:scale-[1.01]"
                }`}
          >
            <button
              onClick={() =>
                setExpandedSection(
                  expandedSection === process.id ? null : process.id
                )
              }
              className="w-full p-5 flex items-center justify-between text-left"
            >
              <div className="flex items-center space-x-6">
                <span
                  className={`text-xl font-semibold w-12 h-12 flex items-center justify-center rounded-full
                    ${
                      expandedSection === process.id
                        ? "bg-green-500 text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                >
                  {String(process.id).padStart(2, "0")}
                </span>
                <span
                  className={`font-medium text-lg transition-colors duration-200
                    ${
                      expandedSection === process.id
                        ? "text-green-700"
                        : "text-gray-700"
                    }`}
                >
                  {process.title}
                </span>
              </div>
              <span
                className={`text-2xl transition-transform duration-200 
                  ${expandedSection === process.id ? "rotate-180" : ""}`}
              >
                {expandedSection === process.id ? "−" : "+"}
              </span>
            </button>

            {expandedSection === process.id && (
              <div className="px-6 pb-5 pt-0">
                <p className="text-gray-600 ml-16 leading-relaxed">
                  {process.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkingProcess;
