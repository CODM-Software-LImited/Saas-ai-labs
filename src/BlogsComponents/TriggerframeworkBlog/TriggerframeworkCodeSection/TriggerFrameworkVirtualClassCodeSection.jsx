
import React, { useState } from "react";

const codeSnippet = `// Trigger Framework with virtual class code below
    trigger FrameWorkUsingVirtualTrigger on Account (before insert, before update, before delete,
    after insert, after update, after delete) {
    TriggerHandlerVirtual handler = new TriggerHandlerVirtual();

    if (Trigger.isBefore) {
        if (Trigger.isInsert) handler.beforeInsert(Trigger.new);
        if (Trigger.isUpdate) handler.beforeUpdate(Trigger.oldMap, Trigger.newMap);
        if (Trigger.isDelete) handler.beforeDelete(Trigger.oldMap);
    }

    if (Trigger.isAfter) {
        if (Trigger.isInsert) handler.afterInsert(Trigger.new);
        if (Trigger.isUpdate) handler.afterUpdate(Trigger.oldMap, Trigger.newMap);
        if (Trigger.isDelete) handler.afterDelete(Trigger.oldMap);
    }
}
`;

const TriggerFrameworkVirtualClassCodeSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); 
    });
  };

  return (
    <section className="section-integration-framework position-relative py-4">
      <div className="container">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="fw-bold text-900 mb-0">Trigger Framework using a Virtual Class</h4>
          <button
            className="btn btn-outline-secondary btn-sm d-flex align-items-center"
            onClick={handleCopy}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-clipboard me-1"
              viewBox="0 0 16 16"
            >
              <path d="M10 1.5v1a.5.5 0 0 0 .5.5H12a.5.5 0 0 1 .5.5V14a.5.5 0 0 1-.5.5H4A.5.5 0 0 1 3.5 14V4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 0 .5-.5v-1A.5.5 0 0 1 6 1h4a.5.5 0 0 1 .5.5zm-1 .5H7v1h2V2z" />
            </svg>
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        {/* Code block */}
        <pre
          id="integration-code"
          className="bg-light p-3 rounded border overflow-auto"
          style={{ fontSize: "0.9rem", whiteSpace: "pre-wrap" }}
        >
          {codeSnippet}
        </pre>
      </div>
    </section>
  );
};
export default TriggerFrameworkVirtualClassCodeSection;