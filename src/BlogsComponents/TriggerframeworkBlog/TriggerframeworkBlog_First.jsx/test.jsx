

// import FlipImgwithContent from '../../ui/FlipImgwithContent/FlipImgwithContent';
// import HeadingContent from '../../ui/HeadingContent/HeadingContent';
// import PhaseItems from '../../ui/PhaseItems/PhaseItems';

// import icon1 from '../../../assets/imgs/services-details/icon-5.svg';
// import icon2 from '../../../assets/imgs/services-details/icon-6.svg'
// import img from '../../../assets/imgs/services-details-2/Integration_Framework/img-5.jpg';
// import img2 from '../../../assets/imgs/services-details-2/Integration_Framework/img-6.jpg';
// import img3 from '../../../assets/imgs/services-details-2/Integration_Framework/img-4.jpg';
// import Accordion from '../../ui/Accordion/Accordion';
// import TriggerframeworkCodeSection from '../TriggerframeworkCodeSection/TriggerframeworkCodeSection';
// // import AccordionDataSection from '../accordionDataSection/accordionDataSection';
// // import CodeSection from '../CodeSection/CodeSection';
// // import BlogFormSection from '../../ui/BlogFormSection/BlogFormSection';
// // import BlogSection from '../../../components/BlogSection/BlogSection';
// // import BlogSidebar from '../../BlogSidebar/BlogSidebar';

// function TriggerframeworkBlog_First() {

//     const items = [
//         {
//             icon: icon1,
//             title: "Single Trigger Per Object",
//             description:
//                 "Prevents duplicate logic and execution order issues."
//         },
//         {
//             icon: icon2,
//             title: "Avoid Recursion",
//             description:
//                 "Prevents infinite loops and ensures efficient processing."
//         }]

//     return (
//         <>
//             <div className="container">
//                 <div className="row pt-8">
//                     {/* left container  */}
//                     <div className="col-lg-8 pt-5 ps-lg-4 mt-lg-0 mt-8 content">
//                         <img
//                             className="rounded-3"
//                             src={img1}
//                             alt="Codm"
//                             width={'50%'}
//                             style={{ width: "500px", height: "350px" }}
//                         />
//                         <HeadingContent
//                             title="What is Salesforce Trigger Framework?"
//                             content={
//                                 <>
//                                     A trigger framework is a structured way to organize and manage Apex triggers, especially when your project grows and involves multiple objects or complex business logic. Salesforce Trigger Framework helps you avoid common pitfalls like recursion, bulk processing issues, and code duplication. It provides a consistent approach to writing triggers that are efficient, maintainable, and scalable.
//                                 </>
//                             }
//                         />

//                         <PhaseItems items={[
//                             ["Single Trigger Per Object", "Code Reusability"],
//                             ["Ease of Maintenance", "Better Testing"],
//                             ["Avoid Recursion", "Consistent Design Pattern"],
//                         ]} />

//                         <HeadingContent
//                             title={"Benefits of Salesforce Trigger Framework"}
//                             content={
//                                 <>
//                                     A trigger framework provides a structured approach to writing Apex triggers, ensuring that they are efficient, maintainable, and scalable. It helps avoid common pitfalls like recursion, bulk processing issues, and code duplication. By using a trigger framework, you can achieve better code organization, reusability, and easier testing.
//                                 </>
//                             }
//                         />

//                         {/* filp img and content */}
//                         <FlipImgwithContent items={items} />
//                         <div className='border-bottom'></div>


//                         {/* next content section */}
//                         <HeadingContent
//                             title={"What is an abstract class in salesforce trigger framework ?"}
//                             content={
//                                 <>
//                                     An abstract class is a class that cannot be instantiated directly. It can contain both implemented methods and abstract methods (methods without a body).
//                                     Abstract classes are used to define a common interface for a group of related classes, allowing them to share code while still enforcing that certain methods must be implemented by subclasses.                          
//                                 </>
//                             }
//                         />
//                         <div className='border-bottom pt-4'></div>

//                         {/* next para */}
//                         <HeadingContent
//                             title={"When to Use an Abstract Class in trigger framework?"}
//                             content={<>
//                                 We use it when we want to provide shared code to multiple related classes and also enforce that child classes must complete certain logic.
//                             </>}
//                         />

//                         {/* next */}
//                         <HeadingContent
//                             title={"What is an interface?"}
//                             content={<>
//                                 An interface in Apex is a blueprint that only contains method signatures. Classes that implement the interface must define all the methods declared in the interface. Interfaces allow for polymorphism, enabling different classes to be treated as instances of the same type.
//                             </>}
//                         />

//                         <HeadingContent
//                             title={"When to Use an Interface in trigger framework?"}
//                             content={<>
//                                 We use interfaces when we want to define a contract that multiple classes can implement, allowing for flexible and interchangeable code design.
//                             </>}
//                         />
//                         <div className='border-bottom pt-4'></div>

//                         <h4 className="HeadingContent_heading my-3 pt-2">Types of Salesforce Trigger Framework</h4>

//                         <HeadingContent
//                             title={"#1 Salesforce Trigger Handler Pattern (Basic Handler Class)"}
//                             content={<>
//                                 <p>One trigger per object, with a single handler class that contains all the logic for that trigger. This pattern is simple and works well for small projects or when you have only a few triggers to manage.</p>

//                                 <p>Trigger delegates logic to a separate handler class. The handler class contains methods for each trigger event (before insert, after update, etc.).</p>

//                                 <p> Advantages Very simple and easy to understand. Keeps trigger logic organized in one place.</p>

//                                 <p> Keeps trigger code clean and focused on a single object. Easy to maintain and extend as the project grows.</p>
//                             </>}
//                         />

//                         {/* next  */}

//                         {/* next content */}
                       
//                         <div>
//                         </div>

//                         {/* img and content */}

                      
//                         <div className='border-bottom pb-3'></div>

//                         {/* <AccordionDataSection/> */}

//                     </div>

//                     {/* sidebar */}
//                     <div className="col-lg-4 sidebar">
//                         {/* need to create different componets with useState */}
//                         {/* <BlogSidebar/> */}
//                     </div>

//                     {/* code section */}
//                     {/* <CodeSection/> */}
//                     <TriggerframeworkCodeSection/>

//                     {/* form section */}
//                     {/* <BlogFormSection/> */}

//                     {/* last section */}
//                     {/* <BlogSection/> */}


//                 </div>
//             </div>
//         </>
//     )
// }

// export default TriggerframeworkBlog_First;