interface AnswerTableTask1Props {
  options: string[]
}

export function AnswerTableTask1({ options }: AnswerTableTask1Props) {
  return (
    <table className="border-collapse mt-2 mx-auto">
      <tbody>
        <tr>
          <td className="border border-gray-400 p-1 bg-white text-sm">Говорящий</td>
          {options.map((option, index) => (
            <td key={index} className="border border-gray-400 p-1 text-center w-8 text-sm">
              {option}
            </td>
          ))}
        </tr>
        <tr>
          <td className="border border-gray-400 p-1 bg-white text-sm">Утверждение</td>
          {options.map((_, index) => (
            <td key={index} className="border border-gray-400 p-1 h-8"></td>
          ))}
        </tr>
      </tbody>
    </table>
  )
}
