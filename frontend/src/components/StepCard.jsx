const StepCard = ({id, content}) => {
  return (
    <div>
        <h4 className="font-bold text-5xl mb-4">{id}</h4>
        <p className="text-gray-800 stepContent">{content}</p>
    </div>
  )
}

export default StepCard