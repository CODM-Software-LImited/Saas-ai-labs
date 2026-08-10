
import React, { useState } from "react";

const codeSnippet = `
// Trigger Helper class code below
 public class TriggerHandlerVirtualClass extends TriggerHandlerVirtual {
    public override void beforeInsert(List<SObject> newList) {
        List<Account> accList = (List<Account>) newList;
        for (Account acc : accList) {
            acc.Name = acc.Name + ' (Validated)';
        }
    }
    
    public override void beforeUpdate(Map<Id, SObject> oldMap, Map<Id, SObject> newMap) {
        Map<Id, Account> oldAccMap = (Map<Id, Account>) oldMap;
        Map<Id, Account> newAccMap = (Map<Id, Account>) newMap;
        
        for (Id accId : newAccMap.keySet()) {
            Account oldAcc = oldAccMap.get(accId);
            Account newAcc = newAccMap.get(accId);
            
            if (oldAcc.Name != newAcc.Name) {
                System.debug('Account Name changed: ' + oldAcc.Name + ' -> ' + newAcc.Name);
            }
        }
    }
    
    public override void afterInsert(List<SObject> newList) {
        List<Account> accList = (List<Account>) newList;
        System.debug('Inserted accounts: ' + accList);
    }
    
    public override void afterDelete(Map<Id, SObject> oldMap) {
        List<Account> deletedAccounts = new List<Account>();
        for (SObject obj : oldMap.values()) {
            deletedAccounts.add((Account) obj);
        }
        System.debug('Deleted accounts: ' + deletedAccounts);
    }
}
`;

const TriggerHelperCodeSection = () => {
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
          <h4 className="fw-bold text-900 mb-0">Trigger Helper</h4>
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
export default TriggerHelperCodeSection;