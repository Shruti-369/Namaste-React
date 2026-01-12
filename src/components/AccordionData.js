import AccordionItem from "./AccordionItem";

const AccordionData = ({ categories }) => {
  if (!categories || categories.length === 0) return null;

  return (
    <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
      {categories.map((cat) => (
        <AccordionItem
          key={cat.title}
          title={cat.title}
          items={cat.items}
        />
      ))}
    </div>
  );
};

export default AccordionData;
