
import img1 from '../../../assets/imgs/services-details-2/triggerframework/img-1.png';
import HeadingContent from '../../ui/HeadingContent/HeadingContent';
import PhaseItems from '../../ui/PhaseItems/PhaseItems';
import FlipImgwithContent from '../../ui/FlipImgwithContent/FlipImgwithContent';
import icon1 from '../../../assets/imgs/services-details/icon-5.svg';
import icon2 from '../../../assets/imgs/services-details/icon-6.svg';
import TriggerframeworkCodeSection_First from '../TriggerframeworkCodeSection/TriggerframeworkCodeSection_First';
import TriggerHandlerPatternCodeSection from '../TriggerframeworkCodeSection/TriggerHandlerPatternCodeSection';
import TriggerFrameworkVirtualClassCodeSection from '../TriggerframeworkCodeSection/TriggerFrameworkVirtualClassCodeSection';
import TriggerHelperCodeSection from '../TriggerframeworkCodeSection/TriggerHelperCodeSection';
import TriggerFrameInterface from '../TriggerframeworkCodeSection/TriggerFrameInterface';
import TriggerFrameworkInterfaceCodeSection from '../TriggerframeworkCodeSection/TriggerFrameworkInterfaceCodeSection';
import TriggerframeWorkHandler from '../TriggerframeworkCodeSection/TriggerframeWorkHandler';
import TriggerframeWorkHandler1 from '../TriggerframeworkCodeSection/TriggerframeWorkHandler1';
import TriggerFrameworkSidebar from '../../BlogSidebar/TriggerFrameworkSidebar';

