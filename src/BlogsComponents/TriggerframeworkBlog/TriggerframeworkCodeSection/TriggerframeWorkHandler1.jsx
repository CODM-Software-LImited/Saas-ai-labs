
import {useState} from "react";

const codeSnippet = `
///Trigger  Framework Handler  code below
 public class TriggerframeWorkHandler implements InterfaceTriggerFrameWork {

    public void beforeInsert(List<SObject> newList) {
        List<Contact> contacts = (List<Contact>) newList;
        for (Contact c : contacts) {
            c.LastName = c.LastName + ' - Validated';
        }
    }

    public void beforeUpdate(Map<Id, SObject> oldMap, Map<Id, SObject> newMap) {
        System.debug('Contact beforeUpdate logic');
    }

    public void beforeDelete(Map<Id, SObject> oldMap) {
        System.debug('Contact beforeDelete logic');
    }

    public void afterInsert(List<SObject> newList) {
        System.debug('Contact afterInsert logic');
    }

    public void afterUpdate(Map<Id, SObject> oldMap, Map<Id, SObject> newMap) {
        System.debug('Contact afterUpdate logic');
    }

    public void afterDelete(Map<Id, SObject> oldMap) {
        System.debug('Contact afterDelete logic');
    }
}
`;

const TriggerframeWorkHandler1 = () => {
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
          <h4 className="fw-bold text-900 mb-0">Trigger frame Work Handler</h4>
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
export default TriggerframeWorkHandler1;