import IconStar from '../assets/images/icon-star.svg'

function Rating({
  handleSubmit,
  setNumber
}: {
  handleSubmit: () => void
  setNumber: (num: number) => void
}) {
  const Num = [1, 2, 3, 4, 5]

  return (
    <div className="w-[375px] space-y-7 rounded-3xl bg-veryDarkBlue p-5">
      <img className="rounded-full bg-darkBlue p-2.5" src={IconStar} />
      <div className="space-y-3">
        <h2 className="text-2xl text-white">How did we do?</h2>
        <p className="text-md text-lightGrey">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <ul className="flex items-center justify-between text-lightGrey">
        {Num.map((num) => (
          <li key={num}>
            <button
              className="rounded-full bg-darkBlue px-4 py-2 hover:bg-orange hover:text-white focus:bg-lightGrey focus:text-white"
              onClick={() => setNumber(num)}
            >
              {num}
            </button>
          </li>
        ))}
      </ul>
      <button
        className="w-full rounded-full bg-orange p-2 uppercase tracking-widest text-white hover:bg-white hover:text-orange"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  )
}

export default Rating
