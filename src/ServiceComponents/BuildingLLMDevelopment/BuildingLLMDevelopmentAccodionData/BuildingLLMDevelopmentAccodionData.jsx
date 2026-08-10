import Accordion from "../../ui/Accordion/Accordion";

const accordionData = [
    {
        number: 1,
        title: "How do LLMs work?",
        content:
            "LLMs utilize transformer architectures, which employ self-attention mechanisms to process and understand the context within text sequences. During training, they learn patterns and relationships in language, enabling them to generate coherent and contextually relevant responses."
    },
    {
        number: 2,
        title: "What is fine-tuning in the context of LLMs?",
        content:
            "Fine-tuning refers to the process of taking a pre-trained LLM and further training it on a specific dataset or for a particular task. This allows the model to adapt to specialized applications, improving its performance in targeted areas."
    },
    {
        number: 3,
        title: "How do LLMs handle multiple tasks like text generation and sentiment analysis?",
        content: "LLMs are versatile due to their training on diverse datasets. They can perform multiple tasks by leveraging their learned knowledge. Through fine-tuning, they can be adapted to perform specific tasks more effectively."
    },
    {
        number: 4,
        title: "What is “in-context learning” in LLMs?",
        content: 
            "In-context learning refers to an LLM's ability to learn and perform specific tasks based solely on the input text provided during inference, without additional fine-tuning. This allows the model to adapt to new tasks or instructions on the fly."
    },
     {
        number: 5,
        title: "Can LLMs generate code in programming languages?",
        content: 
            "Yes, LLMs can generate code in various programming languages. They assist developers by providing code snippets, debugging help, and translating code, thanks to their training on diverse datasets that include programming code."
    },
]

function BuildingLLMDevelopmentAccodionData() {
    return (
        <Accordion
            title="Frequently Asked Questions (FAQs) on Building Large Language Models"
            items={accordionData}
            defaultOpen={0}
        />

    )
}
export default BuildingLLMDevelopmentAccodionData;