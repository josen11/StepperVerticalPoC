import React, { useState, useRef } from "react";
import { Stepper } from "primereact/stepper";
import { StepperPanel } from "primereact/stepperpanel";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import "./DemoVerticalCustom.css";

export default function BasicDemo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepperRef = useRef(null);

  const steps = [
    {
      id: "step1",
      icon: "pi pi-check-circle",
      title: "Revision de CV",
      subtitle: "Filtro Operador",
      lastModified: "Abril 4, 2024",
      content: (
        <>
          <div className="step-content align-items-start">
            <h4 >Requisitos</h4>
            <ul className="requisitos no-bullets">
              <li>
                <Checkbox inputId="req1" />{" "}
                <label htmlFor="req1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</label>
              </li>
              <li>
                <Checkbox inputId="req2" />{" "}
                <label htmlFor="req2">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</label>
              </li>
              <li>
                <Checkbox inputId="req3" />{" "}
                <label htmlFor="req3">When an unknown printer took a galley of type.</label>
              </li>
              <li>
                <Checkbox inputId="req4" />{" "}
                <label htmlFor="req4">And scrambled it to make a type specimen book.</label>
              </li>
            </ul>
          </div>
          <div className="cv-postulante">
            <h4>CV Postulante</h4>
            <ul>
              <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</li>
              <li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</li>
              <li>When an unknown printer took a galley of type.</li>
              <li>And scrambled it to make a type specimen book.</li>
            </ul>
          </div>
        </>
      ),
      status: "approved",
    },
    {
      id: "step2",
      icon: "pi pi-book",
      title: "Revision de CV",
      subtitle: "Educacion",
      lastModified: "Agosto 20, 2024",
      content: "Content for Step 2: Education",
      status: "pending",
    },
    {
      id: "step3",
      icon: "pi pi-cog",
      title: "Revision de CV",
      subtitle: "Experiencia",
      lastModified: "Agosto 19, 2024",
      content: "Content for Step 3: Experience",
      status: "denied",
    },
    {
      id: "step4",
      icon: "pi pi-calendar",
      title: "Entrevista",
      subtitle: "",
      lastModified: "Agosto 22, 2024",
      content: "Content for Step 4: Interview",
      status: "pending",
    },
  ];

  const handleStepChange = (e) => {
    setActiveIndex(e.index);
  };

  return (
    <div className="card">
      <Stepper
        ref={stepperRef}
        style={{ flexBasis: "50rem" }}
        orientation="vertical"
        activeStep={activeIndex}
        onChangeStep={handleStepChange}
      >
        {steps.map((step, index) => (
          <StepperPanel
            key={step.id}
            header={
              <div className="flex align-items-start step-header">
                <span
                  className={`inline-flex align-items-center justify-content-center border-circle border-1 h-3rem w-3rem z-1 cursor-pointer ${
                    step.status === "approved"
                      ? "bg-green text-white"
                      : step.status === "denied"
                      ? "bg-red text-white"
                      : "border-primary text-primary"
                  }`}
                >
                  <i
                    className={`pi ${
                      step.status === "approved"
                        ? "pi pi-check"
                        : step.status === "denied"
                        ? "pi pi-times"
                        : step.icon
                    } text-xl`}
                  ></i>
                </span>

                <div className="flex flex-column ml-4 align-items-start step-info">
                  <span className="font-bold text-lg">{step.title}</span>
                  <span className="text-sm">{step.subtitle}</span>
                  <span className="text-xs text-gray-600">
                    Modificado: {step.lastModified}
                  </span>
                </div>
              </div>
            }
          >
            <div className="flex flex-column step-panel">
              <div className="flex-auto flex justify-content-start align-items-top font-medium">
                {step.content}
              </div>
            </div>
            <div className="flex py-4 gap-2">
              {index > 0 && (
                <Button
                  label="Back"
                  severity="secondary"
                  icon="pi pi-arrow-left"
                  onClick={() => stepperRef.current.prevCallback()}
                />
              )}
              {index < steps.length - 1 ? (
                <Button
                  label="Next"
                  icon="pi pi-arrow-right"
                  iconPos="right"
                  onClick={() => stepperRef.current.nextCallback()}
                />
              ) : (
                <Button
                  label="Finish"
                  icon="pi pi-check"
                  iconPos="right"
                  onClick={() => alert("Finished!")}
                />
              )}
            </div>
          </StepperPanel>
        ))}
      </Stepper>
    </div>
  );
}