function TriggerframeworkBlog_First() {

     const items = [
            {
                icon: icon1,
                title: "Single Trigger Per Object",
                description:
                "Prevents duplicate logic and execution order issues."
            },
            {
                icon: icon2,
                title: "Avoid Recursion",
                description:
                    "Prevents infinite loops and ensures efficient processing."
            }]

  return (
        <>
           <div className="container">
               <div className="row pt-8">
                   {/* left container  */}
                   <div className="col-lg-8 pt-5 ps-lg-4 mt-lg-0 mt-8 content">
                       <img
                           className="rounded-3"
                           src={img1}
                           alt="Codm"
                          //  width={'50%'}
                          width={"100%"}
                          //  style={{ width: "500px", height: "350px" }}
                       />
                        <HeadingContent 
                        title="What is Salesforce Trigger Framework?"
                        content="A trigger framework is a structured way to organize and manage Apex triggers, especially when your project grows and involves multiple objects or complex business logic. Salesforce Trigger Framework helps you avoid common pitfalls like recursion, bulk processing issues, and code duplication. It provides a consistent approach to writing triggers that are efficient, maintainable, and scalable."
                        />

                        <PhaseItems items={[
                            ["Single Trigger Per Object", "Code Reusability"],
                            ["Ease of Maintenance", "Better Testing"],
                            ["Avoid Recursion", "Consistent Design Pattern"],
                        ]}/>

                        <HeadingContent
                          title="Benefits of Salesforce Trigger Framework"
                          content="A trigger framework provides a structured approach to writing Apex triggers, ensuring that they are efficient, maintainable, and scalable. It helps avoid common pitfalls like recursion, bulk processing issues, and code duplication. By using a trigger framework, you can achieve better code organization, reusability, and easier testing."
                        />
                        
                  
                       {/* filp img and content */}
                        <FlipImgwithContent items={items} />
                        <div className='border-bottom'></div>

                       <div className='border-bottom'></div>
                       {/* next content section */}
                       <HeadingContent
                         title="What is an abstract class in salesforce trigger framework ?"
                         content={
                            <>
                            An abstract class is a class that cannot be instantiated directly. It can contain both implemented methods and abstract methods (methods without a body).<br/>
                            Abstract classes are used to define a common interface for a group of related classes, allowing them to share code while still enforcing that certain methods must be implemented by subclasses.
                            </>
                           }
                        />

                        <div className='border-bottom pt-3'></div>

                        {/* next para */}
                        <HeadingContent
                        title="When to Use an Abstract Class in trigger framework?"
                        content={
                            <>
                            We use it when we want to provide shared code to multiple related classes and also enforce that child classes must complete certain logic
                            </>
                        }
                        />  
                        <div className='border-bottom pt-3'></div>
                       {/* next para */}
                       <HeadingContent
                       title="What is an interface?"
                       content={
                        <>
                        An interface in Apex is a blueprint that only contains method signatures. Classes that implement the interface must define all the methods declared in the interface. Interfaces allow for polymorphism, enabling different classes to be treated as instances of the same type.
                        </>
                       }
                       /> <div className='border-bottom pt-3'></div>

                       {/* next para */}
                       <HeadingContent
                       title="When to Use an Interface in trigger framework??"
                       content={
                        <>
                       We use interfaces when we want to define a contract that multiple classes can implement, allowing for flexible and interchangeable code design.
                        </>
                       }
                       />
                        <div className='border-bottom pt-3'></div>

                       {/* next div =  Types of Salesforce Trigger Framework*/}
                       <div>
                        <h1 className='pt-3'>Types of Salesforce Trigger Framework</h1>

                        <HeadingContent
                        title="#1 Salesforce Trigger Handler Pattern (Basic Handler Class)"
                        content={
                        <>
                        <p>One trigger per object, with a single handler class that contains all the logic for that trigger. This pattern is simple and works well for small projects or when you have only a few triggers to manage.</p>
                        <p>Trigger delegates logic to a separate handler class. The handler class contains methods for each trigger event (before insert, after update, etc.).</p>
                        <p>Advantages Very simple and easy to understand. Keeps trigger logic organized in one place.</p>
                        <p>Keeps trigger code clean and focused on a single object. Easy to maintain and extend as the project grows.</p>
                        </>
                        }
                        />
                        {/* copy code section */}
                        <TriggerframeworkCodeSection_First/>
                        <TriggerHandlerPatternCodeSection/>

                        {/* */}
                          <HeadingContent
                          title="#2 Salesforce Trigger Framework using a Virtual Class (Advanced Handler Class)"  
                          content={
                            <>
                            <p>Abstract base class defines method signatures for trigger events (before insert, after update, etc.). Concrete subclasses implement these methods with specific logic.</p>
                            <p>Child handler classes implement the logic for specific objects or trigger events. This allows for better organization and separation of concerns.</p>
                            <p>Advantages Very simple and easy to understand. Keeps trigger logic organized in one place.</p>
                            <p>Clean, reusable structure that can be extended for different objects or trigger events.</p>
                            <p>Common behavior can be shared in the base class while allowing subclasses to implement specific logic.</p>
                            <p>Easy to override only what you need without affecting other logic.</p>
                            </>
                          }
                          />

                          <TriggerFrameworkVirtualClassCodeSection/>
                          <p className='HeadingContent_para'>Virtual keyword in front of the apex class or methods means they can be inherited and overridden by the child class.</p>
                          <TriggerHelperCodeSection/>

                          <HeadingContent
                          title="#3 Salesforce Trigger Framework using an Interface"
                          content={
                            <>
                            <p>Interface defines required methods for trigger events (before insert, after update, etc.). Classes that implement the interface must provide logic for these methods.</p>
                            <p>All handlers must implement the interface. This allows for flexible and interchangeable code design.</p>
                            <p>Enforces structure strictly by requiring all classes to implement the interface methods.</p>
                            <p>Enforces structure strictly by requiring all classes to implement the interface methods.</p>
                            <p>Promotes consistency across all object triggers.</p>
                            <p>Easy to override only what you need without affecting other logic.</p>
                            </>
                          }
                          />

                          <TriggerFrameInterface/>
                          <TriggerFrameworkInterfaceCodeSection/>
                          <TriggerframeWorkHandler/>
                          <TriggerframeWorkHandler1/>

                          <HeadingContent
                          title="#4 Salesforce Architecture Framework to Handle Triggers (Robust Framework)"
                          content={
                            <>
                            <p>Event dispatcher class handles trigger events and delegates to appropriate handlers based on the event type (before insert, after update, etc.).</p>
                            <p>Centralized control of trigger context and recursion control.</p>
                            <p>Trigger Dispatcher class manages the execution flow of trigger events.</p>
                            <p>Event Handler Classes implement specific logic for each trigger event.</p>
                            <p>Utility Classes (like recursion prevention) provide additional functionality to the framework.</p>
                            </>
                          }
                          />

                       </div>
                       
                        <div>
                        </div>    

                        <div className='border-bottom pb-3'></div>

                        {/* <AccordionDataSection/> */}

                    </div>

                    {/* sidebar */}
                    <div className="col-lg-4 sidebar">
                        {/* need to create different componets with useState */}
                        <TriggerFrameworkSidebar/>
                    </div>

                    {/* form section */}

                    {/* last section */}

                </div>
            </div>
        </>
  )
}

export default TriggerframeworkBlog_First;