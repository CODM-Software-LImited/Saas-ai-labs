import Accordion from "../../ui/Accordion/Accordion";

const accordionData = [
    {
        number: 1,
        title: "Web Development",
        content:
            "Frameworks like Django and Flask enable developers to create robust and scalable web applications efficiently. These frameworks handle backend functionalities, allowing for rapid development of complex websites."
    },
    {
        number: 2,
        title: "Data Science and Analytics",
        content:
            "Python's rich ecosystem of libraries, such as Pandas, NumPy, and Matplotlib, facilitates data analysis, visualization, and statistical modeling. This makes it a preferred choice for data scientists and analysts."
    },
    {
        number: 3,
        title: "Machine Learning and Artificial Intelligence",
        content: "Libraries like TensorFlow and scikit-learn empower developers to build and deploy machine learning models, enabling applications in predictive analytics, natural language processing, and computer vision.   "
    },
    {
        number: 4,
        title: "Automation and Scripting",
        content: 
            "Python's simplicity makes it ideal for automating repetitive tasks, such as file manipulation, data entry, and system monitoring, enhancing productivity and efficiency."
    },
     {
        number: 5,
        title: "Desktop GUI Applications",
        content: 
            "Tools like Tkinter and PyQt allow for the development of user-friendly desktop applications with graphical interfaces, catering to various user needs."
    },
    {
        number: 6,
        title: "Game Development",
        content: 
            "While not as prevalent as other languages in game development, Python, with libraries like Pygame, is used for creating simple games and prototypes."
    },
]

function PythonApplicationAccodionData() {
    return (
        <Accordion
            title="Real-World Use Cases of Python Applications"
            items={accordionData}
            defaultOpen={0}
        />
    )   
}
export default PythonApplicationAccodionData;