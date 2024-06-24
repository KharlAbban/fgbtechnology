const StepCard = ({id, content}) => {
  return (
    <div>
        <h4 className="font-bold text-5xl mb-4 max-lg:text-4xl max-sm:text-2xl">{id}</h4>
        <p className="text-gray-800 stepContent max-lg:text-sm max-sm:text-xs">{content}</p>
    </div>
  )
}

export default StepCard