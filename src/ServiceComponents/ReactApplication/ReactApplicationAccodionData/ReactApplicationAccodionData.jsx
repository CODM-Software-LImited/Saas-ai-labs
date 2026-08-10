import Accordion from "../../ui/Accordion/Accordion";

const accordionData = [
    {
        number: 1,
        title: "What is React Integration, and how does it benefit businesses?",
        content:
            "React Integration involves incorporating React—a JavaScript library for building user interfaces—into existing or new applications to create dynamic and responsive user experiences. By integrating React, businesses can enhance performance, improve scalability, and provide a seamless user interface across various platforms."
    },
    {
        number: 2,
        title: "How does React Integration improve user experience in web applications?",
        content:
            "React's component-based architecture allows for the development of reusable UI components, leading to consistent design and behavior across the application. Its virtual DOM efficiently updates and renders components, resulting in faster load times and a smoother user experience."
    },
    {
        number: 3,
        title: "Can React be integrated with existing backend systems?",
        content: "Yes, React can be seamlessly integrated with various backend systems and APIs. It works well with technologies like Node.js, Express, Django, Ruby on Rails, and more, allowing for the creation of full-stack applications that leverage existing infrastructures."
    },
    {
        number: 4,
        title: "What industries benefit most from React Integration?",
        content: 
            "Industries such as e-commerce, healthcare, education, finance, and entertainment benefit significantly from React Integration. For instance, e-commerce platforms use React to create dynamic product pages, while healthcare applications utilize it for responsive patient portals."
    },
     {
        number: 5,
        title: "How does React Integration support mobile application development?",
        content: 
            "Through React Native, React's principles extend to mobile app development, enabling the creation of native mobile applications for iOS and Android using a single codebase. This approach reduces development time and ensures consistency across web and mobile platforms."
    },
]
function ReactApplicationAccodionData() {
    return (
        <Accordion
            title="Questions about service"
            items={accordionData}
            defaultOpen={0}
        />

    )
}
export default ReactApplicationAccodionData;