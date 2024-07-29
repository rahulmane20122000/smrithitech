import { useState } from "react";
import Accordion from "../../componnets/accordian/accordian";
import { CardStack } from "../../componnets/card-stack";

const content = [
  {
    title: "Data Science & Artificial Intelligence",
    content:
      "Get hands-on experience with data science course including Python, Machine Learning, Deep Learning, Natural Language Processing (NLP), MLOps, Recurrent Neural Networks (RNNs), Generative Adversarial Networks (GANs), Attention, Transformers, BERT, and Business Intelligence Tools.",
    image:
      "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Cyber Security & Ethical Hacking",
    content:
      "Enroll in our comprehensive ethical hacking course for hands-on training across vital domains such as Network Security, Cloud Security, Ethical Hacking, Penetration Testing, Web Application Security, Mobile Application Security and Exploitation Techniques with countermeasures.",
    image:
      "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DA",
  },
  {
    title: "Investment Banking & Financial Analytics",
    content:
      "Gain hands-on experience in Financial Analysis, Corporate Finance, Equity, Fixed Income, Derivatives, Wealth Management, Equity Research, Financial Modeling, Merger and Acquisition Valuation, coupled with practical exposure to Prompt Engineering, Python, and Business Intelligence Tools.",
    image:
      "https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DA",
  },
];

const EdTechServices = () => {
  const [openAccordian, setOpenAccordian] = useState(0);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col pt-10">
        {content.map((item, index) => (
          <Accordion
            key={index}
            className="z-10"
            expanded={openAccordian == index}
            setExpanded={setOpenAccordian}
            heading={
              <h2 id="accordion-collapse-heading-1">
                <button
                  onClick={() => {
                    setOpenAccordian(index);
                  }}
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border  border-gray-200  hover:bg-gray-100 "
                  aria-expanded="true"
                  aria-controls="accordion-collapse-body-1"
                >
                  <span> {item.title}</span>
                  <svg
                    data-accordion-icon
                    className="w-3 h-3 rotate-180 shrink-0"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
            }
          >
            <div className="">
              <div className="p-5 border  border-gray-200 ">
                <p className="mb-2 text-gray-800 ">{item.content}</p>
              </div>
            </div>
          </Accordion>
        ))}
      </div>
      <div className="flex items-start md:justify-center p-10">
        {/* <img
            className="p-1 w-full h-full object-cover rounded"
            src={content[openAccordian].image}
          /> */}
        <CardStack
          items={content.map((i) => ({
            id: i.title,
            content: (
              <div className="w-full md:w-64 h-96 rounded m-1 overflow-hidden">
                <img className="w-full h-full object-cover" src={i.image} />
              </div>
            ),
          }))}
        />
        {/* <BorderBeam size={250} duration={12} delay={9} /> */}
      </div>
    </div>
  );
};

export default EdTechServices;
